import { Console } from "console";
import fs from "fs/promises";

const buffer = await fs.readFile(path = "file-system.mjs");

Console.info(buffer.toString());

await fs.writeFile(file = "temp.txt", data = "Hello NodeJS")