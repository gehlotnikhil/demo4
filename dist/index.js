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
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const { prismaMain } = require("./test");
const client_1 = require("@prisma/client");
dotenv.config();
const PORT = process.env.PORT;
const prisma = new client_1.PrismaClient();
console.log(PORT);
app.use(express.json());
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    prismaMain()
        .catch((e) => {
        console.error(e);
    })
        .finally(() => __awaiter(void 0, void 0, void 0, function* () { return yield prisma.$disconnect(); }));
    res.send({ success: true });
}));
app.listen(PORT, () => {
    console.log(`-Server running at port ${PORT}`);
});