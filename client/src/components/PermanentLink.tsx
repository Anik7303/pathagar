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
    <a href={to} target={target} rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default ParmanentLink;
