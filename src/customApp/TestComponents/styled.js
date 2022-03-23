import styled from 'styled-components';

export default styled.div`
  .column {
    display: flex;
    flex-direction: column;
  }
  
  .ant-checkbox-wrapper + .ant-checkbox-wrapper {
    margin-left: 0;
  }
  
  .title {
    font-size: 22px;
    margin-bottom: 15px;
  }
  
  .color-sample {
    width: 50px;
    height: 20px;
  }
`;