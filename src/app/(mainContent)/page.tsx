import { TrendingBooks } from "@/components/pages-components/Home/TrendingBooks";
import { PopularBooks } from "@/components/pages-components/Home/PopularBooks";

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
