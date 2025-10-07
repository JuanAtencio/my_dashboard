import { cookies } from "next/headers";

export async function POST() {
    const cookieStore = await cookies();
    // Eliminar la cookie de sesión
    cookieStore.delete("next-auth.session-token");
    cookieStore.delete("next-auth.csrf-token");
    
    // Redirigir al usuario a la página de inicio de sesión
    return Response.redirect(new URL("/login", "http://localhost:3000"));
}
