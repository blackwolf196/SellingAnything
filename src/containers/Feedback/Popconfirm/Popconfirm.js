import React from 'react';
import { Row, Col, Button } from 'antd';
import Popconfirms from '@iso/components/Feedback/Popconfirm';
import message from '@iso/components/Feedback/Message';
import PageHeader from '@iso/components/utility/pageHeader';
import Box from '@iso/components/utility/box';
import LayoutWrapper from '@iso/components/utility/layoutWrapper';
import ContentHolder from '@iso/components/utility/contentHolder';
import IntlMessages from '@iso/components/utility/intlMessages';
import basicStyle from '@iso/assets/styles/constants';
import PopconfirmWrapper from './Popconfirm.styles';

const Popconfirm = (props) => (
  <PopconfirmWrapper>
    <Popconfirms {...props} />
  </PopconfirmWrapper>
);
const text = 'Are you sure delete this task?';

function confirm() {
  message.success('Click on Yes');
}

function cancel() {
  message.error('Click on No');
}

export default function () {
  const { rowStyle, colStyle, gutter } = basicStyle;
  return (
    <LayoutWrapper>
      <PageHeader>{<IntlMessages id="feedback.alert.popConfirm" />}</PageHeader>
      <Row style={rowStyle} gutter={gutter} justify="start">
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={<IntlMessages id="feedback.alert.popConfirm.basicTitle" />}
            subtitle={
              <IntlMessages id="feedback.alert.popConfirm.basicSubTitle" />
            }
          >
            <ContentHolder>
              <Popconfirm
                title="Are you sure？"
                okText="Yes"
                cancelText="No"
                onConfirm={confirm}
                onCancel={cancel}
              >
                <a href="# ">
                  {<IntlMessages id="feedback.alert.popConfirm.delete" />}
                </a>
              </Popconfirm>
            </ContentHolder>
          </Box>
        </Col>
        <Col md={12} sm={12} xs={24} style={colStyle}>
          <Box
            title={
              <IntlMessages id="feedback.alert.popConfirm.notiWithIconTitle" />
            }
            subtitle={
              <IntlMessages id="feedback.alert.popConfirm.notiWithIconSubTitle" />
            }
          >
            <ContentHolder>
              <div className="demoBtnsWrapper">
                <Popconfirm
                  placement="topLeft"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="demoPosBtn">
                    {<IntlMessages id="feedback.alert.popConfirm.TL" />}
                  </Button>
                </Popconfirm>
                <Popconfirm
                  placement="top"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="demoPosBtn">
                    {<IntlMessages id="feedback.alert.popConfirm.top" />}
                  </Button>
                </Popconfirm>
                <Popconfirm
                  placement="topRight"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="demoPosBtn">
                    {<IntlMessages id="feedback.alert.popConfirm.TR" />}
                  </Button>
                </Popconfirm>
              </div>
              <div className="demoBtnsWrapper">
                <Popconfirm
                  placement="leftTop"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="demoPosBtn">
                    {<IntlMessages id="feedback.alert.popConfirm.LT" />}
                  </Button>
                </Popconfirm>
                <Popconfirm
                  placement="left"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="demoPosBtn">
                    {<IntlMessages id="feedback.alert.popConfirm.left" />}
                  </Button>
                </Popconfirm>
                <Popconfirm
                  placement="leftBottom"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="demoPosBtn">
                    {<IntlMessages id="feedback.alert.popConfirm.LB" />}
                  </Button>
                </Popconfirm>
              </div>
              <div className="demoBtnsWrapper">
                <Popconfirm
                  placement="rightTop"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="demoPosBtn">
                    {<IntlMessages id="feedback.alert.popConfirm.RT" />}
                  </Button>
                </Popconfirm>
                <Popconfirm
                  placement="right"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="demoPosBtn">
                    {<IntlMessages id="feedback.alert.popConfirm.right" />}
                  </Button>
                </Popconfirm>
                <Popconfirm
                  placement="rightBottom"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="demoPosBtn">
                    {<IntlMessages id="feedback.alert.popConfirm.RB" />}
                  </Button>
                </Popconfirm>
              </div>
              <div className="demoBtnsWrapper">
                <Popconfirm
                  placement="bottomLeft"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="demoPosBtn">
                    {<IntlMessages id="feedback.alert.popConfirm.Bl" />}
                  </Button>
                </Popconfirm>
                <Popconfirm
                  placement="bottom"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="demoPosBtn">
                    {<IntlMessages id="feedback.alert.popConfirm.bottom" />}
                  </Button>
                </Popconfirm>
                <Popconfirm
                  placement="bottomRight"
                  title={text}
                  onConfirm={confirm}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button className="demoPosBtn">
                    {<IntlMessages id="feedback.alert.popConfirm.BR" />}
                  </Button>
                </Popconfirm>
              </div>
            </ContentHolder>
          </Box>
        </Col>
      </Row>
    </LayoutWrapper>
  );
}
