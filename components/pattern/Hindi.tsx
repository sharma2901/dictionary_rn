import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";

interface HindiProps extends SvgProps {
  size?: number;
}

const Hindi: React.FC<HindiProps> = ({ size = 24, ...props }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fill="#F95428"
        d="M20.022 3h-5a1 1 0 000 2h1.5v6h-4.95c.343-.932.528-1.94.526-3a5 5 0 00-9.327-2.5.99974.99974 0 101.73142 1A3.00021 3.00021 0 117.59766 11a1 1 0 000 2 3 3 0 11-2.59866 4.5.99974.99974 0 00-1.73144 1A5 5 0 0012.59766 16c-.002-1.06-.187-2.068-.526-3h4.95v7a1 1 0 002 0V5h1.5a1 1 0 000-2z"
      />
    </Svg>
  );
};

export default Hindi;
