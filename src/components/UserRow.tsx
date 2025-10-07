"use client";

import { MoreHorizontal, Edit, Trash2, Eye } from "lucide-react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface UserRowProps {
  id: number;
  name: string;
  email: string;
  role: string;
  avatar: string;
  createdAt: string;
}

export function UserRow({ id, name, email, role, avatar, createdAt }: UserRowProps) {
  return (
    <tr className="border-b hover:bg-muted/50">
      <td className="p-2">
        <Avatar>
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
      </td>
      <td className="p-2">{name}</td>
      <td className="p-2">{email}</td>
      <td className="p-2 capitalize">{role}</td>
      <td className="p-2 text-sm text-muted-foreground">{new Date(createdAt).toLocaleDateString()}</td>
      <td className="p-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="p-1 hover:bg-muted rounded-full">
              <MoreHorizontal size={18} />
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => alert(`Ver usuario ${id}`)}>
              <Eye className="mr-2 h-4 w-4" /> Ver
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert(`Editar usuario ${id}`)}>
              <Edit className="mr-2 h-4 w-4" /> Editar
            </DropdownMenuItem>
            <DropdownMenuItem className="text-red-500" onClick={() => alert(`Eliminar usuario ${id}`)}>
              <Trash2 className="mr-2 h-4 w-4" /> Eliminar
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </tr>
  );
}
