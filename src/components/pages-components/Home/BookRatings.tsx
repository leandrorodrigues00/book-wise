import { Avatar } from "@/components/shared-components/Avatar";
import { RatingStars } from "@/components/shared-components/RatingStars";

export function BookRatings() {
  const text =
    "Semper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibhSemper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibhSemper et sapien proin vitae nisi. Feugiat neque integer donec et aenean posuere amet ultrices. Cras fermentum id pulvinar varius leo a in. Amet libero pharetra nunc elementum fringilla velit ipsum. Sed vulputate massa velit nibh";

  return (
    <div className="w-full bg-gray-700 p-6 rounded-lg">
      <header className="flex justify-between">
        <div className="flex gap-4 items-center">
          <Avatar
            src="https://s3-alpha-sig.figma.com/img/fbe8/a45a/437ecfcf85ca69f69b42294b1948473f?Expires=1684713600&Signature=JPs6IVFOD6mraVGn3fML~xSf2AGwrXkE0C2FF-xhPQjyVhI7muZhnriWPTQQhKUOymCpD5hw0Fl2tPWjGBszHqn9i4lSvMw2Nd8JmXGXRNtNhqf7wg45~Of-5kTk9nrgookyuXmyUroR8SLsHFL77OaleeeAzOqst7RVNFdD-v2y47jvivKJIBVbGM70Mx33UL12~WZaXcBkX6lvnKGzClSFY6DjmkqLprmPGwI4Lrm1tosrHVnEPW-e6YqATeSapFu~4-BQEchVcn9SeFF4-9LBujZtY-8c4iKtpNUfPtKw1Eu8-GAsceh3lqJEdOFhddVaRgGEMJ12S94G~WPwKw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />

          <div>
            <p className="leading-base">Jaxson Dias</p>
            <span className="text-sm text-gray-400">Hoje</span>
          </div>
        </div>

        <RatingStars rating={4} />
      </header>

      <div className="flex gap-5 mt-8">
        <img
          className="w-[6.75rem] h-[9.5rem] rounded"
          src="/images/books/o-hobbit.png"
          alt="Foto da capa do livro 'O Hobbit' de J.R.R TOLKIEN"
        />

        <div>
          <div className="mb-5">
            <h2 className="font-bold leading-short">O Hobbit</h2>
            <span className="text-sm leading-base text-gray-400">
              J.R.R Tolkien
            </span>
          </div>
          <p className="text-sm text-gray-300 leading-base line-clamp-4">
            {`${text.substring(0, 229)}...`}
            <button className="text-sm text-purple-100 font-bold leading-base ml-1">
              ver mais
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
