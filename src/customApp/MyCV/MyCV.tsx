import React from "react";
import MainCV from "@custom/MyCV/mainCV";
import {MainCVProps} from "@custom/MyCV/types";

const MyCV = () => {
    const dataCV: MainCVProps = {
      name: "Cong Thanh Duong",
      jobTitle: "Senior Frontend Developer",
      contact: {
        email: "thanhdc196@gmail.com",
        phoneNumber: "0358.500.889",
        address: "Ha Noi"
      },
      education: [],
      skills: [
        "ReactJS",
        "ASP.NET",
        "Typescript",
        "RESTful API",
        "GraphQL",
      ]
    }

    return <>
      <MainCV {...dataCV}/>
    </>
  }
;

export default MyCV;