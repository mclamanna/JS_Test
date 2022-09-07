import Backpack from "./backpack.js";

const everydayPack = new Backpack(
  "Level 1 Backpack",
  4,
  "Grey",
  2,
  4,
  12,
  12,
  false
);

const Weapons = new Sword(
  "Sword",
  ShortSword,
  Burn,
  6,
  12,
);

console.log("The everydayPack object:", everydayPack);
console.log("Weapons:", Weapons);
console.log("The pocketNum value:", everydayPack.pocketNum);
