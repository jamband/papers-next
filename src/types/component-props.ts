export type ComponentProps<T extends React.ElementType> = Omit<
  React.ComponentPropsWithoutRef<T>,
  "className"
>;
