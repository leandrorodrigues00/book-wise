import { MyBookRatings } from "@/components/pages-components/Profile/MyBookRatings";
import { Avatar } from "@/components/shared-components/Avatar";
import { Form } from "@/components/shared-components/Form";
import {
  MagnifyingGlass,
  Profile,
  Book,
  Books,
  UserList,
  BookmarkSimple,
} from "@/components/shared-components/icons";

interface ProfilePageProps {
  params: {
    id: string;
  };
}

export default function ProfilePage({ params }: ProfilePageProps) {
  return (
    <section className="flex gap-16 mt-[42px] max-w-[996px] w-full mx-auto overflow-hidden">
      <div className="max-w-[608px] w-full max-h-[calc(100vh-42px)] overflow-y-auto  no-scrollbar">
        <div>
          <h1 className="flex gap-3 font-bold text-2xl leading-short">
            <Profile className="fill-current text-green-100 w-[32px] h-[32px]  " />
            Perfil
          </h1>

          <Form.Input
            name="profileBook"
            placeholder="Buscar livro avaliado"
            icon={
              <MagnifyingGlass className="w-5 h-5 text-gray-500 fill-current group-focus-within:text-green-200" />
            }
            className="mt-10 flex group w-full bg-gray-800 py-3 px-5 border border-gray-500 rounded text-sm leading-base focus-within:border-green-200"
          />
        </div>

        <div className="mt-8">
          <MyBookRatings />
          <MyBookRatings />
          <MyBookRatings />
          <MyBookRatings />
        </div>
      </div>

      <div className="flex flex-col mt-[4.75rem] px-14  border-l border-l-gray-700 max-h-[34.687rem] h-full">
        <header className="flex flex-col items-center after:content-[''] after:w-8 after:h-1 after:bg-gradient-vertical after:rounded-full after:my-8">
          <Avatar
            borderWidth={2}
            size="lg"
            src="https://s3-alpha-sig.figma.com/img/7481/84a6/ca5e70b2945cbb4532d7b4e20d745736?Expires=1685318400&Signature=Eqtgj2K5Fb6~LN--F8rElkZo3O85169hHp~3mX9tO72h22UgoKZR7ndb1zq~0HaFuA7knX7ESaQ2ylvLF~6Kw09VO6lw8RfyVtgU4i2tu18TahqJfh-vtyHmcZHgNIlNEHVDZS~nKtaabUk~dyKM0z20UqSZS4RRh8HtPM0QS3LkRw2u98kGE2xQL01E6X9d2NXopEbjQUSf0f1c3U~VjcTG8hytONcqh4xozHFqLDrIRL-VHS-JtI1cBAs-hPwQtK1xzkIjKblgcXIoxMMYweBOsaIlLGAK6Qj0Sfex6UAZ-0NWFzvEBhmnw6Lnlg7qXYUi3Z9NwJqPRwpykV~Yhg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt={"teste"}
          />
          <p className="text-xl font-bold  mt-5">Cristofer Rosser</p>
          <span className="text-gray-400 text-sm leading-base">
            membro desde 2019
          </span>
        </header>

        <div className="flex flex-col gap-10 w-full">
          <div className="flex gap-5">
            <Book className="w-8 h-8 text-green-100 fill-current" />
            <div>
              <span className="text-gray-200 font-bold leading-short">
                3853
              </span>
              <p className="text-gray-300 text-sm leading-base">
                Páginas lidas
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <Books className="w-8 h-8 text-green-100 fill-current" />
            <div>
              <span className="text-gray-200 font-bold leading-short">10</span>
              <p className="text-gray-300 text-sm leading-base">
                Livros avaliados
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <UserList className="w-8 h-8 text-green-100 fill-current" />
            <div>
              <span className="text-gray-200 font-bold leading-short">8</span>
              <p className="text-gray-300 text-sm leading-base">
                Autores lidos
              </p>
            </div>
          </div>

          <div className="flex gap-5">
            <BookmarkSimple className="w-8 h-8 text-green-100 fill-current" />
            <div>
              <span className="text-gray-200 font-bold leading-short">
                Computação
              </span>
              <p className="text-gray-300 text-sm leading-base">
                Categoria mais lida
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
