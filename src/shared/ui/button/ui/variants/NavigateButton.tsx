import { Link } from "react-router-dom";
import { Button } from "../Button";
import { ButtonProps } from "../types";

export type NavigateButtonProps = ButtonProps & {
  to: string;
};

export const NavigateButton = ({ to, ...props }: NavigateButtonProps) => {
  return (
    <Link to={to}>
      <Button {...props}></Button>
    </Link>
  );
};
