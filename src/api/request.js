import axios from "axios";
import moment from "moment";

import { getJWT } from "../utils/session";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

class Request {
  constructor(endpoint, parameters = {}) {
    // Default request options for axios
    let options = {
      method: "GET",
      url: BASE_URL + endpoint
    };

    // Add request data
    options["data"] = parameters["data"];

    // Only pass method if undefined, since it is assumed to be GET
    if (parameters["method"] !== undefined) {
      options["method"] = parameters["method"];
    }

    // Authenticate with JWT stored in cookies
    if (getJWT() !== undefined) {
      options["headers"] = {"Authorization": "Bearer " + getJWT()};
    }

    // Pass request body and URL parameters
    options["params"] = parameters["params"];

    // Perform the request
    axios(options).then(response => {
      if (Object.keys(response.headers).includes("x-jwt")) {
        const token = response.headers["x-jwt"];
        const expiryDate = moment().add(1, "months").toDate().toUTCString();
        document.cookie = "jwt=" + token + "; expires=" + expiryDate + "; path=/";
      }

      if (typeof this.then !== "undefined") {
        this.then(response);
      }
    }).catch(error => {
      if (typeof this.catch !== "undefined") {
        this.catch(error);
      } else {
        console.log(error);
      }
    });
  }

  catch(callback) {
    this.catch = callback;
    return this;
  }

  then(callback) {
    this.then = callback;
    return this;
  }
}

export default Request;
