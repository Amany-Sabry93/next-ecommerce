import React, { Fragment } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/Interfaces/productInterface";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import getAllProducts from "@/api/product.api";
import AddToCart from "@/components/AddToCart/AddToCart";
export default async function HomeProducts() {
    const allProducts:Product[] = await getAllProducts() 
  return <>
  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
            {allProducts.map((product)=> <div key={product.id} className="p-2">
              <Card className=" overflow-hidden pt-0 bg-fuchsia-200">
                <Link href={"/products/" + product.id}>
                  {/* Image */}
                  <div className="-m-1 -mt-1 ">
                    <Image
                      width={200}
                      height={150}
                      src={product.imageCover}
                      alt={product.title}
                      className="block w-full relative z-20 object-cover "
                    />
                  </div>

                  {/* product details */}
                  <CardHeader className="mt-3">
                    <CardDescription>{product.brand.name}</CardDescription>
                    <CardTitle className="line-clamp-1">
                      {product.title}
                    </CardTitle>
                    <CardDescription>{product.category.name}</CardDescription>
                  </CardHeader>
                  {/* product rate */}
                  <CardContent>
                    <div className="flex gap-2">
                      <div className="flex ">
                        {[0, 1, 2, 3, 4].map((star,index) =>  {
                          const filledStar =
                            star < Math.round(product.ratingsAverage);
                          return (
                            <Fragment key={index}>
                              <Star
                                className={
                                  filledStar
                                    ? "text-fuchsia-700 fill-fuchsia-700"
                                    : "text-gray-500 fill-gray-500"
                                }
                              />
                            </Fragment>
                          );
                        })}
                      </div>

                      <p>{product.ratingsAverage}</p>
                    </div>
                    <p className="mt-2">
                      Price: <strong>{product.price} </strong>EGP{" "}
                    </p>
                  </CardContent>
                </Link>
                {/* Add To Cart Button */}
               <AddToCart  productId={product.id}/>
              </Card>
            </div>)}
          </div>
  
  </>
}
