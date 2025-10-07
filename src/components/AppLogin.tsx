// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { cn } from "@/lib/utils";
// import { Mail, Lock } from "lucide-react";
// import axios from "axios";
// import { Input } from "./ui/input";

// export default function LoginForm() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("null");
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await loginUser(email, password);
//       if (response.error) {
//         setError(response.error);
//       } else {  
//         router.push("/");
//       }

//       // Guardar el token en localStorage
//       console.log(response);
//       localStorage.setItem("access_token", response.data.access_token);
//       localStorage.setItem("refresh_token", response.data.refresh_token);

//       // Redirigir o mostrar contenido protegido
//       console.log("Login exitoso");
//     } catch (err) {
//       setError("Email o contraseña incorrectos");
//     }
//   };

//   return (
//     <Card className="w-full max-w-sm mx-auto mt-20 shadow-lg">
//       <CardHeader>
//         <CardTitle className="text-center text-2xl">Iniciar Sesión</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <form onSubmit={handleLogin} className="space-y-4">
//           <div>
//             <Label className="p-2" htmlFor="email">
//               Email :{" "}
//             </Label>
//             <div className="flex items-center rounded-md p-2">
//               <Mail className="h-4 w-4 text-gray-500 mr-2" />
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="usuario@ejemplo.com"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//           </div>
//           <div>
//             <Label className="p-2" htmlFor="password">
//               Password :
//             </Label>
//             <div className="flex items-center rounded-md p-2">
//               <Lock className="h-4 w-4 text-gray-500 mr-2" />
//               <Input
//                 id="password"
//                 type="password"
//                 placeholder="••••••••"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//           </div>
//           {error && <p className="text-sm text-red-500">{error}</p>}
//           <Button type="submit" className="flex justify-center  h-full">
//             Ingresar
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// }
