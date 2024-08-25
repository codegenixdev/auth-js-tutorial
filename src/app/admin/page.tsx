import { auth } from "@/lib/auth";

export default async function Page() {
  const session = await auth();

  if (!session) return <div>not authenticated</div>;

  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
