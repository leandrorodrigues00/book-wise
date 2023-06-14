import { AuthButtons } from "@/components/AuthButtons";

export default function LoginPage() {
  return (
    <div className="mx-auto my-10  max-h-[337px] w-full max-w-[516px] rounded-xl bg-gray-700 px-[72px]  py-14 focus:outline-none ">
      <p className="mb-10 text-center font-bold leading-short">
        Faça login para deixar sua avaliação
      </p>
      <div className="space-y-4">
        <AuthButtons />
      </div>
    </div>
  );
}
