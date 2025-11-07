import axios from "axios";

const serverURL = "http://localhost:5000";

async function getData(url) {
  try {
    const response = await axios.get(`${serverURL}/${url}`);
    return response.data;
  } catch (e) {
    console.error("API GET Error:", e);
    return { data: [], message: "Backend error", status: false };
  }
}

async function postData(url, body) {
  try {
    const response = await axios.post(`${serverURL}/${url}`, body);
    return response.data;
  } catch (e) {
    console.error("API POST Error:", e);
    return { data: [], message: "Backend error", status: false };
  }
}

function generateOtp() {
  return parseInt(Math.random() * 899999 + 100000);
}

export { serverURL, getData, postData, generateOtp };
