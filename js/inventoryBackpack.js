import Backpack from "./backpackClass.js";

const everydayPack = new Backpack(
  "Level 1 Backpack",
  4,
  "Grey",
  2,
  4,
  12,
  12,
  false,
  "July 7, 2022 15:00:00 EST"
);

console.log("Backpack description:", everydayPack);
console.log("Date aquired:", everydayPack.dateAcquired);
console.log("Age of backpack:", everydayPack.backpackAge(), "days old");
