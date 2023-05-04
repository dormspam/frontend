import Request from "./request";

class Events {
  static getEventFrequencyByDate(date) {
    return new Request("https://dormdigest.xvm.mit.edu:8432/events/frequency/" + date);
  }

  static getEventsByQuery(query) {
    return new Request("https://dormdigest.xvm.mit.edu:8432/events?q=" + query);
  }

  static getEventById(id) {
    return new Request("https://dormdigest.xvm.mit.edu:8432/events/" + id);
  }

  static getAllEvents() {
    return new Request("https://dormdigest.xvm.mit.edu:8432/events/all");
  }

  static getEventsByDate(formattedDate) {

    return fetch("https://dormdigest.xvm.mit.edu:8432/get_events_by_date", {
      method: "POST",
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from_date: formattedDate,
      })
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        console.error('Error:', response.status, response.statusText);
        throw new Error('Error fetching data');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      throw error;
    });
  }
  
}

export default Events;
