import Image from "next/image";

import { RatingStars } from "@/components/shared-components/RatingStars";

export function MyBookRatings() {
  return (
    <div className="mb-6">
      <span className="text-sm leading-base text-gray-300">Há 2 dias</span>

      <div className="mt-2 rounded-lg bg-gray-700 p-6">
        <header className="flex gap-5    ">
          <Image
            src="/images/books/entendendo-algoritmos.png"
            width={98}
            height={134}
            alt="entendendo-algoritmos"
          />

          <div className="flex flex-col justify-between">
            <div>
              <h2 className="font-bold leading-short">Entendendo Algoritmos</h2>
              <p className="text-sm leading-base text-gray-400">
                Aditya Bhargava
              </p>
            </div>
            <RatingStars rating={4} />
          </div>
        </header>
        <p className="mt-6 text-sm leading-base text-gray-300">
          Tristique massa sed enim lacinia odio. Congue ut faucibus nunc vitae
          non. Nam feugiat vel morbi viverra vitae mi. Vitae fringilla ut et
          suspendisse enim suspendisse vitae. Leo non eget lacus sollicitudin
          tristique pretium quam. Mollis et luctus amet sed convallis varius
          massa sagittis. Proin sed proin at leo quis ac sem. Nam donec accumsan
          curabitur amet tortor quam sit. Bibendum enim sit dui lorem urna amet
          elit rhoncus ut. Aliquet euismod vitae ut turpis. Aliquam amet integer
          pellentesque.
        </p>
      </div>
    </div>
  );
}
