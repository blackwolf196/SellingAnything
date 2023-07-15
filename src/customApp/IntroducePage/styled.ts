import styled from "styled-components";

export default styled.div`
  .section-1 {
    background: #EAE7DC;
    height: 100vh;
    color: #8E8D8A;
    padding: 10px;

    .name-page {
      font-size: 60px;
    }

    .feature-sum {
      padding-left: 60px;
      font-size: 40px;

      .feature {
        &:before {
          content: "- ";
        }

        &:not(:first-child) {
          margin-top: 15px;
        }

        &.feature-select {
          color: #5b5a57;

          &:before {
            content: "* ";
          }
        }

        &:hover {
          cursor: pointer;
          color: #5b5a57;

          &:before {
            content: "* ";
          }
        }
      }
    }

    .feature-demo {
      background: #FFFEFF;
    }
  }

  .section-2 {
    background: #2F4454;
    height: 50vh;
  }

  .section-3 {
    background: #EDC7B7;
    height: 50vh;
  }
`;