import styled from 'styled-components';
import StardewWallpaper from '../../assets/CustomImages/WallpaperStardew.jpg';

export default styled.div`
  padding: 10px;
 
  .box-filter {
    width: 100%;
    display: flex;
    justify-content: center;
    
    .ant-select-auto-complete {
      width: 90%;
      .ant-select-selection-search-input {
        
      }
    }
  }
  
  .placeholder {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 90px - 70px - 20px);
    font-size: 60px;
  }
`;