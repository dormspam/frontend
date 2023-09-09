

const CATEGORIES_COLORS = {
  'OTHER': "gray",
  'FOOD': "#D92120",
  'CAREER': "#E7742F",
  'FUNDRAISING':"#DFA53A",
  'APPLICATION':"#B1BE4E",
  'PERFORMANCE':"#6DB388",
  'BOBA':"#57A3AD",
  'TALKS':"#4683C1",
  'SOCIAL':"#3F4EA1",
  'SALE':"#781C81"
}

const CATEGORIES = Object.keys(CATEGORIES_COLORS); //Name of all available categories
class Categories {
  static getCategoriesColorMapping() {
    //Return mapping of category name to its corresponding color
    return CATEGORIES_COLORS;
  }
  static getCategoriesList(){
    //Return list of available categories
    return CATEGORIES;
  }

  static getCategoriesEmptyFrequency(){
    //Return mapping of category name to 0 (to be used as a starting frequency list)
    const frequency = {};
    for (const category of CATEGORIES) {
      frequency[category] = 0;
    }
    return frequency;
  }

  static parseCategoryNameFrequency(categoryNumFrequency) {
    //Given a object mapping category names => their frequency (doesn't necessarily contain all categories),
    //return a object mapping category names => their frequency (with all categories)
    const categoryNameFrequency = this.getCategoriesEmptyFrequency(); //Initialize full category object of zeroes (IMPORTANT)

    for (const [categoryName, categoryFrequency] of Object.entries(categoryNumFrequency)) {
      categoryNameFrequency[categoryName] = categoryFrequency;
    };
    return categoryNameFrequency;
  }
}

export default Categories;
