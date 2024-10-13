import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const CountdownTimer = ({ initialMinutes = 0, initialSeconds = 0 }) => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const totalSeconds = timeLeft.minutes * 60 + timeLeft.seconds;

    if (totalSeconds <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        const totalSeconds = prevTime.minutes * 60 + prevTime.seconds - 1;
        return {
          minutes: Math.floor(totalSeconds / 60),
          seconds: totalSeconds % 60,
        };
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft]);

  return (
    <div className="countdown-timer">
      <div className="time">
        <span>{String(timeLeft.minutes).padStart(2, "0")}:</span>
        <span>{String(timeLeft.seconds).padStart(2, "0")}</span>
      </div>
      {timeLeft.minutes === 0 && timeLeft.seconds === 0 && (
        <div className="finished">Times up!</div>
      )}
    </div>
  );
};

CountdownTimer.propTypes = {
  initialMinutes: PropTypes.number,
  initialSeconds: PropTypes.number,
};

export default CountdownTimer;
