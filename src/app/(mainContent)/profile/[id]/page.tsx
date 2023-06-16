import { Form } from "@/components/ui/Form";
import {
  Book,
  BookmarkSimple,
  Books,
  MagnifyingGlass,
  Profile,
  UserList,
} from "@/components/icons";
import { MyBookRatings } from "@/components/MyBookRatings";
import { UserAvatar } from "@/components/UserAvatar";

interface ProfilePageProps {
  params: {
    id: string;
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  return (
    <section className="mx-auto mt-[42px] flex w-full max-w-[996px] gap-16 overflow-hidden">
      <div className="no-scrollbar max-h-[calc(100vh-42px)] w-full max-w-[608px]  overflow-y-auto">
        <div>
          <h1 className="flex gap-3 text-2xl font-bold leading-short">
            <Profile className="h-[32px] w-[32px] fill-current text-green-100  " />
            Perfil
          </h1>

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
          <MyBookRatings />
          <MyBookRatings />
          <MyBookRatings />
          <MyBookRatings />
        </div>
      </div>

      <div className="mt-[4.75rem] flex h-full max-h-[34.687rem]  flex-col border-l border-l-gray-700 px-14">
        <header className="flex flex-col items-center after:my-8 after:h-1 after:w-8 after:rounded-full after:bg-gradient-vertical after:content-['']">
          <UserAvatar
            user={{
              name: "teste",
              image:
                "https://lh3.googleusercontent.com/a/AAcHTteJvM1p7voT_ib-5mn5MBXjuvEC9uZ3ttVJR4q6Qw=s96-c" ||
                null,
            }}
            className="h-[72px] w-[72px] p-[2px] "
          />
          <p className="mt-5 text-xl  font-bold">Cristofer Rosser</p>
          <span className="text-sm leading-base text-gray-400">
            membro desde 2019
          </span>
        </header>

        <div className="flex w-full flex-col gap-10">
          <div className="flex gap-5">
            <Book className="h-8 w-8 fill-current text-green-100" />
            <div>
              <span className="font-bold leading-short text-gray-200">
                3853
              </span>
              <p className="text-sm leading-base text-gray-300">
                Páginas lidas
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <Books className="h-8 w-8 fill-current text-green-100" />
            <div>
              <span className="font-bold leading-short text-gray-200">10</span>
              <p className="text-sm leading-base text-gray-300">
                Livros avaliados
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <UserList className="h-8 w-8 fill-current text-green-100" />
            <div>
              <span className="font-bold leading-short text-gray-200">8</span>
              <p className="text-sm leading-base text-gray-300">
                Autores lidos
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <BookmarkSimple className="h-8 w-8 fill-current text-green-100" />
            <div>
              <span className="font-bold leading-short text-gray-200">
                Computação
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
