class Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    weight,
    strapLengthL,
    strapLengthR,
    lidOpen,
    dateAcquired
  ) {
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
    this.dateAcquired = dateAcquired;
  }
  // methods 
  toggleLid(lidStatus) {
    this.lidOpen = lidStatus;
  }
  newStrapLength(strapLengthL, strapLengthR) {
    this.strapLength.left = lengthLeft;
    this.strapLength.right = lengthRight;
  }
  backpackAge() {
    let now = new Date();
    let acquired = new Date(this.dateAcquired);
    let elapsed = now - acquired; // elapsed time in seconds
    let daysSinceAcquired = Math.floor(elapsed / (1000 * 3600 *24));
    return daysSinceAcquired;
  }
}
export default Backpack;
