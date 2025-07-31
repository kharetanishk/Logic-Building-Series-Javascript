import fs from "fs/promises";

async function readData() {
  try {
    const data = await fs.readFile("./data.json", "utf-8");
    const parse = JSON.parse(data);
    console.log(parse);
    console.log(parse.girls["priya"]);
  } catch (err) {
    console.log(err);
  }
}

readData();
