import Request from "./request";

class Categories {
  static getCategories() {
    return new Request("/categories");
  }
}

export default Categories;
