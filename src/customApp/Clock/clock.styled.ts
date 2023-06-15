import styled from 'styled-components';
import {transition} from "../../library/helpers/style_utils";
import {DigitalClockProps} from "./Clock";

interface StyledProps extends DigitalClockProps {

}

const flexCenter = `
  display: flex;
  justify-content: center;
  align-items: center;
  `;

export default styled.div<StyledProps>`
  ${flexCenter};
  min-height: 100%;
  background: #2f363e;
  user-select: none;
  
  .container {
    position: relative;
    background: #2f363e;
    //min-height: 500px;
    box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.75),
       10px 10px 70px rgba(0, 0, 0, 0.25),
       inset 5px 5px 10px rgba(0, 0, 0, 0.5),
       inset 5px 5px 20px rgba(255, 255, 255, 0.2),
       inset -5px -5px 15px rgba(0, 0, 0, 0.75);
    border-radius: 225px 225px 20px 20px;
    ${flexCenter};
    flex-direction: column;
    ${transition()};
    
    @media only screen and (max-width: 490px), (max-height: 749px){
      zoom: .9 !important;
    }
    
    @media only screen and (max-width: 450px), (max-height: 689px){
      zoom: .8 !important;
    }
    
    @media only screen and (max-width: 370px), (max-height: 629px){
      zoom: .7 !important;
    }
    
    @media only screen and (max-width: 320px), (max-height: 569px){
      zoom: .6 !important;
    }
    
    @media only screen and (max-width: 290px), (max-height: 509px){
      zoom: .5 !important;
    }
       
    .clock {
      position: relative;
      width: 450px;
      height: 450px;
      background: #2f363e;
      box-shadow: 10px 50px 70px rgba(0, 0, 0, 0.25),
       inset 5px 5px 10px rgba(0, 0, 0, 0.5),
       inset 5px 5px 20px rgba(255, 255, 255, 0.2),
       inset -5px -5px 15px rgba(0, 0, 0, 0.75);
      border-radius: 50%;
      margin-bottom: 30px;
      ${flexCenter};
      
      &:before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: #2f363e;
        border: solid 2px #fff;
        z-index: 99;
      }
      
      span {
        position: absolute;
        inset: 20px;
        color: #fff;
        text-align: center;
        transform: rotate(calc(30deg * var(--i)));
        
        b {
          font-size: 2em;
          opacity: 0.25;
          font-weight: 500;
          transform: rotate(calc(-30deg * var(--i)));
          display: inline-block;
        }
      }
      
      .circle {
        position: absolute;
        width: 300px;
        height: 300px;
        border: solid 2px rgba(0, 0, 0, 0.25);
        border-radius: 50%;
        ${flexCenter};
        align-items: flex-start;
        z-index: 10;
        
        &:before {
          content: '';
          background: ${props => props.secondColor};
          width: 10px;
          height: 10px;
          position: absolute;
          top: -7px;
          border-radius: 50%;
          box-shadow: 0 0 20px ${props => props.secondColor}, 0 0 60px ${props => props.secondColor};
        }
        
        i {
          background: ${props => props.secondColor};
          position: absolute;
          width: 6px;
          height: 50%;
          transform-origin: bottom;
          transform: scaleY(0.5);
          opacity: 0.75;
        }
        
        &:nth-child(1) {
          i {
            width: 2px;
          }
         
        }
        
        &:nth-child(2) {
          i {
            width: 6px;
          }
        }
      }
      
      .circle-mn {
        width: 240px;
        height: 240px;
        z-index: 9;

        &:before {
          background: ${props => props.minuteColor};
          box-shadow: 0 0 20px ${props => props.minuteColor}, 0 0 60px ${props => props.minuteColor};
        }

        i {
          background: ${props => props.minuteColor};
        }
      }
      
      .circle-hr {
        width: 180px;
        height: 180px;
        z-index: 8;

        &:before {
          background: ${props => props.hourColor};
          box-shadow: 0 0 20px ${props => props.hourColor}, 0 0 60px ${props => props.hourColor};
        }

        i {
          background: ${props => props.hourColor};
        }
      }
    }
    
    #digital-clock {
      margin-bottom: 40px;
      display: flex;
      padding: 10px 20px;
      font-size: 2em;
      font-weight: 500;
      border: solid 2px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.25),
      inset 5px 5px 20px rgba(255, 255, 255, 0.2),
      inset -5px -5px 15px rgba(0, 0, 0, 0.75);
      
      div {
        position: relative;
        width: 60px;
        text-align: center;
        font-weight: 500;
        
        &:nth-child(2):after, &:nth-child(3):after {
          content: ':';
          position: absolute;
          left: -4px;
        }
        
        &#digital-hour {
          color: ${props => props.hourColor};
        }

        &#digital-minute {
          color: ${props => props.minuteColor};
        }

        &#digital-second{
          color: ${props => props.secondColor};
        }
        
        &#digital-ampm {
          text-transform: uppercase;
          font-size: 0.5em;
          ${flexCenter};
          color: #fff;
        }
        
        &:nth-child(3):after {
          animation: animate 1s steps(1) infinite;
        }
      }
    }
  }
  
  @keyframes animate {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;