import { buttonVariants } from "./variants";
import { PolymorphProps } from "@shared/ui/polymorph/types";
import { VariantProps } from "class-variance-authority";
import { HTMLAttributes } from "react";

export type ButtonProps = HTMLAttributes<HTMLButtonElement> &
  PolymorphProps &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
  };
