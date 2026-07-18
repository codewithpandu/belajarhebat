import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import Rupiah from "@/lib/rupiah";
import type { Product } from "@/lib/products";
import Link from "next/link";

export default function Product(product: Product) {
  return (
    <Link href={product.url}>
      <Card className="cursor-pointer shadow-2xl hover:scale-105 transition-all hover:border-2 border-my-prmary ">
        <CardHeader>
          <div className="relative rounded-2xl h-72 w-full overflow-hidden">
            <Image
              src={product.image}
              alt="product"
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="h-24">
          <div>
            <p className="font-bold text-xl text-my-prmary">{product.title}</p>
            <p className="text-lg text-muted-foreground">
              {Rupiah(product.salePrice)}
              <span className="line-through text-red-500 ms-2">
                {Rupiah(product.price)}
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
