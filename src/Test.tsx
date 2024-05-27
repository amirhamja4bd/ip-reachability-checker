// src/components/IpChecker.js
import { useState } from "react";
import { isIpReachable, isIpReachable2, isIpReachable3 } from "./Apis";

const Test = () => {
  const [ip, setIp] = useState("8.8.8.8");
  const [result, setResult] = useState(null);
  const [result2, setResult2] = useState(null);
  const [result3, setResult3] = useState(null);

  const checkIp = async () => {
    const data = await isIpReachable(ip);
    setResult(data);

    const data2 = await isIpReachable2(ip);
    setResult2(data2);

    const data3 = await isIpReachable3(ip);
    setResult3(data3);
  };

  return (
    <div className="">
      <div className="">
        <h2>IP Reachability Checker</h2>
        <div>
          <input
            type="text"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            placeholder="Enter IP address"
            className=""
            style={{ padding: "7px" }}
          />
          <button type="button" onClick={checkIp} className="">
            Check IP
          </button>
        </div>
        {result && (
          <div>
            <h3>ipinfo.io:</h3>
            <pre>{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}

        {result2 && (
          <div>
            <h3>ip-api.com:</h3>
            <pre>{JSON.stringify(result2, null, 2)}</pre>
          </div>
        )}

        {result3 && (
          <div>
            <h3>ipapi.co:</h3>
            <pre>{JSON.stringify(result3, null, 2)}</pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default Test;
