import { Suspense } from "react";

import { HotTickets } from "@/components/recreational/HotTickets/HotTickets";
import { HotTicketsGridSkeleton } from "@/components/recreational/HotTickets/HotTicketsClient";

export const revalidate = 0;

export default async function Home() {
  return (
    <main>
      <section
        className="py-16 bg-secondary bg-[url('/bg/hero.png')] bg-center-bottom bg-no-repeat"
        style={{ backgroundPosition: "center top" }}
      >
        <div className="container">
          <Suspense fallback={<HotTicketsGridSkeleton items={8} />}>
            <HotTickets />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
