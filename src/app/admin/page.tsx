import { auth } from "@/lib/auth";

export default async function Page() {
  const session = await auth();

  if (!session) return <div>not authenticated</div>;

  return (
    <div>
      {session.user?.name}
      {session.user?.email}
      {session.user?.image}
      {session.user?.givenName}
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
