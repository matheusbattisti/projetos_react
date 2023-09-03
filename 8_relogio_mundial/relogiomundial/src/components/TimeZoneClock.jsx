// TimeZoneClock.js
import React, { useState, useEffect } from "react";

function TimeZoneClock({ timeZone }) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const options = {
        timeZone,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      const timeString = date.toLocaleTimeString("en-US", options);
      setTime(timeString);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone]);

  return (
    <div>
      <h2>{timeZone}</h2>
      <h3>{time}</h3>
    </div>
  );
}

export default TimeZoneClock;
