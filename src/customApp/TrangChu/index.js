import React, {useEffect, useState} from 'react';
import TrangChuWrapper from './styled';
import actions from './actions';
import {useDispatch} from "react-redux";

export default props => {
  document.title = 'Trang chủ';
  const [filterData, setFilterData] = useState({limit: 60, offset: 10});
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actions.getList(filterData))
  }, []);

  return (
    <TrangChuWrapper>
      <div className={'placeholder'}>
        Website đang xây dựng. Chưa biết bán gì hết :(
      </div>
    </TrangChuWrapper>
  )
}