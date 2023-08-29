import React, { useEffect, useState } from 'react';
import ClockWrapper from './clock.styled';
import { Spin } from 'antd';

export interface DigitalClockProps {
  hourColor?: string;
  minuteColor?: string;
  secondColor?: string;
  fullTime?: boolean;
}

const DigitalClock: React.FC<DigitalClockProps> = (props) => {
  const {
    hourColor = '#ff2972',
    minuteColor = '#fee800',
    secondColor = '#04fc43',
    fullTime = true
  } = props;
  let interVal: any = null;

  const initDigital = {
    hours: '00',
    minutes: '00',
    seconds: '00',
    ampm: 'am'
  };
  const [digitalClock, setDigitalClock] = useState(initDigital);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    interVal = setInterval(() => {
      setClock();
      setLoading(false);
    }, 1000);

    return () => {
      clearInterval(interVal);
    };
  }, []);

  const setClock = () => {
    const sc: any = document.querySelector('#sc');
    const mn: any = document.querySelector('#mn');
    const hr: any = document.querySelector('#hr');
    const today = new Date();
    const hh = today.getHours() * 30;
    const mm = today.getMinutes() * 6;
    const ss = today.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    //
    let h: number | string = today.getHours();
    let m: number | string = today.getMinutes();
    let s: number | string = today.getSeconds();
    const am = h > 12 ? 'pm' : 'am';
    if (!fullTime) {
      h = h > 12 ? h - 12 : h;
    }
    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    const newDigital: any = { ...digitalClock };
    newDigital.hours = h;
    newDigital.minutes = m;
    newDigital.seconds = s;
    newDigital.ampm = am;
    setDigitalClock(newDigital);
  };

  const listNumClock = [];
  while (listNumClock.length < 12) {
    listNumClock.push('');
  }

  return (
    <ClockWrapper
      hourColor={hourColor}
      minuteColor={minuteColor}
      secondColor={secondColor}
    >
      <Spin spinning={loading}>
        <div className={'container'}>
          <div className={'clock'}>
            <div className={'circle circle-sc'} id={'sc'}>
              <i />
            </div>
            <div className={'circle circle-mn'} id={'mn'}>
              <i />
            </div>
            <div className={'circle circle-hr'} id={'hr'}>
              <i />
            </div>
            {listNumClock.map((item, index) => (
              <span style={{ ['--i' as string]: index + 1 }} key={index}>
                <b>{index + 1}</b>
              </span>
            ))}
          </div>
          <div id={'digital-clock'}>
            <div id={'digital-hour'}>{digitalClock.hours}</div>
            <div id={'digital-minute'}>{digitalClock.minutes}</div>
            <div id={'digital-second'}>{digitalClock.seconds}</div>
            {!fullTime ? (
              <div id={'digital-ampm'}>{digitalClock.ampm}</div>
            ) : (
              ''
            )}
          </div>
        </div>
      </Spin>
    </ClockWrapper>
  );
};
export default DigitalClock;
