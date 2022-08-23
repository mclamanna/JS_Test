const backpack = {
    name: "Backpack",
    volume: 30,
    color: "grey",
    pocketNum: 15,
    sword: {
        Damage: 5,
        Magic: 2,
        Weight: 10,
        Level: 4,
        Metal: "silver",
    },
    strapLength: {
        Left: 26,
        Right: 26,
    },
    lidOpen: false,
    toggleLid: function (lidStatus) {
        this.lidOpen = lidStatus;
    },
    newStrapLength: function (lengthLeft, lengthRight) {
        this.strapLength.Left = lengthLeft;
        this.strapLength.Right = lengthRight;
    },
    newSwordDamage: function (lengthLeft, lengthRight) {
        this.strapLength.Left = lengthLeft;
        this.strapLength.Right = lengthRight;
    },
};

/*Dot Notation*/
console.log("The backpack object:", backpack);
console.log("Strap length Left:", backpack.strapLength.Left);
console.log("Sword weight:", backpack.sword.Weight);
console.log("Sword damage:", backpack.sword.Damage);

console.log("Left strap before:", backpack.strapLength.Left)
backpack.newStrapLength(10,15)
console.log("Left strap after:", backpack.strapLength.Left)
/*Bracket Notation with variable*/
var something = "color";
console.log("Backpack color:", backpack[something]);

var weapon1 = "sword";
console.log("Sword attributes:", backpack[weapon1]);