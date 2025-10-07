import { auth } from "@/auth";

interface UserDetailPageProps {
  params: {
    id: string;
  };
}

export default async function UserDetail({ params }: UserDetailPageProps) {
  const session = await auth();
  if (!session || session.user.role === "admin") {
    return <p>No tienes permiso para ver esta página.</p>;
  }

  const res = await fetch(
    `https://api.escuelajs.co/api/v1/users/${params.id}`,
    {
      headers: {
        Authorization: `Bearer ${session.access_token}`,
      },
      cache: "no-store",
    }
  );

  const user = await res.json();

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{session.user.name}</h1>
      <img
        src={session.user.avatar}
        alt={session.user.name}
        className="w-20 h-20 rounded-full"
      />
      <p>Email: {session.user.email}</p>
      <p>Rol: {session.user.role}</p>
    </div>
  );
}
