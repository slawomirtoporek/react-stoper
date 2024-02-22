const FormattingTime = ({millisec}) => {
  const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  };

  const padTo3Digits = (num) => {
    return num.toString().padStart(3, '0');
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = Math.floor(time % 1000);

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}.${padTo3Digits(milliseconds)}`;
  };

  return (
    <div>
      {formatTime(millisec)}
    </div>
  );
};

export default FormattingTime;
