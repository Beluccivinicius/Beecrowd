class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    return this.collection.length;
  }
  pageCount() {
    const quantityPages = Math.ceil(this.collection.length / this.itemsPerPage);
    return quantityPages;
  }
  pageItemCount(pageIndex) {
    const quantityPages = this.pageCount() - 1;

    if (pageIndex > quantityPages || pageIndex < 0) {
      return -1;
    }

    let firstPage = this.collection.length - this.itemsPerPage;

    for (let i = 0; i < pageIndex; i++) {
      firstPage -= this.itemsPerPage;
    }

    if (firstPage > 0 || firstPage == 0) {
      return this.itemsPerPage;
    }

    return firstPage + this.itemsPerPage;
  }
  pageIndex(itemIndex) {
    let quantityItems = this.itemsPerPage;

    if (this.collection.length < 1) {
      return -1;
    }
    if (itemIndex >= this.collection.length || itemIndex < 0) {
      return -1;
    }
    let page = 0;
    for (let i = 0; quantityItems <= itemIndex; i++) {
      quantityItems = quantityItems + this.itemsPerPage;
      page = page + 1;
    }

    return page;
  }
}

const page = new PaginationHelper(
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5,
    6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6,
  ],
  5
);

console.log(page.pageIndex(16));
