const fs = require("fs");

const prestige = require("./prestige-test.json");
const obj = {};

prestige.BasicPrestige.forEach((item) => {
  console.log(item.Level);
  obj[item.Level] = {
    bonus: Number(item.Bonus.replace("%", "")),
    points: Number(item.Points),
  };
});

console.log(obj);

fs.writeFileSync("prestige-output.json", JSON.stringify(obj));
