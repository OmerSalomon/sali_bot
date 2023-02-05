import { Chat } from "whatsapp-web.js";
import { Contact } from "whatsapp-web.js";
import { Message } from "whatsapp-web.js";
 
 
class TicTacTouArrayHandling {
    static ticTacToeArray: TicTacTouGame[] = [];
    static searchGameByChatID(chatID: string) {
        for (const game of this.ticTacToeArray) {
            if (game.chatID === chatID) {
                return game;
            }
        }
        return null;
    }
    static searchGameByCommand(command: Command) {
        let chatID = command.message.from;
        for (const game of this.ticTacToeArray) {
            if (game.chatID === chatID) {
                return game;
            }
        }
        return null;
    }       //looking for the game
    /**
     * give it a command arg and it will end the game
    */
    static async endGameByCommand(command: Command) {
        let game = this.searchGameByCommand(command);
        let length = this.ticTacToeArray.length
        for (let i = 0; i < length; i++) {
            if (this.ticTacToeArray[i] === game) {
                this.ticTacToeArray.splice(i, 1);
                console.log('game removed');
                command.message.reply('game has ended')
            }
        }
    }
    /**
     * give it a game arg and it will end the game
    */
    static async endGameByGame(game: TicTacTouGame) {
        for (let i = 0; i < this.ticTacToeArray.length; i++) {
            if (this.ticTacToeArray[i] === game) {
                this.ticTacToeArray.splice(i, 1);
                console.log('game removed');
            }
        }
    }
 
 
}
class GameBoardCord {
    constructor(xAxis: number, yAxis: number) {
        this.xAxis = xAxis;
        this.yAxis = yAxis;
    }
    xAxis: number;
    yAxis: number;
}
 
class GameBoard {
    constructor() { }
    board: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    static numberToGameBoardCord(num: number) {
        let indexArr = [[0][0]];
        if (num > 0 && num < 10) {
            let xAxis: number = 0;
            let yAxis: number = 0;
            if (num == 1) {
                xAxis = 0;
                yAxis = 0;
            }
            else if (num == 2) {
                xAxis = 1;
                yAxis = 0;
            }
            else if (num == 3) {
                xAxis = 2;
                yAxis = 0;
            }
            else if (num == 4) {
                xAxis = 0;
                yAxis = 1;
            }
            else if (num == 5) {
                xAxis = 1;
                yAxis = 1;
            }
            else if (num == 6) {
                xAxis = 2;
                yAxis = 1;
            }
            else if (num == 7) {
                xAxis = 0;
                yAxis = 2;
            }
            else if (num == 8) {
                xAxis = 1;
                yAxis = 2;
            }
            else if (num == 9) {
                xAxis = 2;
                yAxis = 2;
            }
            const cord: GameBoardCord = new GameBoardCord(xAxis, yAxis);
            return cord;
        }
    }
    checkForWin() {
        let res: number = 0;
        for (let num = 1; num <= 2; num++) {
            for (let i = 0; i < 3; i++) {
                if (this.board[i][0] == num && this.board[i][1] == num && this.board[i][2] == num) {
                    res = num;
                }
            }
            for (let i = 0; i < 3; i++) {
                if (this.board[0][i] == num && this.board[1][i] == num && this.board[2][i] == num) {
                    res = num;
                }
            }
            if (this.board[0][0] == num && this.board[1][1] == num && this.board[2][2] == num) {
                res = num;
            }
            if (this.board[2][0] == num && this.board[1][1] == num && this.board[0][2] == num) {
                res = num;
            }
        }
        return res;
    }
    move(oneDimensionalIndex: number, playerSign: number) {
        let cord = GameBoard.numberToGameBoardCord(oneDimensionalIndex);
        GameBoard.numberToGameBoardCord(oneDimensionalIndex);
        if (cord != null && playerSign >= 1 && playerSign <= 2) {
            if (this.board[cord.yAxis][cord.xAxis] == 0) {
                this.board[cord.yAxis][cord.xAxis] = playerSign;
                return true;
            }
        }
        return false;
    }
 
    toString() {
        let table = '';
        for (let i = 0; i < 3; i++) {
            let line = '';
            for (let j = 0; j < 3; j++) {
                line += '[ ' + this.board[i][j] + ' ] ';
            }
            line += "\n" + "\n";
            table += line;
        }
        return table;
    }
    toEmojis() {
        let table = '';
        for (let i = 0; i < 3; i++) {
            let line = '';
            for (let j = 0; j < 3; j++) {
                if (this.board[i][j] == 1) {
                    line += '[ ' + '✖️' + ' ]';
                   
                }
                if (this.board[i][j] == 2) {
                    line += '[ ' + '⭕' + ' ]';
                   
                }
                if (this.board[i][j] == 0) {
                    line += '[  ' + '⬜' + ' ]';
                }
               
            }
            line += "\n" + "\n";
            table += line;
        }
        return table;
    }
 
    winBoardToString() {
        let res: number = 0;
        //create 2 dim array of board
        for (let num = 1; num <= 2; num++) {
            for (let i = 0; i < 3; i++) {
                if (this.board[i][0] == num && this.board[i][1] == num && this.board[i][2] == num) {
                    res = num;
                }
            }
            for (let i = 0; i < 3; i++) {
                if (this.board[0][i] == num && this.board[1][i] == num && this.board[2][i] == num) {
                    res = num;
                }
            }
            if (this.board[0][0] == num && this.board[1][1] == num && this.board[2][2] == num) {
                res = num;
            }
            if (this.board[2][0] == num && this.board[1][1] == num && this.board[0][2] == num) {
                res = num;
            }
        }
        return res;
       
    }
}
class TicTacTouGame {
    constructor(playerOne: Contact, playerTwo: Contact, chatID: string) {
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.chatID = chatID;
        this.turn = Math.floor(Math.random() * 2) + 1; //return 1 or 2
    }
    GameBoard: GameBoard = new GameBoard();
    playerOne: Contact;
    playerTwo: Contact;
    chatID: String;
    turn: number;
}
 
 
class Command {
    constructor(stringCommand: string, additionalTxt: string, message: Message) {
        this.stringCommand = stringCommand;
        this.additionalTxt = additionalTxt;
        this.message = message;
    }
    stringCommand: string;
    additionalTxt: string;
    message: Message;
 
    static commandBuilder(message: Message) {
        const message_body: string = message.body;
        const slicePoint = message_body.indexOf('!');
        const txtCommand = message_body.slice(0, slicePoint + 1);
        const additionalTxt = message_body.slice(slicePoint + 2);
        const command = new Command(txtCommand, additionalTxt, message);
        return command;
    }
} // contain every info that needed to operate any function
 
 
//turn on the bot start
const qrcode = require('qrcode-terminal');
const fs = require('fs');
const { Client, LocalAuth } = require('whatsapp-web.js');
const { time } = require('console');
const client = new Client({
    authStrategy: new LocalAuth()
});
client.on('qr', (qr: any) => {
    qrcode.generate(qr, { small: true });
});
client.on('ready', () => {
    console.log('Client is ready!');
});
 
client.initialize();
//turn on the bot end
 
client.on('message', (message: Message) => {
    manager(message);
});

client.on('message_create', (message: Message) => {
    manager(message);
});
 
async function manager(message: Message) {
    const command = await Command.commandBuilder(message);
    if (command.stringCommand == 'Play!' || command.stringCommand ==  'play!') {
        newTicTacToeGame(command);
    }
    if (command.stringCommand == 'End!' || command.stringCommand == 'end!') {
        TicTacTouArrayHandling.endGameByCommand(command);
    }
    if (command.stringCommand == 'Change!' || command.stringCommand == 'change!') {
        changeTurn(command);
    }
    if (command.stringCommand == 'Help!' || command.stringCommand == 'help!') {
        help(command);
    }
    if (TicTacTouArrayHandling.ticTacToeArray.length > 0) {
        move(message);
    }
   
}
 
/**
 * This function create new TicTacTou game and push it to the TicTacTouArray.
 *
 * situation(everything good): send message: "New TicTacTou game started playerOne playerTwo"
 *
 * situation(other game is being played in the chat): send message "other game is being played"
 *
 * situation(there is more then one user mentioned): send message "Please mention other player to play with"
 *
 * situation(no one mention in the chat): send message "Please mention other player to play with"
 *
 */
async function newTicTacToeGame(command: Command) {
    let isOtherGameBeingPlayedInChat = (null !== TicTacTouArrayHandling.searchGameByCommand(command));
    console.log('isOtherGameBeingPlayedInChat= ' + isOtherGameBeingPlayedInChat)
    if (isOtherGameBeingPlayedInChat == false) {
        let mentionArray: Contact[] = await command.message.getMentions();
        let playerOne = await command.message.getContact();
        if (mentionArray.length === 1) {
            let chatID = command.message.from;
            let chat: Chat = await command.message.getChat();
            let playerTwo = mentionArray[0];
            let text = `@${playerOne.id.user} ` + `@${playerTwo.id.user} `;
            let newGame: TicTacTouGame = new TicTacTouGame(playerOne, playerTwo, chatID);
            TicTacTouArrayHandling.ticTacToeArray.push(newGame);
            let string: string = '*New TicTacTou game started* ' + text + "\n" +"\n";
            string += ' [ 1 ] ' + ' [ 2 ] ' + ' [ 3 ] ' + "\n" + "\n"  + ' [ 4 ] ' + ' [ 5 ] ' + ' [ 6 ] ' + "\n" + "\n" + ' [ 7 ] ' + ' [ 8 ] ' + ' [ 9 ] ' + "\n";
            string += "\n";
            if (newGame.turn === 1) {
                string += '*first turn:* ' + `@${playerOne.id.user}`;
            }
            else {
                string += '*first turn:* ' + `@${playerTwo.id.user}`;
            }
            string += "\n" + "\n";
            string+= 'For help type "help!"';
            chat.sendMessage(string, { mentions: [playerOne, playerTwo] });
        }
        else if (mentionArray.length == 0) {
            command.message.reply('*Bot:* Please mention player to play with');
        }
        else if (mentionArray.length > 1) {
            command.message.reply('*Bot:* Please mention only only one player to play with');
        }
    }
    else {
        command.message.reply('*Bot:* Other game is being played in the chat ')
    }
}
 
async function move(message: Message) {
    let oneDimensionalIndex: number = parseInt(message.body);
    if (oneDimensionalIndex >= 1 && oneDimensionalIndex <= 9) {
        let player = await message.getContact();
        let game = TicTacTouArrayHandling.searchGameByChatID(message.from);
        if (game != null) {
            if (player.id.user === game.playerOne.id.user || player.id.user === game.playerTwo.id.user) {
                if (game.turn === 1) {
                    if (player.id.user === game.playerOne.id.user) {
                        const isMoveValid = game.GameBoard.move(oneDimensionalIndex, 1);
                        let string = game.GameBoard.toEmojis() + "\n" + "\n" + 'next turn: ' + `@${game.playerTwo.id.user}` + "'s turn";
                        const chat = await message.getChat();
                        chat.sendMessage(string, { mentions: [game.playerTwo] });
                        game.turn = 2;
                        checkForWin(game, chat);
                    }
                } else if (game.turn === 2) {
                    if (player.id.user === game.playerTwo.id.user) {
                        const isMoveValid = game.GameBoard.move(oneDimensionalIndex, 2);
                        let string = game.GameBoard.toEmojis() + "\n" + "\n" + 'next turn: ' + `@${game.playerOne.id.user}` + "'s turn";
                        const chat = await message.getChat();
                        chat.sendMessage(string, { mentions: [game.playerOne] })
                        game.turn = 1;
                        checkForWin(game, chat);
                    }
                }
                else {
                    message.reply('*Bot:* Please wait for your turn');
                }
            }
            else {
                message.reply('*Bot:* אתה לא חלק מהמשחק לך תמצא חברים אחרים לשחק איתם');
            }
        }
    }
}
 
 
function checkForWin(game: TicTacTouGame, chat: Chat) {
    let winCheck: number = game.GameBoard.checkForWin();
    if (winCheck === 1) {
        let string = '*Winner:* ' + `@${game.playerOne.id.user}` + "\n" + "\n" + game.GameBoard.toEmojis() + "\n" + "\n" + 'game ended';
        chat.sendMessage(string, { mentions: [game.playerOne] });
        TicTacTouArrayHandling.endGameByGame(game);
 
    }
    if (winCheck === 2) {
        let string = '*Winner:* ' + `@${game.playerTwo.id.user}` + "\n" + "\n" + game.GameBoard.toEmojis() + "\n" + "\n" + 'game ended';
        chat.sendMessage(string, { mentions: [game.playerTwo] });
        TicTacTouArrayHandling.endGameByGame(game);
    }
   
}
 
 
/**
*only for testing
**/
async function changeTurn(command: Command) {
    console.log('turn change')
    let game = TicTacTouArrayHandling.searchGameByChatID(command.message.from);
    if (game != null) {
        if (game.turn === 1) {
            let string = game.GameBoard.toEmojis() + "\n" + "\n" + 'next turn: ' + `@${game.playerTwo.id.user}` + "'s turn";
            const chat = await command.message.getChat();
            chat.sendMessage(string, { mentions: [game.playerTwo] });
            game.turn = 2;
        }
        else if (game.turn === 2) {
            let string = game.GameBoard.toEmojis() + "\n" + "\n" + 'next turn: ' + `@${game.playerOne.id.user}` + "'s turn";
            const chat = await command.message.getChat();
            chat.sendMessage(string, { mentions: [game.playerOne] });
            game.turn = 1;
        }
    }
}
 
async function help(command:Command) {
    let string = '*To start a new game:* "play! @groupChatParticipant' + "\n" + "\n";
    string += '*To make a move:* type the index of the cell you want to put your char in (1 - 9)' + "\n" + "\n";
    string += '*To end the game*: "end!"';
    command.message.reply(string);
}
 

