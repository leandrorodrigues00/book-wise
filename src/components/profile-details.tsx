import { UserProfileConfig } from "@/types";
import { Book, BookmarkSimple, Books, UserList } from "@/components/icons";
import { UserAvatar } from "@/components/user-avatar";

interface ProfileDetailsProps {
  profile: UserProfileConfig;
}

export default function ProfileDetails({ profile }: ProfileDetailsProps) {
  const memberSinceYear = new Date(profile.user.member_since).getFullYear();

  return (
    <div className="mt-[4.75rem] flex h-full max-h-[34.687rem]  flex-col border-l border-l-gray-700 px-14">
      <header className="flex flex-col items-center after:my-8 after:h-1 after:w-8 after:rounded-full after:bg-gradient-vertical after:content-['']">
        <UserAvatar
          user={{
            name: profile.user.name,
            image: profile.user.image || null,
            id: profile.user.id,
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
            <span className="font-bold leading-short">{profile.readPages}</span>
            <p className="text-sm leading-base text-gray-300">Páginas lidas</p>
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
            <p className="text-sm leading-base text-gray-300">Autores lidos</p>
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
  );
}
