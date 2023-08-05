import React, {useRef} from "react";
import Styled from "./styled";
import {Col, Row} from "antd";
import {MainCVProps} from "@custom/MyCV/types";
import {EnvironmentFilled, MailFilled, PhoneFilled} from "@ant-design/icons";
import Button from "@iso/components/uielements/button";

const MainCV: React.FC<MainCVProps> = (props) => {
  const {name, jobTitle, contact, education, skills, careerObjective} = props;

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
        {careerObjective ? <>
          <div className={"info-block"}>
            <div className={"info-title"}>Career Objective</div>
            <div className={"info-row"} dangerouslySetInnerHTML={{__html: careerObjective}}/>
          </div>
        </> : null}
        {/**/}
        <div className={"info-block"}>
          <div className={"info-title"}>Work Experience</div>
        </div>
      </Col>
    </Row>
  </Styled>
}

export default MainCV;