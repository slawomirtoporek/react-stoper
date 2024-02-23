import styles from './FormattingTime.module.scss'

const FormattingTime = ({millisec}) => {
  const padTo2Digits = (num) => {
    return num.toString().padStart(2, '0');
  };

  const padToDigits = num => { 
    if(num < 10) {
      return num.toString().padStart(1, '0');    
    }
    else if(num < 100) {
      return num.toString().padStart(2, '0');  
    }
    else {
      return num.toString().padStart(3, '0');
    }
  };

  const formatTime = (time) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = Math.floor(time % 1000);

    return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}.${padToDigits(milliseconds)}`;
  }

  return (
    <div className={styles.timeWrapper}>
      <p className={styles.stopwatch}>{formatTime(millisec)}</p>
    </div>
  );
};

export default FormattingTime;
