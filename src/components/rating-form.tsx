import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { User } from "next-auth";

import { Form } from "@/components/ui/form";
import { Check, CloseIcon, Spinner } from "@/components/icons";
import { RatingStars } from "@/components/rating-stars";
import { UserAvatar } from "@/components/user-avatar";
import { createUserRating } from "@/app/actions";

interface RatingFormProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  user: Pick<User, "name" | "image" | "email" | "id">;
  bookId: string;
}

export function RatingForm({ setIsOpen, user, bookId }: RatingFormProps) {
  const [currentRate, setCurrentRate] = useState(0);
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    try {
      await createUserRating({ description, currentRate, bookId });

      setCurrentRate(0);
      setDescription("");
      setIsOpen(false);
    } catch (error) {
      if (error instanceof Error) setError(error.message);

      console.log("handleSubmit ~ error:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="w-full rounded-lg bg-gray-700 p-6">
      <header className="mb-6 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <UserAvatar
            user={{
              name: user.name || null,
              image: user.image || null,
              id: user.id,
            }}
          />
          <span className="font-bold leading-base">{user.name}</span>
        </div>

        <RatingStars
          rating={currentRate}
          setRating={setCurrentRate}
          className="h-7 w-7"
        />
      </header>

      <form onSubmit={handleSubmit}>
        <Form.Textarea
          name="userRating"
          className="min-h-[164px] rounded border border-gray-500 bg-gray-800 text-sm focus:border-green-200"
          placeholder="Escreva sua avaliação"
          maxLength={450}
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />

        {error && <p className="mt-2 text-red-300">{error}</p>}

        <div className="mt-3 flex justify-end space-x-2 ">
          <button
            onClick={() => setIsOpen(false)}
            className="rounded bg-gray-600 p-2 transition-colors hover:bg-gray-500"
          >
            <CloseIcon className="h-6 w-6 fill-current text-green-100" />
          </button>
          <button
            type="submit"
            disabled={isLoading}
            className="rounded bg-gray-600 p-2 transition-colors hover:bg-gray-500 disabled:cursor-not-allowed disabled:opacity-80"
          >
            {isLoading ? (
              <Spinner className="h-6 w-6 animate-spin" />
            ) : (
              <Check className="h-6 w-6 fill-current text-green-100" />
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
