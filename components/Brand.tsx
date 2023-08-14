import Link from "next-intl/link";
import Image from "next/image";

interface BrandProps {
  href: string;
  label: string;
  src: string;
}

export default function Brand({ href, label, src }: BrandProps) {
  return (
    <Link href={href} className="flex items-center gap-2">
      <Image src={src} alt="logo" height={40} />
      <span className="whitespace-nowrap text-lg font-bold text-secondary-default">
        {label}
      </span>
    </Link>
  );
}
