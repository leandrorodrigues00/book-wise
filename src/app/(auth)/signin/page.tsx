import {
  Github,
  Google,
  RocketLauch,
} from "@/components/shared-components/icons";

export default function Signin() {
  return (
    <div className="flex min-h-screen p-5 gap-3">
      <section className="bg-login-page max-w-[598px] w-full flex justify-center items-center rounded-xl p-3">
        <img src="/logo.svg" alt="BookWise logo" />
      </section>

      <section className="flex flex-1 items-center justify-center min-w-[400px]">
        <div className="max-w-[372px] w-full">
          <div className="flex flex-col gap-[2px] mb-10">
            <p className="font-bold text-2xl text-gray-100 leading-short">
              Boas vindas!
            </p>
            <p className="text-gray-200 leading-base">
              Faça seu login ou acesse como visitante.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <button className="flex bg-gray-600 rounded-lg px-6 py-5 w-full items-center gap-5 hover:bg-gray-500 duration-300">
              <Google className="w-8 h-8" />
              <span className="font-bold text-gray-200 text-lg leading-base">
                Entrar com Google
              </span>
            </button>
            <button className="flex bg-gray-600 rounded-lg px-6 py-5 w-full items-center gap-5 hover:bg-gray-500 duration-300">
              <Github className="w-8 h-8 text-white fill-current" />
              <span className="font-bold text-gray-200 text-lg leading-base">
                Entrar com GitHub
              </span>
            </button>
            <button className="flex bg-gray-600 rounded-lg px-6 py-5 w-full items-center gap-5 hover:bg-gray-500 duration-300">
              <RocketLauch className="w-8 h-8 text-purple-100 fill-current" />
              <span className="font-bold text-gray-200 text-lg leading-base">
                Acessar como visitante
              </span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
