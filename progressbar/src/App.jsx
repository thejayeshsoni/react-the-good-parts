import { useEffect, useState } from "react";

function ProgressBar({ progress }) {
  const [animatedProgress, setAnimatedProgress] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress);
    }, 100);
  }, [progress]);

  return (
    <div className="container border rounded-4xl overflow-hidden my-3">
      <div
        className=" bg-green-500 text-white p-0.5 text-right transition-all duration-700 ease-in"
        style={{
          // width: `${animatedProgress}%`,
          transform: `translateX(${animatedProgress - 100}%)`,
          color: `${animatedProgress < 5 ? "black" : "white"}`,
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax="100"
        aria-valuemin="0"
      >
        {progress}%
      </div>
    </div>
  );
}

function App() {
  const progressBars = [0, 1, 5, 10, 20, 35, 43, 50, 70, 80, 100];
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Progress Bar</h1>
      {progressBars.map((bar) => (
        <ProgressBar key={bar} progress={bar} />
      ))}
    </div>
  );
}

export default App;
