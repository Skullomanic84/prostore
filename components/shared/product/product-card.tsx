import {Card, CardContent, CardHeader} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";


const ProductCard = ({product} : {product: any}) => {
    return (
        <Card className={"w-full max-w-sm"}>
            <CardHeader className={"p-0 items-center"}>
                <Link href={`/product/${product.slug}`}>
                    <Image
                        src={product.images[0]}
                        alt={product.name}
                        height={200}
                        width={200}
                        priority={true}
                    />
                </Link>
            </CardHeader>
            <CardContent>
                <div className="text-[9px] text-stone-300">
                    {product.brand}
                </div>
                <Link href={`/product/${product.slug}`}>
                    <h2 className="text-xs font-medium mt-2">{product.name}</h2>
                </Link>

                <div className={"flex-between items-center mt-2"}>
                    <p className={"font-light text-[9px]"}>{product.rating} Rating</p>
                    {product.stock > 0 ? (
                        <p className={"font-bold"}>
                            R{product.price}
                        </p>
                        ) : (
                        <p className={"text-destructive font-light text-[9px]"}>Out Of Stock</p>
                    )}
                </div>
            </CardContent>
        </Card>
    )
}
export default ProductCard