import axios from "axios";

// ✅ Base backend URL (change when deploying)
const serverURL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://ewaysservices-backend.onrender.com";

// =======================
// 🔹 GET Request
// =======================
async function getData(url) {
  try {
    const response = await axios.get(`${serverURL}/${url}`);
    return response.data; // ✅ Backend JSON
  } catch (error) {
    console.error("API GET Error:", error);

    // ✅ Return backend error message if exists
    if (error.response && error.response.data) {
      return error.response.data;
    }

    // ✅ Otherwise network/server issue
    return { success: false, error: "Network or backend connection issue" };
  }
}

// =======================
// 🔹 POST Request
// =======================// =======================

 async function postData(url, body) {
  try {
    // Detect if the body is FormData (used for file upload)
    const isFormData = body instanceof FormData;

    const response = await axios.post(`${serverURL}/${url}`, body, {
      headers: isFormData
        ? {} // ✅ Let Axios set Content-Type automatically for FormData
        : { "Content-Type": "application/json" },
    });

    return response.data; // ✅ Normal 2xx response
  } catch (error) {
    console.error("API POST Error:", error);

    // ✅ If backend sent structured JSON (ex: { success: false, error: '...' })
    if (error.response && error.response.data) {
      return error.response.data;
    }

    // ✅ Otherwise, fallback error
    return { success: false, error: "Backend error or network issue" };
  }
}



// =======================
// 🔹 OTP Generator (6-digit)
// =======================
function generateOtp() {
  return Math.floor(100000 + Math.random() * 900000);
}

// ✅ Export functions
export { serverURL, getData, postData, generateOtp };
