import SignIn from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import UserAvatar from "@/components/user-avatar";
import { auth } from "@/lib/auth";

export default async function Page() {
  const session = await auth();
  return (
    <>
      <SignIn />
      <SignOut />
      <UserAvatar />
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
