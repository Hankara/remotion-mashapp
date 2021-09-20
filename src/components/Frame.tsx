import { FunctionComponent } from 'react';
import { AbsoluteFill } from 'remotion';

const FillSyle = {
  padding: '54px',
  background: 'linear-gradient(#495057 0%, #343a40 100%)'
}
const DivStyle = {
  flex: 1,
  backgroundColor: 'white',
  boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)'
}

export const Frame: FunctionComponent = () => {
    return (
      <AbsoluteFill style={FillSyle}>
        <div style={DivStyle} />
      </AbsoluteFill>
    );
};