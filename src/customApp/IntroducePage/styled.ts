import styled from 'styled-components';

export default styled.div`
  .section-1 {
    background: #eae7dc;
    height: 100vh;
    color: #8e8d8a;
    padding: 10px;

    .name-page {
      font-size: 60px;
    }

    .feature-sum {
      padding-left: 60px;
      font-size: 40px;

      .feature {
        &:before {
          content: '- ';
        }

        &:not(:first-child) {
          margin-top: 15px;
        }

        &.feature-select {
          color: #5b5a57;

          &:before {
            content: '* ';
          }
        }

        &:hover {
          cursor: pointer;
          color: #5b5a57;

          &:before {
            content: '* ';
          }
        }
      }
    }

    .feature-demo {
      background: #fffeff;
    }
  }

  .section-2 {
    background: #2f4454;
    height: 50vh;
  }

  .section-3 {
    background: #edc7b7;
    height: 50vh;
  }
`;
