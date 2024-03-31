import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Clock = ({color = '#fff', height = 40, width = 40}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 40 40">
      <Path
        id="Icon_ionic-ios-time"
        data-name="Icon ionic-ios-time"
        d="M23.375,3.375a20,20,0,1,0,20,20A20,20,0,0,0,23.375,3.375Zm1.346,21.731a1.35,1.35,0,0,1-1.346,1.346H14.144a1.346,1.346,0,1,1,0-2.692h7.885V11.067a1.346,1.346,0,1,1,2.692,0Z"
        transform="translate(-3.375 -3.375)"
        fill={color}
      />
    </Svg>
  );
};
export default Clock;
