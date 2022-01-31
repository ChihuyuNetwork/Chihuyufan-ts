import { Client } from 'discord.js'
import { readdir } from 'fs/promises'
import { join, parse } from 'path'

export class MyBot extends Client {
  async loadCogs() {
    const cogs = await readdir(join('src', 'cogs'))
    for (const cog of cogs) {
      const cogName = parse(cog).name
      await import(`../cogs/${cogName}`)
      console.log(`loaded ${cogName}`)
    }
  }
}
