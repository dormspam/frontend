import Categories from "./categories";
import { AUTH_CONFIG } from "../auth/authConfig";
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
    
    /*
    * Retrieve the user's information used to authenticate to backend API requests
    */
    static getUserAuthInfo() {
        const sessionId = localStorage.getItem(AUTH_CONFIG.sessionid_localstorage_name) || "";
        const email = localStorage.getItem(AUTH_CONFIG.useremail_localstoragge_name) || "";
        
        //Return format is done according to AuthModel in backend Python server main.py
        return {
            "email_addr": email,
            "session_id": sessionId
        }
    }

    /*
    * Get email of currently logged in user
    */
    static getUserEmail(){
        const email = localStorage.getItem(AUTH_CONFIG.useremail_localstoragge_name) || "Professor Albus Dumbledore";
            // Note: Should never get Dumbledore, since we're assuming a user must exists before calling this function
        return email;
    }

    /*
    * Check whether user is logged in, indicated by whether they have session ID tokens stored from previou
    * successful authentication
    */
    static isUserLoggedIn() {
        const sessionId = localStorage.getItem(AUTH_CONFIG.sessionid_localstorage_name);
        const email = localStorage.getItem(AUTH_CONFIG.useremail_localstoragge_name);
        return Boolean(sessionId && email);
    }
}

export default LocalData;