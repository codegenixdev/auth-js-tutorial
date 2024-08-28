import { signIn } from "@/lib/auth";

export default function SignIn() {
  return (
    <>
      <form
        action={async () => {
          "use server";
          await signIn("github");
        }}
      >
        <button type="submit">Signin with github</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn("google");
        }}
      >
        <button type="submit">Signin with google</button>
      </form>
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <button type="submit">Sign In General</button>
      </form>
    </>
  );
}
