import styled from 'styled-components';

const Styled = styled.div`
  .list-image {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    img {
      max-width: 90%;
      
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
  }
`;

export default Styled;