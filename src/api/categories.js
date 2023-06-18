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

const CATEGORIES = Object.keys(CATEGORIES_COLORS);
class Categories {
  static getCategoriesColorMapping() {
    return CATEGORIES_COLORS;
  }
  static getCategoriesList(){
    return CATEGORIES;
  }

}

export default Categories;
