import React, {useEffect, useState} from 'react';
import ClockWrapper from './clock.styled';
import {Spin} from 'antd';

export default (props) => {
  document.title = 'Beautiful clock';
  let interVal = null;

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
    }
  }, []);

  const setClock = () => {
    const sc = document.querySelector('#sc');
    const mn = document.querySelector('#mn');
    const hr = document.querySelector('#hr');
    const today = new Date();
    const hh = today.getHours() * 30;
    const mm = today.getMinutes() * 6;
    const ss = today.getSeconds() * 6;

    hr.style.transform = `rotateZ(${hh + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;
    //
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let am = h > 12 ? "pm" : 'am';
    h = h > 12 ? h - 12 : h;
    h = h < 10 ? `0${h}` : h;
    m = m < 10 ? `0${m}` : m;
    s = s < 10 ? `0${s}` : s;

    const newDigital = {...digitalClock};
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

  return <ClockWrapper>
    <Spin spinning={loading}>
      <div className={'container'}>
        <div className={'clock'}>
          <div className={'circle'} style={{'--clr': '#04fc43'}} id={'sc'}><i/></div>
          <div className={'circle circle2'} style={{'--clr': '#fee800'}} id={'mn'}><i/></div>
          <div className={'circle circle3'} style={{'--clr': '#ff2972'}} id={'hr'}><i/></div>
          {listNumClock.map((item, index) => <span style={{'--i': index + 1}}><b>{index + 1}</b></span>)}
        </div>
        <div id={'digital-clock'}>
          <div id={'digital-hour'} style={{'--clr': '#ff2972'}}>{digitalClock.hours}</div>
          <div id={'digital-minute'} style={{'--clr': '#fee800'}}>{digitalClock.minutes}</div>
          <div id={'digital-second'} style={{'--clr': '#04fc43'}}>{digitalClock.seconds}</div>
          <div id={'digital-ampm'}>{digitalClock.ampm}</div>
        </div>
      </div>
    </Spin>
  </ClockWrapper>
};