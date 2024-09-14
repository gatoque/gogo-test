import { Suspense } from "react";

import { HotTickets } from "@/components/recreational/HotTickets/HotTickets";
import { HotTicketsGirdSkeleton } from "@/components/recreational/HotTickets/HotTicketsClient";

export const revalidate = 0;

export default async function Home() {
  return (
    <main>
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl font-medium mb-4">Paskutine minute</h2>
          <Suspense fallback={<HotTicketsGirdSkeleton items={8} />}>
            <HotTickets />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
