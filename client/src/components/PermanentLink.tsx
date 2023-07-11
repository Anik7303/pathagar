import { HTMLAttributeAnchorTarget, PropsWithChildren } from "react";

type Props = {
  to: string;
  target?: HTMLAttributeAnchorTarget;
};

function ParmanentLink({
  children,
  to,
  target = "_blank",
}: PropsWithChildren<Props>) {
  return (
    <a href={to} target={target}>
      {children}
    </a>
  );
}

export default ParmanentLink;
