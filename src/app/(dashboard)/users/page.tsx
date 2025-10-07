import { auth } from "@/auth";
import UserList from "@/components/UserList";
import axios from "axios";

export default async function UsersPage() {
  const session = await auth();

  const { data: profile } = await axios.get(
    "https://api.escuelajs.co/api/v1/auth/profile",
    {
      headers: { Authorization: `Bearer ${session?.access_token}` },
    }
  );
  console.log("El rol es", profile.role);

  
  if (profile.role !== "admin") {
    return <p>No tienes permiso</p>;
  }

  const { data: users } = await axios.get(
    "https://api.escuelajs.co/api/v1/users",
    {
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    }
  );

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Lista de usuarios</h2>
      <UserList users={users} />
    </div>
  );
}

// if (!session || session.user.role !== "admin") {
//   console.log("este es el rol", session?.user.role);
//   return (
//     <div className="flex justify-center items-center min-h-screen">
//       <p className="text-red-500 font-semibold">
//         No tienes permiso para ver esta página.
//       </p>
//     </div>
//   );
// }
