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
Object.defineProperty(exports, "__esModule", { value: true });
var zep_js_1 = require("@getzep/zep-js");
var uuid_1 = require("uuid");
function main() {
    return __awaiter(this, void 0, void 0, function () {
        function sleep(ms) {
            var date = Date.now();
            var currentDate = 0;
            do {
                currentDate = Date.now();
            } while (currentDate - date < ms);
        }
        var baseURL, client, sessionID, isInitialized, history_1, messages, memory, error_1, memory, error_2, searchText, searchPayload, searchResults, error_3, deleteResult, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    baseURL = "http://localhost:8000";
                    client = new zep_js_1.ZepClient(baseURL);
                    sessionID = (0, uuid_1.v4)();
                    return [4 /*yield*/, client.init()];
                case 1:
                    isInitialized = _a.sent();
                    if (!isInitialized) {
                        console.debug("Unable to reach Zep server at ", baseURL);
                        return [2 /*return*/];
                    }
                    _a.label = 2;
                case 2:
                    _a.trys.push([2, 4, , 5]);
                    history_1 = [
                        { "role": "human",
                            "content": "Who was Octavia Butler?"
                        },
                        {
                            "role": "ai",
                            "content": ("Octavia Estelle Butler (June 22, 1947 – February 24, 2006) was an American" +
                                " science fiction author."),
                        },
                        { "role": "human", "content": "Which books of hers were made into movies?" },
                        {
                            "role": "ai",
                            "content": ("The most well-known adaptation of Octavia Butler's work is the FX series" +
                                " Kindred, based on her novel of the same name."),
                        },
                        { "role": "human", "content": "Who were her contemporaries?" },
                        {
                            "role": "ai",
                            "content": ("Octavia Butler's contemporaries included Ursula K. Le Guin, Samuel R." +
                                " Delany, and Joanna Russ."),
                        },
                        { "role": "human", "content": "What awards did she win?" },
                        {
                            "role": "ai",
                            "content": ("Octavia Butler won the Hugo Award, the Nebula Award, and the MacArthur" +
                                " Fellowship."),
                        },
                        {
                            "role": "human",
                            "content": "Which other women sci-fi writers might I want to read?",
                        },
                        {
                            "role": "ai",
                            "content": "You might want to read Ursula K. Le Guin or Joanna Russ.",
                        },
                        {
                            "role": "human",
                            "content": ("Write a short synopsis of Butler's book, Parable of the Sower. What is it" +
                                " about?"),
                        },
                        {
                            "role": "ai",
                            "content": ("Parable of the Sower is a science fiction novel by Octavia Butler," +
                                " published in 1993. It follows the story of Lauren Olamina, a young woman" +
                                " living in a dystopian future where society has collapsed due to" +
                                " environmental disasters, poverty, and violence."),
                        },
                    ];
                    messages = history_1.map(function (_a) {
                        var role = _a.role, content = _a.content;
                        return new zep_js_1.Message({ role: role, content: content });
                    });
                    memory = new zep_js_1.Memory({ messages: messages });
                    return [4 /*yield*/, client.addMemory(sessionID, memory)];
                case 3:
                    _a.sent();
                    console.debug("Adding new memory for session ", sessionID);
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.debug("Got error:", error_1);
                    return [3 /*break*/, 5];
                case 5:
                    console.log("Sleeping for 3 seconds...");
                    sleep(3000); // Sleep for 3 seconds
                    console.log("Done sleeping!");
                    _a.label = 6;
                case 6:
                    _a.trys.push([6, 8, , 9]);
                    console.debug("Getting memory for newly added memory with sessionid ", sessionID);
                    return [4 /*yield*/, client.getMemory(sessionID)];
                case 7:
                    memory = _a.sent();
                    if (memory) {
                        memory.messages.forEach(function (message) {
                            console.debug(message.metadata);
                            console.debug(message.toDict());
                        });
                    }
                    return [3 /*break*/, 9];
                case 8:
                    error_2 = _a.sent();
                    if (error_2 instanceof zep_js_1.NotFoundError) {
                        console.error("Session not found:", error_2.message);
                    }
                    else {
                        console.error("Got error:", error_2);
                    }
                    return [3 /*break*/, 9];
                case 9:
                    _a.trys.push([9, 11, , 12]);
                    searchText = "Ursula";
                    console.debug("Searching memory...", searchText);
                    searchPayload = new zep_js_1.SearchPayload({ meta: {}, text: searchText });
                    return [4 /*yield*/, client.searchMemory(sessionID, searchPayload)];
                case 10:
                    searchResults = _a.sent();
                    searchResults.forEach(function (searchResult) {
                        var _a;
                        var messageContent = (_a = searchResult.message) === null || _a === void 0 ? void 0 : _a.content;
                        console.debug("Search Result: ", messageContent);
                    });
                    return [3 /*break*/, 12];
                case 11:
                    error_3 = _a.sent();
                    if (error_3 instanceof zep_js_1.NotFoundError) {
                        console.error("Session not found:", error_3.message);
                    }
                    else {
                        console.error("Got error:", error_3);
                    }
                    return [3 /*break*/, 12];
                case 12:
                    _a.trys.push([12, 14, , 15]);
                    return [4 /*yield*/, client.deleteMemory(sessionID)];
                case 13:
                    deleteResult = _a.sent();
                    console.debug(deleteResult);
                    return [3 /*break*/, 15];
                case 14:
                    error_4 = _a.sent();
                    if (error_4 instanceof zep_js_1.NotFoundError) {
                        console.error("Session not found:", error_4.message);
                    }
                    else {
                        console.error("Got error:", error_4);
                    }
                    return [3 /*break*/, 15];
                case 15: return [2 /*return*/];
            }
        });
    });
}
main();
