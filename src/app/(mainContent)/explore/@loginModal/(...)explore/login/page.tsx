import { AuthButtons } from "@/components/auth-buttons";
import { LoginDialog } from "@/components/login-dialog";

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
