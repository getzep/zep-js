"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.composeContextString = exports.ZepEnvironment = exports.ZepClient = exports.serialization = exports.ZepTimeoutError = exports.ZepError = exports.Zep = void 0;
exports.Zep = __importStar(require("./api/index.js"));
var index_js_1 = require("./errors/index.js");
Object.defineProperty(exports, "ZepError", { enumerable: true, get: function () { return index_js_1.ZepError; } });
Object.defineProperty(exports, "ZepTimeoutError", { enumerable: true, get: function () { return index_js_1.ZepTimeoutError; } });
exports.serialization = __importStar(require("./serialization/index.js"));
var index_js_2 = require("./wrapper/index.js");
Object.defineProperty(exports, "ZepClient", { enumerable: true, get: function () { return index_js_2.ZepClient; } });
var environments_js_1 = require("./environments.js");
Object.defineProperty(exports, "ZepEnvironment", { enumerable: true, get: function () { return environments_js_1.ZepEnvironment; } });
var contextString_js_1 = require("./contextString.js");
Object.defineProperty(exports, "composeContextString", { enumerable: true, get: function () { return contextString_js_1.composeContextString; } });
__exportStar(require("./wrapper/ontology.js"), exports);
