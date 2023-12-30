import { PolymorphProps } from '../polymorph/types';

enum boxTagsVariants {
  article,
  section,
  header,
  aside,
  main,
  form,
  div,
  nav,
  ul,
  ol,
}

export type BoxProps = PolymorphProps<keyof typeof boxTagsVariants>;
