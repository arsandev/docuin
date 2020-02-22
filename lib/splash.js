import figlet from 'figlet'
import chalk from 'chalk'
export default function splash(){
  let header = figlet.textSync('DOCUIN', {font:"epic",horizontalLayout:"full"})+" by arsandev"
  console.log(chalk.green(header))
  console.log(chalk.yellow("Get readme documentation from github"))
  console.log()
  console.log("docuin [user]/[repository] [other_user]/[other_repository]")
}
