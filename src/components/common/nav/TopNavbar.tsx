import { CircleUserRound, Heart } from "lucide-react";
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
          <Heart />
        </Button>
        <Button variant="unstyled" size="icon">
          <Flags.Lithuania
            width={20}
            height={20}
            className="mr-1 rounded-full"
          />
          <p>LT</p>
        </Button>
        <Button variant="unstyled" size="icon">
          <CircleUserRound className="mr-1" />
          Sign in
        </Button>
      </div>
    </div>
  );
};

export default TopNavbar;
