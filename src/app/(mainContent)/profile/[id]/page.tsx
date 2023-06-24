import Link from "next/link";

import { getProfileDetails } from "@/lib/prisma";
import { getCurrentUser } from "@/lib/session";
import { ChevronLeft, Profile } from "@/components/icons";
import ProfileDetails from "@/components/profile-details";
import { ProfileRatings } from "@/components/profile-ratings";

interface ProfilePageProps {
  params: {
    id: string;
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const profile = await getProfileDetails(params.id);
  if (!profile) throw new Error("This profile was not found");

  const user = await getCurrentUser();
  const ownProfile = user?.id == profile.user.id;

  return (
    <section className="mx-auto mt-[42px] flex w-full max-w-[996px] flex-col items-start gap-16 overflow-hidden sm:flex-row sm:items-center">
      <div className="no-scrollbar max-h-[calc(100vh-42px)] w-full max-w-[608px]  overflow-y-auto">
        <div>
          {ownProfile ? (
            <h1 className="flex gap-3 text-2xl font-bold leading-short">
              <Profile className="h-[32px] w-[32px] fill-current text-green-100  " />
              Profile
            </h1>
          ) : (
            <Link
              className="flex w-fit items-center justify-center space-x-3 rounded-md px-2 py-1 hover:bg-gray-700"
              href={"/explore"}
            >
              <ChevronLeft className="h-6 w-6 fill-current" />
              <span className="font-bold leading-base">Return</span>
            </Link>
          )}
        </div>

        <ProfileRatings profile={profile} />
      </div>

      <ProfileDetails profile={profile} />
    </section>
  );
}
