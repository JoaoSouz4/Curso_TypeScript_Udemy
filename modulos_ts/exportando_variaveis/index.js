"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = __importDefault(require("./person"));
const person_2 = require("./person");
console.log(person_1.default);
const name = (0, person_2.ReadOneName)("jjjjj");
console.log(name);
