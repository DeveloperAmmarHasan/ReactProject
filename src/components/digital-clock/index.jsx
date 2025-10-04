import { useEffect, useState } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  // Dynamic color styling based on time of day
  const hour = time.getHours();
  let timeColor = "text-green-400";

  if (hour >= 5 && hour < 12) {
    timeColor = "text-yellow-400"; // morning
  } else if (hour >= 12 && hour < 18) {
    timeColor = "text-blue-400"; // afternoon
  } else if (hour >= 18 && hour < 21) {
    timeColor = "text-orange-400"; // evening
  } else {
    timeColor = "text-purple-400"; // night
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 text-white min-w-screen">
      <div
        className="bg-gray-900 rounded-xl shadow-md px-10 py-6 text-center 
        transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-gray-800/50"
      >
        {/* Time */}
        <div
          className={`text-6xl font-mono font-bold mb-3 transition-colors duration-500 ${timeColor}`}
        >
          <span>{time.getHours().toString().padStart(2, "0")}</span>:
          <span>{time.getMinutes().toString().padStart(2, "0")}</span>:
          <span>{time.getSeconds().toString().padStart(2, "0")}</span>
        </div>

        {/* Date */}
        <div className="text-lg text-gray-400">
          {time.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;
