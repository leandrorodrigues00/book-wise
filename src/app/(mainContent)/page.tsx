import { PopularBooks } from "@/components/PopularBooks";
import { TrendingBooks } from "@/components/TrendingBooks";

export default function Home() {
  return (
    <section className="mx-auto mt-[42px] flex w-full max-w-[996px] gap-16">
      {/* @ts-expect-error Server Component */}
      <TrendingBooks />

      {/* @ts-expect-error Server Component */}
      <PopularBooks />
    </section>
  );
}
