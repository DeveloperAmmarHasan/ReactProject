import CountDownTimer from ".";

function CountDownTimerTest() {
  function handleTimeFinish() {
    console.log("⏰ Timer finished!");
    alert("Time is up!");
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-950 text-white min-w-screen">
      <h1 className="text-3xl font-bold mb-6 text-cyan-400">Countdown Timer</h1>

      {/* Timer Component */}
      <CountDownTimer initialTime={300} onTimeFinish={handleTimeFinish} />
    </div>
  );
}

export default CountDownTimerTest;
