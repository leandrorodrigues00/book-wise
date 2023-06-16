import { User } from "@prisma/client";
import { AvatarProps } from "@radix-ui/react-avatar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { Profile } from "@/components/icons";

interface UserAvatarProps extends AvatarProps {
  user: Pick<User, "image" | "name">;
}

export function UserAvatar({ user, ...props }: UserAvatarProps) {
  return (
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
  );
}
