import SignIn from "@/components/sign-in";
import { SignOut } from "@/components/sign-out";
import UserAvatar from "@/components/user-avatar";

export default async function Page() {
  return (
    <>
      <SignIn />
      <SignOut />
      <UserAvatar />
    </>
  );
}
