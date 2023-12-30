import { Polymorph } from "@shared/ui/polymorph";
import { ButtonProps } from "./types";
import { buttonVariants } from "./variants";

export const Button = ({
  isLoading,
  children,
  color,
  variant,
  size,
  className,
  ...props
}: ButtonProps) => {
  return (
    <Polymorph
      as="button"
      className={buttonVariants({ size, color, variant, className })}
      {...props}
    >
      {children}
    </Polymorph>
  );
};
