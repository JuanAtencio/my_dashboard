import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";


export default async function product() {
  // const session = await auth();

  // console.log("En que sesion estamos:", session);

  const { data: products } = await axios.get(
    "https://api.escuelajs.co/api/v1/products?"
  );

  return (
    <div className="bg-primary-foreground p-6 rounded-lg">
      {" "}
      <h2 className="text-xl font-bold mb-6">Listado de Productos</h2>
      {/* <ul className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 space-y-2 cursor-pointer">
        {products.map((p: any) => (
          <li
            key={p.id}
            className="border p-4 rounded shadow-sm flex items-center gap-4"
          >
            <img
              src={p.images[0]}
              alt={p.title}
              className="w-20 h-20 object-cover rounded"
            />
            <div>
              <p className="font-medium">{p.title}</p>
              <p className="text-gray-500">${p.price}</p>
            </div>
          </li>
        ))}
      </ul> */}
      <div
        className="
          grid gap-6
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          xl:grid-cols-5
        "
      >
        {products.map((product: any) => (
          <Card
            key={product.id}
            className="relative rounded-2xl shadow-md flex flex-col transition hover:shadow-lg hover:scale-[1.02]"
          >
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              <div className="w-full aspect-[4/3] relative mb-4">
                <img
                  src={product.images[0]}
                  alt={product.title}
                  className="object-cover rounded-md"
                />
                <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  Oferta
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mt-auto">
                Precio: ${product.price}
              </p>
            </CardContent>
            <CardFooter className="justify-end">
              <Button className="w-32 cursor-pointer">
                Agregar al carrito
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
