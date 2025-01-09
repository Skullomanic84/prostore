"use client";
import {cn} from "@/lib/utils";
import {useState} from "react";
import Image from "next/image";

const ProductImages = ({images } : { images: string[] }) => {

    const [currentImage, setCurrentImage] = useState(0);
    return (
        <div className={"space-y-4"}>
            <Image
                src={images[currentImage]}
                alt="product image"
                width={1000}
                height={1000}
                className="min-h-[300px] object-cover object-center"
            />
            <div className="flex" >
                {images.map((image, index) => (
                    <div key={image} className={cn("border mr-2 cursor-pointer hover:border-yellow-300", currentImage === index && "border-yellow-500")} onClick={() => setCurrentImage(index)}>
                        <Image
                            src={image}
                            alt="product image"
                            width={100}
                            height={100}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
export default ProductImages
