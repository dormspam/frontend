import Request from "./request";


const CATEGORIES_COLORS = {
  'OTHER': "#888888",
  'FOOD': "#EE6F6F",
  'CAREER': "#459AF6",
  'FUNDRAISING':"#A16EE5",
  'APPLICATION':"#459AF6",
  'PERFORMANCE':"#12DAA4",
  'BOBA':"#F6B957",
  'TALKS':"#73F23A",
  'SOCIAL':"#25C8D3"
}

class Categories {
  static getCategories() {
    return CATEGORIES_COLORS;
  }
}

export default Categories;
