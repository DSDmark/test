import { relative } from 'path'

const buildEslintCommand = filenames =>
  `next lint --file ${filenames.map(f => relative(process.cwd(), f)).join(' --file ')}`

const stageCommands = ['pnpm format', buildEslintCommand]

export default {
  '*.{js,jsx,ts,tsx}': stageCommands,
}
