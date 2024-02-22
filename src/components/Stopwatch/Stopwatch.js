import Button from '../Button/Button';
import Container from '../Container/Container';
import FormattingTime from '../FormattingTime/FormattingTime';
import { useEffect, useState } from 'react'; 

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [timer, setTimer] = useState(null);

  const startTimer = () => {
    setTimer(setInterval(() => {
      setTime(prevValue => prevValue + 9);
    }, 9))
  };

  const stopTimer = () => {
    clearInterval(timer);
  }
  
  const resetTimer = () => {
    stopTimer();
    setTime(0);
  }

  useEffect(() => {
    return () => {
      clearInterval(timer);
    };
  }, []);
  
  return (
    <Container>
      <FormattingTime millisec={time}/>
      <Button onClick={startTimer}>Start</Button>
      <Button onClick={stopTimer}>Stop</Button>
      <Button onClick={resetTimer}>reset</Button>
    </Container>
  );
}

export default Stopwatch;