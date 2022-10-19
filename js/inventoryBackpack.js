import Backpack from "./backpackClass.js";
import Book from "./book.js";

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

// Books title,author,pageNumber,currentPage,weight,readStatus //

const mapsOfTheRealm = new Book(
  "Maps of the Realm",
  "Elder Druid Ramos the Cartographer",
  580,
  1,
  1,
  "Not Read"
);

const newToMagic = new Book(
  "New to Magic",
  "Ganrol Clementine the Grandmaster Wizard",
  1280,
  1,
  2,
  "Reading"
);

console.log("Backpack description:", everydayPack);
console.log("Date aquired:", everydayPack.dateAcquired);
console.log("Age of backpack:", everydayPack.backpackAge(), "days old");
console.log(mapsOfTheRealm);
console.log(newToMagic);
