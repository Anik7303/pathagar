interface DropdownItemProps {
  children: React.ReactNode;
}

export default function DropdownItem({ children }: DropdownItemProps) {
  return <li className="w-full">{children}</li>;
}
