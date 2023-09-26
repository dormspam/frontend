import Request from "./request";
import Categories from "./categories";
import LocalData from "./localdata";

import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

const axiosCached = setupCache(axios.create(), {
  methods: ['get', 'post']
});

//Caching parameters
const GET_FREQUENCY_BY_MONTH_EXPIRATION = 1000 * 60 * 60 * 6; //6 hours in miliseconds
const GET_EVENTS_BY_DATE_EXPIRATION = 1000 * 60 * 60 * 6; //6 hours in miliseconds

class Events {
  static getEventFrequencyByDateForMonth(month, year) { 
    //return new Request("https://dormdigest.xvm.mit.edu:8432/events/frequency/" + date);
    const results = this.getCategoryFrequencyByMonth(month, year).then(eventsJSON => {
      const rawCategoryFrequency = eventsJSON["frequency"]; //Holds dictionary mapping day of month to frequency of categories on that day
      const parsedCategoryFrequency = {};

      for (const [day, rawFrequencyDict] of Object.entries(rawCategoryFrequency)) {
        parsedCategoryFrequency[day] = Categories.parseCategoryNameFrequency(rawFrequencyDict);
      }
      return parsedCategoryFrequency;
    });
    return results;
  }

  static getEventsByQuery(query) { //Unsupported
    return new Request("https://dormdigest.xvm.mit.edu:8432/events?q=" + query);
  }

  static getEventById(id) { //Unsupported
    return new Request("https://dormdigest.xvm.mit.edu:8432/events/" + id);
  }

  static getAllEvents() { //Unsupported
    return new Request("https://dormdigest.xvm.mit.edu:8432/events/all");
  }

  // static getCategoryFrequencyByMonth(month, year) {
  //   return fetch("https://dormdigest.xvm.mit.edu:8432/get_event_category_frequency_for_month", {
  //     method: "POST",
  //     headers: {
  //       "accept": "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       month: month,
  //       year: year,
  //       auth: LocalData.getUserAuthInfo()
  //     })
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       console.error('Error:', response.status, response.statusText);
  //       throw new Error('Error fetching data');
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //     throw error;
  //   });
  // }

  static getCategoryFrequencyByMonth(month, year) {
    const JSONrequest =  {
      month: month,
      year: year,
      auth: LocalData.getUserAuthInfo()
    };
    const res = axiosCached
      .post("https://dormdigest.xvm.mit.edu:8432/get_event_category_frequency_for_month", 
            JSONrequest,
            {
              cache:{
                ttl: GET_FREQUENCY_BY_MONTH_EXPIRATION, //1 hour
              }
            }
      )
      .then((response)=>{
        return response.data;
      })
      .catch((error)=>{
        console.error('Error:', error);
        throw error;
      });
    return res;
  }

  // static getEventsByDate(formattedDate, includeDescription=true) {
  //   return fetch("https://dormdigest.xvm.mit.edu:8432/get_events_by_date", {
  //     method: "POST",
  //     headers: {
  //       "accept": "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       from_date: formattedDate,
  //       include_description: includeDescription,
  //       auth: LocalData.getUserAuthInfo()
  //     })
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       return response.json();
  //     } else {
  //       console.error('Error:', response.status, response.statusText);
  //       throw new Error('Error fetching data');
  //     }
  //   })
  //   .catch(error => {
  //     console.error('Error:', error);
  //     throw error;
  //   });
  // }

  static getEventsByDate(formattedDate, includeDescription=true) {
    const JSONrequest =  {
      from_date: formattedDate,
      include_description: includeDescription,
      auth: LocalData.getUserAuthInfo()
    };
    const res = axiosCached
      .post("https://dormdigest.xvm.mit.edu:8432/get_events_by_date", 
            JSONrequest,
            {
              cache:{
                ttl: GET_EVENTS_BY_DATE_EXPIRATION,
              }
            }
      )
      .then((response)=>{
        return response.data;
      })
      .catch((error)=>{
        console.error('Error:', error);
        throw error;
      });
    return res;
  }
  
}

export default Events;
