"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var TicTacTouArrayHandling = /** @class */ (function () {
    function TicTacTouArrayHandling() {
    }
    TicTacTouArrayHandling.searchGameByChatID = function (chatID) {
        for (var _i = 0, _a = this.ticTacToeArray; _i < _a.length; _i++) {
            var game = _a[_i];
            if (game.chatID === chatID) {
                return game;
            }
        }
        return null;
    };
    TicTacTouArrayHandling.searchGameByCommand = function (command) {
        var chatID = command.message.from;
        for (var _i = 0, _a = this.ticTacToeArray; _i < _a.length; _i++) {
            var game = _a[_i];
            if (game.chatID === chatID) {
                return game;
            }
        }
        return null;
    }; //looking for the game
    /**
     * give it a command arg and it will end the game
    */
    TicTacTouArrayHandling.endGameByCommand = function (command) {
        return __awaiter(this, void 0, void 0, function () {
            var game, length, i;
            return __generator(this, function (_a) {
                game = this.searchGameByCommand(command);
                length = this.ticTacToeArray.length;
                for (i = 0; i < length; i++) {
                    if (this.ticTacToeArray[i] === game) {
                        this.ticTacToeArray.splice(i, 1);
                        console.log('game removed');
                        command.message.reply('game has ended');
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * give it a game arg and it will end the game
    */
    TicTacTouArrayHandling.endGameByGame = function (game) {
        return __awaiter(this, void 0, void 0, function () {
            var i;
            return __generator(this, function (_a) {
                for (i = 0; i < this.ticTacToeArray.length; i++) {
                    if (this.ticTacToeArray[i] === game) {
                        this.ticTacToeArray.splice(i, 1);
                        console.log('game removed');
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    TicTacTouArrayHandling.ticTacToeArray = [];
    return TicTacTouArrayHandling;
}());
var GameBoardCord = /** @class */ (function () {
    function GameBoardCord(xAxis, yAxis) {
        this.xAxis = xAxis;
        this.yAxis = yAxis;
    }
    return GameBoardCord;
}());
var GameBoard = /** @class */ (function () {
    function GameBoard() {
        this.board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    }
    GameBoard.numberToGameBoardCord = function (num) {
        var indexArr = [[0][0]];
        if (num > 0 && num < 10) {
            var xAxis = 0;
            var yAxis = 0;
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
            var cord = new GameBoardCord(xAxis, yAxis);
            return cord;
        }
    };
    GameBoard.prototype.checkForWin = function () {
        var res = 0;
        for (var num = 1; num <= 2; num++) {
            for (var i = 0; i < 3; i++) {
                if (this.board[i][0] == num && this.board[i][1] == num && this.board[i][2] == num) {
                    res = num;
                }
            }
            for (var i = 0; i < 3; i++) {
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
    };
    GameBoard.prototype.move = function (oneDimensionalIndex, playerSign) {
        var cord = GameBoard.numberToGameBoardCord(oneDimensionalIndex);
        GameBoard.numberToGameBoardCord(oneDimensionalIndex);
        if (cord != null && playerSign >= 1 && playerSign <= 2) {
            if (this.board[cord.yAxis][cord.xAxis] == 0) {
                this.board[cord.yAxis][cord.xAxis] = playerSign;
                return true;
            }
        }
        return false;
    };
    GameBoard.prototype.toString = function () {
        var table = '';
        for (var i = 0; i < 3; i++) {
            var line = '';
            for (var j = 0; j < 3; j++) {
                line += '[ ' + this.board[i][j] + ' ] ';
            }
            line += "\n" + "\n";
            table += line;
        }
        return table;
    };
    GameBoard.prototype.toEmojis = function () {
        var table = '';
        for (var i = 0; i < 3; i++) {
            var line = '';
            for (var j = 0; j < 3; j++) {
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
    };
    GameBoard.prototype.winBoardToString = function () {
        var res = 0;
        //create 2 dim array of board
        for (var num = 1; num <= 2; num++) {
            for (var i = 0; i < 3; i++) {
                if (this.board[i][0] == num && this.board[i][1] == num && this.board[i][2] == num) {
                    res = num;
                }
            }
            for (var i = 0; i < 3; i++) {
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
    };
    return GameBoard;
}());
var TicTacTouGame = /** @class */ (function () {
    function TicTacTouGame(playerOne, playerTwo, chatID) {
        this.GameBoard = new GameBoard();
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
        this.chatID = chatID;
        this.turn = Math.floor(Math.random() * 2) + 1; //return 1 or 2
    }
    return TicTacTouGame;
}());
var Command = /** @class */ (function () {
    function Command(stringCommand, additionalTxt, message) {
        this.stringCommand = stringCommand;
        this.additionalTxt = additionalTxt;
        this.message = message;
    }
    Command.commandBuilder = function (message) {
        var message_body = message.body;
        var slicePoint = message_body.indexOf('!');
        var txtCommand = message_body.slice(0, slicePoint + 1);
        var additionalTxt = message_body.slice(slicePoint + 2);
        var command = new Command(txtCommand, additionalTxt, message);
        return command;
    };
    return Command;
}()); // contain every info that needed to operate any function
//turn on the bot start
var qrcode = require('qrcode-terminal');
var fs = require('fs');
var _a = require('whatsapp-web.js'), Client = _a.Client, LocalAuth = _a.LocalAuth;
var time = require('console').time;
var client = new Client({
    authStrategy: new LocalAuth()
});
client.on('qr', function (qr) {
    qrcode.generate(qr, { small: true });
});
client.on('ready', function () {
    console.log('Client is ready!');
});
client.initialize();
//turn on the bot end
client.on('message', function (message) {
    manager(message);
});
client.on('message_create', function (message) {
    manager(message);
});
function manager(message) {
    return __awaiter(this, void 0, void 0, function () {
        var command;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Command.commandBuilder(message)];
                case 1:
                    command = _a.sent();
                    if (command.stringCommand == 'Play!' || command.stringCommand == 'play!') {
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
                    return [2 /*return*/];
            }
        });
    });
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
function newTicTacToeGame(command) {
    return __awaiter(this, void 0, void 0, function () {
        var isOtherGameBeingPlayedInChat, mentionArray, playerOne, chatID, chat, playerTwo, text, newGame, string;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isOtherGameBeingPlayedInChat = (null !== TicTacTouArrayHandling.searchGameByCommand(command));
                    console.log('isOtherGameBeingPlayedInChat= ' + isOtherGameBeingPlayedInChat);
                    if (!(isOtherGameBeingPlayedInChat == false)) return [3 /*break*/, 6];
                    return [4 /*yield*/, command.message.getMentions()];
                case 1:
                    mentionArray = _a.sent();
                    return [4 /*yield*/, command.message.getContact()];
                case 2:
                    playerOne = _a.sent();
                    if (!(mentionArray.length === 1)) return [3 /*break*/, 4];
                    chatID = command.message.from;
                    return [4 /*yield*/, command.message.getChat()];
                case 3:
                    chat = _a.sent();
                    playerTwo = mentionArray[0];
                    text = "@".concat(playerOne.id.user, " ") + "@".concat(playerTwo.id.user, " ");
                    newGame = new TicTacTouGame(playerOne, playerTwo, chatID);
                    TicTacTouArrayHandling.ticTacToeArray.push(newGame);
                    string = '*New TicTacTou game started* ' + text + "\n" + "\n";
                    string += ' [ 1 ] ' + ' [ 2 ] ' + ' [ 3 ] ' + "\n" + "\n" + ' [ 4 ] ' + ' [ 5 ] ' + ' [ 6 ] ' + "\n" + "\n" + ' [ 7 ] ' + ' [ 8 ] ' + ' [ 9 ] ' + "\n";
                    string += "\n";
                    if (newGame.turn === 1) {
                        string += '*first turn:* ' + "@".concat(playerOne.id.user);
                    }
                    else {
                        string += '*first turn:* ' + "@".concat(playerTwo.id.user);
                    }
                    string += "\n" + "\n";
                    string += 'For help type "help!"';
                    chat.sendMessage(string, { mentions: [playerOne, playerTwo] });
                    return [3 /*break*/, 5];
                case 4:
                    if (mentionArray.length == 0) {
                        command.message.reply('*Bot:* Please mention player to play with');
                    }
                    else if (mentionArray.length > 1) {
                        command.message.reply('*Bot:* Please mention only only one player to play with');
                    }
                    _a.label = 5;
                case 5: return [3 /*break*/, 7];
                case 6:
                    command.message.reply('*Bot:* Other game is being played in the chat ');
                    _a.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    });
}
function move(message) {
    return __awaiter(this, void 0, void 0, function () {
        var oneDimensionalIndex, player, game, isMoveValid, string, chat, isMoveValid, string, chat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    oneDimensionalIndex = parseInt(message.body);
                    if (!(oneDimensionalIndex >= 1 && oneDimensionalIndex <= 9)) return [3 /*break*/, 10];
                    return [4 /*yield*/, message.getContact()];
                case 1:
                    player = _a.sent();
                    game = TicTacTouArrayHandling.searchGameByChatID(message.from);
                    if (!(game != null)) return [3 /*break*/, 10];
                    if (!(player.id.user === game.playerOne.id.user || player.id.user === game.playerTwo.id.user)) return [3 /*break*/, 9];
                    if (!(game.turn === 1)) return [3 /*break*/, 4];
                    if (!(player.id.user === game.playerOne.id.user)) return [3 /*break*/, 3];
                    isMoveValid = game.GameBoard.move(oneDimensionalIndex, 1);
                    string = game.GameBoard.toEmojis() + "\n" + "\n" + 'next turn: ' + "@".concat(game.playerTwo.id.user) + "'s turn";
                    return [4 /*yield*/, message.getChat()];
                case 2:
                    chat = _a.sent();
                    chat.sendMessage(string, { mentions: [game.playerTwo] });
                    game.turn = 2;
                    checkForWin(game, chat);
                    _a.label = 3;
                case 3: return [3 /*break*/, 8];
                case 4:
                    if (!(game.turn === 2)) return [3 /*break*/, 7];
                    if (!(player.id.user === game.playerTwo.id.user)) return [3 /*break*/, 6];
                    isMoveValid = game.GameBoard.move(oneDimensionalIndex, 2);
                    string = game.GameBoard.toEmojis() + "\n" + "\n" + 'next turn: ' + "@".concat(game.playerOne.id.user) + "'s turn";
                    return [4 /*yield*/, message.getChat()];
                case 5:
                    chat = _a.sent();
                    chat.sendMessage(string, { mentions: [game.playerOne] });
                    game.turn = 1;
                    checkForWin(game, chat);
                    _a.label = 6;
                case 6: return [3 /*break*/, 8];
                case 7:
                    message.reply('*Bot:* Please wait for your turn');
                    _a.label = 8;
                case 8: return [3 /*break*/, 10];
                case 9:
                    message.reply('*Bot:* אתה לא חלק מהמשחק לך תמצא חברים אחרים לשחק איתם');
                    _a.label = 10;
                case 10: return [2 /*return*/];
            }
        });
    });
}
function checkForWin(game, chat) {
    var winCheck = game.GameBoard.checkForWin();
    if (winCheck === 1) {
        var string = '*Winner:* ' + "@".concat(game.playerOne.id.user) + "\n" + "\n" + game.GameBoard.toEmojis() + "\n" + "\n" + 'game ended';
        chat.sendMessage(string, { mentions: [game.playerOne] });
        TicTacTouArrayHandling.endGameByGame(game);
    }
    if (winCheck === 2) {
        var string = '*Winner:* ' + "@".concat(game.playerTwo.id.user) + "\n" + "\n" + game.GameBoard.toEmojis() + "\n" + "\n" + 'game ended';
        chat.sendMessage(string, { mentions: [game.playerTwo] });
        TicTacTouArrayHandling.endGameByGame(game);
    }
}
/**
*only for testing
**/
function changeTurn(command) {
    return __awaiter(this, void 0, void 0, function () {
        var game, string, chat, string, chat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('turn change');
                    game = TicTacTouArrayHandling.searchGameByChatID(command.message.from);
                    if (!(game != null)) return [3 /*break*/, 4];
                    if (!(game.turn === 1)) return [3 /*break*/, 2];
                    string = game.GameBoard.toEmojis() + "\n" + "\n" + 'next turn: ' + "@".concat(game.playerTwo.id.user) + "'s turn";
                    return [4 /*yield*/, command.message.getChat()];
                case 1:
                    chat = _a.sent();
                    chat.sendMessage(string, { mentions: [game.playerTwo] });
                    game.turn = 2;
                    return [3 /*break*/, 4];
                case 2:
                    if (!(game.turn === 2)) return [3 /*break*/, 4];
                    string = game.GameBoard.toEmojis() + "\n" + "\n" + 'next turn: ' + "@".concat(game.playerOne.id.user) + "'s turn";
                    return [4 /*yield*/, command.message.getChat()];
                case 3:
                    chat = _a.sent();
                    chat.sendMessage(string, { mentions: [game.playerOne] });
                    game.turn = 1;
                    _a.label = 4;
                case 4: return [2 /*return*/];
            }
        });
    });
}
function help(command) {
    return __awaiter(this, void 0, void 0, function () {
        var string;
        return __generator(this, function (_a) {
            string = '*To start a new game:* "play! @groupChatParticipant' + "\n" + "\n";
            string += '*To make a move:* type the index of the cell you want to put your char in (1 - 9)' + "\n" + "\n";
            string += '*To end the game*: "end!"';
            command.message.reply(string);
            return [2 /*return*/];
        });
    });
}
