import { auth } from "@/lib/auth";
import Image from "next/image";

export default async function UserAvatar() {
  const session = await auth();

  if (!session?.user) return null;

  return (
    <div>
      {!!session.user.image && (
        <Image
          src={session.user.image}
          alt="User Avatar"
          width={300}
          height={300}
        />
      )}
    </div>
  );
}
