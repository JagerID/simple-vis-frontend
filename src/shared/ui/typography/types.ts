import { VariantProps } from 'class-variance-authority';
import { PolymorphProps } from '../polymorph/types';
import { typographyStyles } from './styles';

enum typographyTagsVariants {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  label,
}

export type TypographyProps = PolymorphProps<
  keyof typeof typographyTagsVariants
> &
  VariantProps<typeof typographyStyles>;
