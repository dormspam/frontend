import Categories from "../api/categories";
import LocalData from "../api/localdata";



function FilterEventsBySearchAndCategories(eventData, search_target) {
    /**
     * Given a list of events and the current search string,
     * returns a list of events that matches the categories and search restrictions
     */
    //Gets the categories that are currently checked from LocalData
    const current_categories = Categories.getCategoriesIntMapping(LocalData.getCategoryFilters());

    const matchingEvents = eventData.events.filter((event) => {
        //Creating a list of current_categories(categories that user wants to be shown) that are also in the event tags the event has
        let matching_categories = current_categories.filter(cat => event.tags.includes(cat));
        //If this list has an element, adding the event to the list of matchingEvents
        return matching_categories.length > 0 && targetInEventInfo(event, search_target);
    })
    return matchingEvents;
}

function targetInEventInfo(event, search_target) {
    /**
     * Given an event and the current search string,
     * return whether or not we should include that event
     * in the search result
     */
    //If the user is not searching for anything, ignore the searching feature
    if (search_target.length < 1) {
        return true
    }
    else {
        // Checking if the word(s), they searched for are in the event's title or description
        const target = search_target.toLowerCase();
        const eventInfo = (event.description + event.title).toLowerCase();
        return eventInfo.includes(target);
    }
}

export {
    FilterEventsBySearchAndCategories
};