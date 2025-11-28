"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ZepClient = void 0;
const Client_js_1 = require("../Client.js");
const graph_js_1 = require("./graph.js");
class ZepClient extends Client_js_1.ZepClient {
    get graph() {
        return new graph_js_1.Graph(this._options);
    }
}
exports.ZepClient = ZepClient;
