import axios from "axios";

import { API_BASE_URL } from "../config/url_config";

import { UserAuth } from "../utilities/auth";

const postParticipant = (participant, successFn, errorFn) => {
  // get authorization token from UserAuth to authenticate that
  // user is logged in
  const authToken = UserAuth.getAuthToken();
  let config = {
    headers: {
      // set auth headers to user auth token for credentials
      Authorization: `Bearer ${authToken}`
    }
  };
  // return data from axios POST request to the DB
  //
  return axios
    .post(
      `${API_BASE_URL}/participants`,
      { participant, timeout: 3000 },
      config
    )
    .then(res => {
      // set response to a data variable that we destructure to access properties
      // let { data } = res;
      // successFn(data);
      console.log(res);
      return res;
    })
    .catch(err => {
      console.log(err);
      let { message } = err;
      errorFn(message);
      return err;
    });
};

export default postParticipant;
