import React, { useEffect, useState } from 'react';
import {
  data,
  autoDraw,
  autoDrawDuration,
  autoDrawEasing,
  smooth,
  gradient,
  radius,
  strokeWidth,
  strokeLinecap
} from './config';
import PageHeader from '@iso/components/utility/pageHeader';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import Box from '@iso/components/utility/box';

import Trend from 'react-trend';
import useInterval from '../../../library/helpers/useInterval';

const TrendChart = () => {
  const [dynamicData, setDymamicData] = useState(data);
  const generateDynamicData = () => {
    const _dynamicData = [...dynamicData];
    const randomNumber = Math.floor(Math.random() * 101);
    _dynamicData.push(randomNumber);
    const last100 = _dynamicData.slice(-100);
    setDymamicData(last100);
  };

  const interval = useInterval(() => {
    generateDynamicData();
  }, 200);

  useEffect(() => {
    // const interval = useInterval(() => {
    //   generateDynamicData();
    // }, 200);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <LayoutWrapper className="isoMapPage">
      <PageHeader>React Trend</PageHeader>

      <Box>
        <Trend
          smooth={smooth}
          autoDraw={autoDraw}
          autoDrawDuration={parseInt(autoDrawDuration, 10)}
          autoDrawEasing={autoDrawEasing}
          data={dynamicData}
          gradient={gradient}
          radius={parseInt(radius, 10)}
          strokeWidth={strokeWidth}
          strokeLinecap={strokeLinecap}
        />
      </Box>
    </LayoutWrapper>
  );
};

export default TrendChart;
