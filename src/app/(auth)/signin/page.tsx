import { SignInButtons } from "@/components/pages-components/signin/SignInButtons";
import { getCurrentUser } from "@/lib/session";

export default async function Signin() {
  const teste = await getCurrentUser();

  // console.log(teste);





  
  return (
    <div className="flex min-h-screen gap-3 p-5">
      <section className="flex w-full max-w-[598px] items-center justify-center rounded-xl bg-login-page p-3">
        <img src="/logo.svg" alt="BookWise logo" />
      </section>

      <section className="flex min-w-[400px] flex-1 items-center justify-center">
        <div className="w-full max-w-[372px]">
          <div className="mb-10 flex flex-col gap-[2px]">
            <p className="text-2xl font-bold leading-short text-gray-100">
              Boas vindas!
            </p>
            <p className="leading-base text-gray-200">
              Faça seu login ou acesse como visitante.
            </p>
          </div>

          <SignInButtons />
        </div>
      </section>
    </div>
  );
}
