// src/utils/ipCheck.js
import axios from "axios";

const API_TOKEN = "b1e4c768b409da";

export const isIpReachable = async (ip: string) => {
  try {
    const response = await axios.get(
      `https://ipinfo.io/${ip}?token=${API_TOKEN}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching IP info:", error);
    return null;
  }
};

export const isIpReachable2 = async (ip: string) => {
  try {
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching IP info:", error);
    return null;
  }
};

export const isIpReachable3 = async (ip: string) => {
  try {
    const response = await axios.get(`https://ipapi.co/${ip}/json`);
    return response.data;
  } catch (error) {
    console.error("Error fetching IP info:", error);
    return null;
  }
};
