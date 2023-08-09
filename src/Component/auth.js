import axios from "axios";

export const auth = async () => {
  let userDetails;
  await axios
      .get("http://testredprism.co/api/getUserDetails", {
        headers: {
          "auth-token": localStorage.getItem("authToken"),
        },
      })
      .then((res) => {
        userDetails = res.data.userDetails;
      })
      .catch((error) => {
        console.error(error);
      });
      return userDetails;
}

