import {Events} from 'discord.js'
import {client} from '..'
import {guildId} from '../constant'

client.on('commandsReset', async () => {
  client.application!.commands.create(
    {
      name: 'neko',
      description: 'にゃー'
    },
    guildId
  )
})

client.on(Events.InteractionCreate, async (interaction) => {
  if (
    !interaction.inCachedGuild() ||
    !interaction.isChatInputCommand() ||
    interaction.commandName !== 'neko'
  )
    return
  await interaction.reply('にゃー')
})