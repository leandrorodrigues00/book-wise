import { Avatar } from "@/components/shared-components/Avatar";
import { Form } from "@/components/shared-components/Form";
import { RatingStars } from "@/components/shared-components/RatingStars";
import { Check, CloseIcon } from "@/components/shared-components/icons";

export function RatingForm() {
  return (
    <div className="w-full rounded-lg bg-gray-700 p-6">
      <header className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar
            src="https://s3-alpha-sig.figma.com/img/7481/84a6/ca5e70b2945cbb4532d7b4e20d745736?Expires=1686528000&Signature=iqOGlzXX53ns0o8Wz-HAvmXzuSuIx95sWUsx~AsLguysR~sNdKmZclQ-gPXtL-zgo9YV2d~TjgZXn4TkzdCyTjRKdPnmMVvKy4TbY2AdJxO9zUFXv3OK63o2TM5aM~aVB~Jg4CoEGFkdyGPrEmL07ji2s5y7J1DM16Wpn2ef92fBlzx8UyMTbXCdMGyMyFCanXQ87gdRV3b5dnDh2aDBmv8XMnaR35eKQb5Ds0tfXjTuiI52XU9TRtYBFrXPTe6MrEEDt1N3ds--8psGqfWXQyZOCvcXXV3ssE4c8s91TeTQMkml7a~vK3QssfQrhYzV5s9Jsy4xVlEhVcjC25AERQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt="TROCAR DEPOIS KOKKA"
          />

          <span className="font-bold leading-base">Cristofer Rosser</span>
        </div>

        <RatingStars rating={0} size="lg" />
      </header>

      <Form.Textarea
        name="userRating"
        className="min-h-[164px] w-full rounded border border-gray-500 bg-gray-800  text-sm  focus:border-green-200"
        placeholder="Escreva sua avaliação"
        maxLength={450}
      />

      <div className="mt-3 flex justify-end space-x-2 ">
        <button className="rounded bg-gray-600 p-2">
          <CloseIcon className="h-6 w-6 fill-current text-green-100" />
        </button>
        <button className="rounded bg-gray-600 p-2">
          <Check className="h-6 w-6 fill-current text-green-100" />
        </button>
      </div>
    </div>
  );
}
