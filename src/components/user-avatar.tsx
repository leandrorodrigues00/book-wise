import Link from "next/link";
import { User } from "@prisma/client";
import { AvatarProps } from "@radix-ui/react-avatar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Profile } from "@/components/icons";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "name" | "id">;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
    <Link href={`${process.env.NEXT_PUBLIC_URL}/profile/${user.id}`}>
      <Avatar {...props}>
        {user.image ? (
          <AvatarImage alt={`Profile photo of ${user.name}`} src={user.image} />
        ) : (
          <AvatarFallback>
            <span className="sr-only">{user.name}</span>
            <Profile className="h-6 w-6 fill-current" />
          </AvatarFallback>
        )}
      </Avatar>
    </Link>
  );
}
