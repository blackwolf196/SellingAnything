import React from 'react';
import TrangChuWrapper from './styled';

export default () => {
  document.title = 'Trang chủ';

  return (
    <TrangChuWrapper>
      <div className={'placeholder'}>
        Website đang xây dựng. Chưa biết bán gì hết :(
      </div>
    </TrangChuWrapper>
  );
};
