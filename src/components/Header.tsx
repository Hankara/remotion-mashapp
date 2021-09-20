import React from 'react';
import { Slider, InputNumber, Typography, Row, Col } from 'antd';

interface Props {
  userCount: number;
  duration: number;
  setUserCount: (value: number) => void;
  setDuration: (value: number) => void;
}
const RowStyle={
  background: 'linear-gradient(#495057 0%, #343a40 100%)',
	minHeight: '50px',
};

export const Header: React.FC<Props> = ({userCount, duration, setUserCount, setDuration}) => {
  const { Text } = Typography;
  const ColStyle = { padding: '0 10px'};

  return(
    <Row justify="center" align="middle" style={RowStyle}>
      <Col span={8} style={{ textAlign:"right" }}>
        <Text style={{color: 'white'}}>User Count </Text>
      </Col>
      <Col style={ColStyle}>
        <InputNumber min={1} max={10} defaultValue={userCount} onChange={value => setUserCount(value)} />
      </Col>
      <Col style={ColStyle}>
        <Text style={{color: 'white'}}>Duration(seconds) </Text>
      </Col>
      <Col span={8}>
        <Row>
          <Col span={4}>
            <Slider min={1} max={20} value={duration} step={0.1} onChange={value => setDuration(value)} />
          </Col>
          <Col span={4}>
            <InputNumber min={1} max={20} style={{ margin: '0 16px' }} step={0.1} value={duration} onChange={value => setDuration(value)} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}