"use client";

import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { User as UserIcon, Mail } from "lucide-react";
import { User } from "@/types/user";

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <Link href={`/user/${user.id}`}>
      <Card className="hover:shadow-lg transition">
        <CardHeader className="flex flex-row items-center gap-4">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <CardTitle>{user.name}</CardTitle>
            <p className="text-sm text-muted-foreground">{user.role}</p>
          </div>
        </CardHeader>
        <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
          <Mail size={16} />
          {user.email}
        </CardContent>
      </Card>
    </Link>
  );
}

// "use client";

// import Link from "next/link";
// import Image from "next/image";
// import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
// import { Mail } from "lucide-react";
// import { User } from "@/types/user";

// interface UserCardProps {
//   user: User;
// }

// export default function UserCard({ user }: UserCardProps) {
//   return (
//     <Card className="h-36 w-100 hover:shadow-lg hover:border-primary transition cursor-pointer">
//       <Link href={`/user/${user.id}`} aria-label={`Ver perfil de ${user.name}`}>
//         <CardHeader className="flex flex-row items-center gap-4">
//           <div className="relative w-12 h-12">
//             <img
//               src={user.avatar}
//               alt={user.name}
//               width={48}
//               height={48}   
//               className="rounded-full object-cover"
//             />
//           </div>
//           <div>
//             <CardTitle className="text-base">{user.name}</CardTitle>
//             <p className="text-sm text-muted-foreground">{user.role}</p>
//           </div>
//         </CardHeader>
//         <CardContent className="flex items-center gap-2 text-sm text-muted-foreground">
//           <Mail size={16} />
//           <span className="truncate p-4">{user.email}</span>
//         </CardContent>
//       </Link>
//     </Card>
//   );
// }
