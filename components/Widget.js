"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
function sayHello(from) {
    return `Can this really be typescript, ${from}?`;
}
exports.default = () => React.createElement("div", null,
    React.createElement("p", null, sayHello('Julian')));
