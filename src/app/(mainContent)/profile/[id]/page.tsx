import Link from "next/link";

import { UserProfileConfig } from "@/types";
import { getCurrentUser } from "@/lib/session";
import { Form } from "@/components/ui/form";
import {
  Book,
  BookmarkSimple,
  Books,
  ChevronLeft,
  MagnifyingGlass,
  Profile,
  UserList,
} from "@/components/icons";
import { ProfileRatings } from "@/components/profile-ratings";
import { UserAvatar } from "@/components/user-avatar";

interface ProfilePageProps {
  params: {
    id: string;
  };
}

interface ProfileApiResponse {
  profile: UserProfileConfig;
}

async function fetchProfileDetails(id: string) {
  const url = `http://localhost:3000/api/profile/${id}`;
  try {
    const response = await fetch(url, {
      cache: "no-cache",
    });

    if (response.ok) {
      const json: ProfileApiResponse = await response.json();
      return json.profile;
    } else {
      throw new Error(
        `Error fetching data from URL ${url}. Response status: ${response.status}`
      );
    }
  } catch (error) {
    if (error instanceof Error)
      console.error(
        `Error fetching data from URL ${url}. Message: ${error.message}`
      );
    return null;
  }
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const profile = await fetchProfileDetails(params.id);
  if (!profile) throw new Error("This profile was not found");

  const user = await getCurrentUser();
  const ownProfile = user?.id == profile.user.id;
  const memberSinceYear = new Date(profile.user.member_since).getFullYear();

  return (
    <section className="mx-auto mt-[42px] flex w-full max-w-[996px] gap-16 overflow-hidden">
      <div className="no-scrollbar max-h-[calc(100vh-42px)] w-full max-w-[608px]  overflow-y-auto">
        <div>
          {ownProfile ? (
            <h1 className="flex gap-3 text-2xl font-bold leading-short">
              <Profile className="h-[32px] w-[32px] fill-current text-green-100  " />
              Perfil
            </h1>
          ) : (
            <Link className="flex items-center space-x-3" href={"/explore"}>
              <ChevronLeft className="h-6 w-6 fill-current" />
              <span className="font-bold leading-base hover:text-gray-400">
                Voltar
              </span>
            </Link>
          )}

          <Form.Input
            name="profileBook"
            placeholder="Buscar livro avaliado"
            icon={
              <MagnifyingGlass className="h-5 w-5 fill-current text-gray-500 group-focus-within:text-green-200" />
            }
            className="group mt-10 flex w-full rounded border border-gray-500 bg-gray-800 px-5 py-3 text-sm leading-base focus-within:border-green-200"
          />
        </div>

        <div className="mt-8">
          {profile.ratings.length > 0 ? (
            profile.ratings.map((rating) => <ProfileRatings rating={rating} />)
          ) : (
            <p className="font-bold leading-short text-gray-400">
              Nenhuma avaliação realizada...
            </p>
          )}
        </div>
      </div>

      <div className="mt-[4.75rem] flex h-full max-h-[34.687rem]  flex-col border-l border-l-gray-700 px-14">
        <header className="flex flex-col items-center after:my-8 after:h-1 after:w-8 after:rounded-full after:bg-gradient-vertical after:content-['']">
          <UserAvatar
            user={{
              name: profile.user.name,
              image: profile.user.image || null,
            }}
            className="h-[72px] w-[72px] p-[2px] "
          />
          <p className="mt-5 text-xl  font-bold">{profile.user.name}</p>
          <span className="text-sm leading-base text-gray-400">
            membro desde {memberSinceYear}
          </span>
        </header>

        <div className="flex w-full flex-col gap-10">
          <div className="flex gap-5">
            <Book className="h-8 w-8 fill-current text-green-100" />
            <div>
              <span className="font-bold leading-short">
                {profile.readPages}
              </span>
              <p className="text-sm leading-base text-gray-300">
                Páginas lidas
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <Books className="h-8 w-8 fill-current text-green-100" />
            <div>
              <span className="font-bold leading-short">
                {profile.ratedBooks}
              </span>
              <p className="text-sm leading-base text-gray-300">
                Livros avaliados
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <UserList className="h-8 w-8 fill-current text-green-100" />
            <div>
              <span className="font-bold leading-short">
                {profile.readAuthors}
              </span>
              <p className="text-sm leading-base text-gray-300">
                Autores lidos
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <BookmarkSimple className="h-8 w-8 fill-current text-green-100" />
            <div>
              <span className="font-bold leading-short">
                {profile.mostReadCategory || "Nenhuma categoria"}
              </span>
              <p className="text-sm leading-base text-gray-300">
                Categoria mais lida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
