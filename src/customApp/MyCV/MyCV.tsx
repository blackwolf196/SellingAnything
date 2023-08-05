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
      ],
      careerObjective: "I've been a developer for five years. Almost all my time was spent on the Frontend, especially ReactJS.<br/>I learn a lot from working on projects. I'm heading to become a Fullstack Developer.<br/>I hope I will have a chance to work on more and more projects so I can improve myself."
    }

    return <>
      <MainCV {...dataCV}/>
    </>
  }
;

export default MyCV;