import { AuthButtons } from "@/components/AuthButtons";
import { LoginDialog } from "@/components/LoginDialog";

export default async function LoginModal() {
  return (
    <LoginDialog>
      <p className="mb-10 text-center font-bold leading-short">
        Faça login para deixar sua avaliação
      </p>
      <div className="space-y-4">
        <AuthButtons />
      </div>
    </LoginDialog>
  );
}
