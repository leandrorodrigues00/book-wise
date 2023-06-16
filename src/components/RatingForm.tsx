import { Dispatch, SetStateAction, useState } from "react";
import { User } from "next-auth";

import { Form } from "@/components/ui/Form";
import { Check, CloseIcon } from "@/components/icons";
import { RatingStars } from "@/components/RatingStars";
import { UserAvatar } from "@/components/UserAvatar";

interface RatingFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  user: Pick<User, "name" | "image" | "email">;
}

export function RatingForm({ setIsOpen, user }: RatingFormProps) {
  const [currentRate, setCurrentRate] = useState(0);
  const [description, setDescription] = useState("");

  return (
    <div className="w-full rounded-lg bg-gray-700 p-6">
      <header className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <UserAvatar
            user={{ name: user.name || null, image: user.image || null }}
          />
          <span className="font-bold leading-base">{user.name}</span>
        </div>

        <RatingStars
          rating={currentRate}
          setRating={setCurrentRate}
          size="lg"
        />
      </header>

      <Form.Textarea
        name="userRating"
        className="min-h-[164px] w-full rounded border border-gray-500 bg-gray-800  text-sm  focus:border-green-200"
        placeholder="Escreva sua avaliação"
        maxLength={450}
        value={description}
        onChange={({ target }) => setDescription(target.value)}
      />

      <div className="mt-3 flex justify-end space-x-2 ">
        <button
          onClick={() => setIsOpen(false)}
          className="rounded bg-gray-600 p-2 transition-colors hover:bg-gray-500"
        >
          <CloseIcon className="h-6 w-6 fill-current text-green-100" />
        </button>
        <button className="rounded bg-gray-600 p-2 transition-colors hover:bg-gray-500">
          <Check className="h-6 w-6 fill-current text-green-100" />
        </button>
      </div>
    </div>
  );
}
