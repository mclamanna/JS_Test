class Backpack {
    constructor(
        name,
        volume,
        color,
        pocketNum,
        weight,
        strapLengthL,
        strapLengthR,
        lidOpen
    ){
this.name = name;
this.volume = volume;
this.color = color;
this.pocketNum = pocketNum;
this.weight = weight;
this.strapLengthL = {
    left: strapLengthL,
    right: strapLengthR,
};
this.lidOpen = lidOpen;
}
toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
}
newStrapLength(strapLengthL, strapLengthR) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
}
}

export default Backpack;
