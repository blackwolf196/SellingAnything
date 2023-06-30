import React from "react";
import LayoutWrapper from "../components/LayoutWrapper";
import Styled from "./styled";
import {useHistory} from "react-router-dom";

const PageNotFound: React.FC = () => {
  const history = useHistory();
  const goHomePage = () => {
    history.push("/");
  }

  return (
    <LayoutWrapper>
      <Styled>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>4<span></span>4</h1>
            </div>
            <h2>Oops! Page Not Be Found</h2>
            <p>Sorry but the page you are looking for does not exist, have been removed, name changed or is temporarily
              unavailable</p>
            <a onClick={goHomePage}>Back to homepage</a>
          </div>
        </div>
      </Styled>
    </LayoutWrapper>
  )
};

export default PageNotFound;