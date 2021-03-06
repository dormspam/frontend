import Request from "./request";

class Events {
  static getEventFrequencyByDate(date) {
    return new Request("/events/frequency/" + date);
  }

  static getEventsByDate(date) {
    return new Request("/events/" + date);
  }

  static getEventsByQuery(query) {
    return new Request("/events?q=" + query);
  }

  static getEventById(id) {
    return new Request("/events/" + id);
  }

  static getAllEvents(){
    return new Request("/events/all")
  }
}

export default Events;
