import Link from "next/link";

import { Flags } from "@/components/common/flags";
import { Icons } from "@/components/common/icons";
import { Button } from "@/components/ui/button";

const TopNavbar = () => {
  return (
    <div className="flex items-center gap-8 justify-between">
      <Link href="/">
        <Icons.logo />
      </Link>
      <nav className="flex items-center gap-8 text-base font-medium">
        <Link href="/" className="flex items-center text-pink">
          <Icons.timer className="mr-1 fill-pink" />
          Paskutine minute
        </Link>
        <Link href="/">Keliones</Link>
        <Link href="/">Kelioniu kryptys</Link>
        <Link href="/">Draudimas</Link>
        <Link href="/">Lektuvu bilietai</Link>
        <Link href="/">Kelioniu agenturos</Link>
      </nav>
      <div className="flex items-center gap-1 text-sm font-medium">
        <Button variant="unstyled" size="icon">
          <Icons.heart className="w-[20px] h-[18px] fill-foreground" />
        </Button>
        <Button variant="unstyled" size="icon">
          <Flags.Lithuania
            width={20}
            height={20}
            className="mr-1 rounded-full"
          />
          <p>EUR</p>
        </Button>
        <Button variant="unstyled" size="icon">
          <Icons.user className="mr-1" />
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default TopNavbar;
