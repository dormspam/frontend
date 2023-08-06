import Categories from "./categories";

class LocalData {

    /*
    * Save the user's filters array (e.g. list of categories they want to view)
    */
    static saveCategoryFilters(filters) { 
        localStorage.setItem("filters",JSON.stringify(filters))
    }

    static getCategoryFilters() {

        const filtersResult = localStorage.getItem("filters");
        if (!filtersResult) {
            //On first load, save full categories list
            const initialFilters = [...Categories.getCategoriesList()];
            this.saveCategoryFilters(initialFilters);
            return initialFilters;
        }
        return JSON.parse(filtersResult);
    }

}

export default LocalData;