import styled from "styled-components";

export default styled.div`
  padding: 10px;
  background: #fff;
  user-select: none;
  html h1,
  html h2,
  html h3,
  html h4,
  html h5,
  html h6,
  html a,
  html p,
  html li,
  input,
  textarea,
  span,
  div,
  html,
  body,
  html a {
    font-family: "Lucida Sans Unicode", serif;
  }
  
  .head-title {
    display: flex;
    align-items: center;
    flex-direction: column;

    .name-frame {
      border: solid 3px #e2c995;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 600px;
      height: 100px;
      font-weight: bold;
      font-size: 40px;
      z-index: 99;
      background: #FFF;
    }

    .title-frame {
      width: 100%;
      height: 120px;
      text-align: center;
      padding-top: 60px;
      background: #F2F2F2;
      font-size: 30px;
      margin-top: -50px;
      color: #b3b3b3;
    }
  }

  .body-cv {
    margin-top: 20px;
  }

  .col-left {
    text-align: right;
    padding: 10px 25px 10px 5px;
    border-right: solid 2px #DABB79;
  }

  .col-right {
    padding: 10px 5px 10px 25px;
  }

  .info-block {
    margin-bottom: 20px;

    .info-title {
      font-size: 20px;
      font-weight: bold;
    }

    .info-row {
      font-size: 18px;

      .anticon {
        margin-left: 15px;
        color: #999;
        font-size: 15px;
      }
    }

    .skill-line {
      font-size: 16px;
    }
  }
`;