import { appendFile, readFile, writeFile } from "fs/promises";
// const fs = require("fs");

const invoke = async (action, path, data = null) => {
  switch (action) {
    case "read":
      const output = await readFile(path, "utf-8");
      console.log(output);
      break;
    case "write":
      await writeFile(path, data);
      break;
    case "append":
      await appendFile(path, data);
      break;
  }
};

// invoke("read", "./test.txt");
// invoke("write", "./test.txt", "Some new nothing 2");
invoke("append", "./test.txt", "\nSome new nothing 22");
// readFile("./package.json")
//   .then((data) => {
//     console.log(data.toString());
//   })
//     .catch((err) => console.log(err.massage));

// export const multiply = (a, b) => {
//     return a + b;
// };
// console.log(multiply(3, 4));

// console.log("Hello, world");

// mudule.exports = {
//   multiply,
// };
