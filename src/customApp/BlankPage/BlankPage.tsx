import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Styled from "./styled";
import Button from "../../components/uielements/button";
import {sleep} from "@iso/lib/helpers/utility";

const BlankPage: React.FC = () => {
  // Giả lập hàm trả về Promise với giá trị ngẫu nhiên sau khoảng thời gian
  const getRandomNumber = () => {
    return new Promise((resolve) => {
      const randomDelay = Math.random() * 10000; // Tạo khoảng thời gian ngẫu nhiên từ 0ms đến 1000ms
      const result = {
        result: Math.floor(Math.random() * 10),
        delay: randomDelay
      }
      setTimeout(() => resolve(result), randomDelay);
    });
  };

// Sử dụng Promise.all để chạy các promise đồng thời
  const fetchMultipleNumbers = () => {
    const promises = [];
    for (let i = 0; i < 5; i++) {
      promises.push(getRandomNumber());
    }

    return Promise.all(promises);
  };

  const testPromiseAll = () => {
    console.time();
    fetchMultipleNumbers()
      .then((results) => {
        console.log('Kết quả:', results);
        console.timeEnd();
      })
      .catch((error) => {
        console.error('Lỗi:', error);
      });
  }

  return (
    <LayoutWrapper>
      <Styled>
        <Button onClick={testPromiseAll}>Click</Button>
      </Styled>
    </LayoutWrapper>
  )
};

export default BlankPage;