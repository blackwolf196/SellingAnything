import React, { useState } from 'react';
import Styled from './styled';
import { Col, Row } from 'antd';
import { listFeature } from '@custom/IntroducePage/ultils';
import Button from '@iso/components/uielements/button';
import useInterval from '@iso/lib/helpers/useInterval';
import { useHistory } from 'react-router-dom';

const IntroducePage = () => {
  const history = useHistory();
  const [featureSelect, setFeatureSelect] = useState<number>(0);

  const autoNextFeature = () => {
    const maxIndexFeature = listFeature.length - 1;
    const currIndexFeature = listFeature.findIndex(
      (item) => item.id === featureSelect
    );
    if (currIndexFeature === maxIndexFeature) {
      setFeatureSelect(listFeature[0].id);
    } else {
      let nextIndexFeature;
      if (currIndexFeature === maxIndexFeature) {
        nextIndexFeature = 0;
      } else {
        nextIndexFeature = currIndexFeature + 1;
      }
      const idOfNextFeature = listFeature[nextIndexFeature].id;
      setFeatureSelect(idOfNextFeature);
    }
  };

  useInterval(() => autoNextFeature(), 1000 * 20);

  const onClickFeature = (id) => {
    if (featureSelect === id) {
      setFeatureSelect(0);
    } else {
      setFeatureSelect(id);
    }
  };

  const toHomePage = () => {
    history.push('/trang-chu');
  };

  return (
    <>
      <Styled>
        <div className={'section-1'}>
          <Row>
            <Col lg={12}>
              <div className={'name-page'}>Phần mềm quản lý học viên</div>
              <div className={'feature-sum'}>
                {listFeature.map((item) => (
                  <div
                    key={item.id}
                    className={`feature ${
                      featureSelect === item.id ? 'feature-select' : ''
                    }`}
                    onClick={() => onClickFeature(item.id)}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
              <Button onClick={toHomePage}>Trang chủ</Button>
            </Col>
            <Col lg={12} className={'feature-demo'}></Col>
          </Row>
        </div>
        {/*<div className={"section-2"}></div>*/}
        {/*<div className={"section-3"}></div>*/}
      </Styled>
    </>
  );
};

export default IntroducePage;
