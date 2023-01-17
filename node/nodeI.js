import chalk from 'chalk';
import inquirer from 'inquirer';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import { createSpinner } from 'nanospinner';


let playerName;
//timeout
const sleep = (ms = 2000) => new Promise((resolve) => setTimeout(resolve, ms))
async function start() {
    const title = chalkAnimation.rainbow(`welcome \n`);

    await sleep();
    title.stop();

    console.log(`
        ${chalk.bgCyanBright('yo')}
        i am running in your temrinal
        if you get any questions wrong i will ${chalk.bgRed('end')}
        so make sure to get all the   questions right
    `);

}

async function playerInfo() {
    const answers = await inquirer.prompt({
        name: 'player_name',
        type: 'input',
        message: 'what is your name'
    })
    playerName = answers.player_name
}

async function questionOne() {
    const answers = await inquirer.prompt({
        name: 'question_1',
        type: 'list',
        message: 'what path will you take\n',
        choices: [
            'left',
            'right',
            'straight'
        ]
    })
    console.log(answers.question_1,'answers question1');
    // console.log(pathChoice(answers.question_1))
    return pathChoice(answers.question_1)
}

async function pathChoice(choice) {
    const spinner = createSpinner('loading next choice').start();
    await sleep()
    if (choice ==='left') {
        spinner.success({ text: `${playerName} chose ${choice}`})
    } else if (choice === 'right') {
        spinner.warn({ text: `${playerName} this is not looking good`})
    } else {
        spinner.error({ text: 'the game ends sorry'})
        process.exit(1)
    }
}

async function winDisplay() {
    console.clear();
    const winMessage = `congratulations, you reached the end ${playerName}`;
    figlet(winMessage, (err,data) =>{
        console.log((data));
    })
}

await start()
await playerInfo()
await questionOne()
await winDisplay()

