import { Box } from "../box";
import { BoxProps } from "../box/types";

export const Rectangle = ({ ...props }: BoxProps) => {
  return (
    <Box
      style={{
        background: "rgba(217, 217, 217, 0.07)",
        borderRadius: "40px",
        flexShrink: "0",
        transform: "rotate(45deg)",
      }}
      {...props}
    ></Box>
  );
};
