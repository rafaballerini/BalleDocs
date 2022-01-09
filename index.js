//imports
import { Client, Intents } from "discord.js";
import { REST } from "@discordjs/rest";
import { Routes } from "discord-api-types/v9";
import "dotenv/config";
import { createRequire } from "module";
import { type } from "os";
const require = createRequire(import.meta.url);
const techs = require("./techs.json");

const { SlashCommandBuilder } = require('@discordjs/builders');

const docs = { data: new SlashCommandBuilder()
	.setName('docs')
	.setDescription('Acesse a documentação da sua tech favorita!')
	.addStringOption(option => option.setName('lang').setDescription('Digite o nome da lang'))
};
const rest = new REST({ version: "9" }).setToken(process.env.token);

const commands = [];

commands.push(docs.data.toJSON());

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
  

	if (interaction.commandName === `docs`) {
    let tecnologias = Object.keys(techs);
    let string = interaction.options.getString('lang')
    if (!string) return;
    if (tecnologias.includes(string)) {
      await interaction.reply(`📚 Estude ${string} com a documentação: ${techs[string]} 📚`);
	  }
    else {
      await interaction.reply("Lang invalida ou não inserida na database")
    }
}
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  let prefix = "!docs"
  if (!message.content.startsWith(prefix)) return;
  let messageArray = message.content.split(" ")
  let command = messageArray[1]
  let tecnologias = Object.keys(techs);

  if (tecnologias.includes(command)) {
    message.channel.send(
      `📚 Estude ${command} com a documentação: ${
        techs[command]
      } 📚`
    );
  }
  else {
    message.channel.send("Lang invalida ou não inserida na database")
  }
});

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(
      Routes.applicationGuildCommands(process.env.appid, process.env.guildid), {
        body: commands,
      }
    );

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();

client.login(process.env.token);
