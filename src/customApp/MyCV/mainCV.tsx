import React from "react";
import Styled from "./styled";
import {Col, Row} from "antd";
import {MainCVProps} from "@custom/MyCV/types";
import {EnvironmentFilled, MailFilled, PhoneFilled} from "@ant-design/icons";

const MainCV: React.FC<MainCVProps> = (props) => {
  const {name, jobTitle, contact, education, skills} = props;
  return <Styled>
    <div className={"head-title"}>
      <div className={"name-frame"}>{name}</div>
      <div className={"title-frame"}>{jobTitle}</div>
    </div>
    <Row className={"body-cv"}>
      <Col lg={8} className={"col-left"}>
        <div className={"info-block"}>
          <div className={"info-title"}>Contact</div>
          {contact.address ? <div className={"info-row"}>
            {contact.address}
            <EnvironmentFilled/>
          </div> : null}
          {contact.phoneNumber ? <div className={"info-row"}>
            {contact.phoneNumber}
            <PhoneFilled/>
          </div> : null}
          {contact.email ? <div className={"info-row"}>
            {contact.email}
            <MailFilled/>
          </div> : null}
        </div>
        {/**/}
        {education?.length ? <>
          <div className={"info-block"}>
            <div className={"info-title"}>Education</div>
            <div className={"info-row"}>

            </div>
          </div>
        </> : null}
        {/**/}
        {skills?.length ? <>
          <div className={"info-block"}>
            <div className={"info-title"}>Skills</div>
            <div className={"info-row"}>
              {skills.map(skill => <div className={"skill-line"}>{skill}</div>)}
            </div>
          </div>
        </> : null}
      </Col>
      <Col lg={16} className={"col-right"}>
        <div className={"info-block"}>
          <div className={"info-title"}>Career Objective</div>
          <div className={"info-row"}>
            I've been a developer for five years. Almost all my time was spent on the Frontend, especially ReactJS.
            <br/>
            I learn a lot from working on projects. I'm heading to become a Fullstack Developer.
            <br/>
            I hope I will have a chance to work on more and more projects so I can upgrade myself.
          </div>
        </div>
        {/**/}
        <div className={"info-block"}>
          <div className={"info-title"}>Work Experience</div>
        </div>
      </Col>
    </Row>
  </Styled>
}

export default MainCV;