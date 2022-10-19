class Book {
  constructor(
    title,
    author,
    pageNumber,
    currentPage,
    weight,
    readStatus
  ) {
    this.title = title;
    this. author =  author;
    this.pageNumber = pageNumber;
    this.currentPage = currentPage;
    this.weight = weight;
    this.readStatus - readStatus;
  }
updateCurrentPage(newCurrentPage) {
    this.currentPage = newCurrentPage;
}
updateReadStatus(newReadStatus) {
    this.readStatus = newReadStatus;
}
}
export default Book;

