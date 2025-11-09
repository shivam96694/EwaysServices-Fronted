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
    return response.data; // ✅ normal 2xx response
  } catch (error) {
    console.error("API POST Error:", error);

    // ✅ If backend sent a response (like 400/409), return that JSON
    if (error.response && error.response.data) {
      return error.response.data;
    }

    // Otherwise network error
    return { success: false, error: "Backend error or network issue" };
  }
}

function generateOtp() {
  return parseInt(Math.random() * 899999 + 100000);
}

export { serverURL, getData, postData, generateOtp };
