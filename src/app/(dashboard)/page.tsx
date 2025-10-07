"use server";

import AppAreaChart from "@/components/AppAreaChart";
import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";
import TodoList from "@/components/TodoList";
import { auth } from "@/auth";
import axios from "axios";
import { redirect } from "next/navigation";


export default async function Homepage() {
  const session = await auth();
  console.log("Session data:", session);

  if (!session) {
      redirect("/login");  
  }
  try {
    // Obtener perfil del usuario
    const { data: profile } = await axios.get(
      "https://api.escuelajs.co/api/v1/auth/profile",
      {
        headers: {
          Authorization: `Bearer ${session.access_token}`,
        },
      }
    );
    // const { data: products } = await axios.get(
    //   "https://api.escuelajs.co/api/v1/products?limit=5&offset=0"
    // );
    return (
      <div>
        <div className="p-6">
          <h1 className="text-2xl">Bienvenido {session.user?.name}</h1>
          <p>Email: {session.user?.email}</p>
          <p>
            Rol: <span className="font-bold">{profile.role}</span>
          </p>
          {/* <div className="bg-primary-foreground p-4 rounded-lg">
            {" "}
            <h2 className="text-xl font-semibold mb-2">Productos</h2>
            <ul className="space-y-2">
              {products.map((p: any) => (
                <li
                  key={p.id}
                  className="border p-4 rounded shadow-sm flex items-center gap-4"
                >
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{p.title}</p>
                    <p className="text-gray-500">${p.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
          <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
            <AppBarChart />
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Latest Transactions" />
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <AppPieChart />
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <TodoList />
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
            <AppAreaChart />
          </div>
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Popular Content" />
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return <div className="p-6 text-red-500">Error al cargar datos</div>;
  }
}
