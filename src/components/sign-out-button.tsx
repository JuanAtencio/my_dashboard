"use client";

// import { Button } from "@/components/ui/button";
// import { logout } from "@/lib/actions/auth";

// export const SignOutButton = () => {
//   return (
//     <Button onClick={() => logout()} variant="outline">
//       Cerrar sesión
//     </Button>
//   );
// };

"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false }); 
    router.push("/login"); 
  };

  return <button onClick={handleLogout}>Cerrar sesión</button>;
}
