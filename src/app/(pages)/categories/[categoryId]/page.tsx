import { getCategoryDetails, getRelatedCategory } from "@/api/category.api";
import AddToCart from "@/components/AddToCart/AddToCart";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Category }from "@/Interfaces/CartInterfaces";
import {Product} from '@/Interfaces/productInterface'
import { Star } from "lucide-react";
import { Params } from "next/dist/server/request/params";
import Image from "next/image";
import Link from "next/link";

export default async function CategoryDetails({ params }: { params: Params }) {
  const { categoryId } = await params;
  const categoryDetails: Category = await getCategoryDetails(categoryId as string);
  const relatedCategoryProducts:Product[]= await getRelatedCategory(categoryId as string)
  

  return (
    <>
      <main>
        <div className="container mx-auto bg-fuchsia-100 rounded-xl">

           {/*Category Bread Crumb List  */}
        <div className="p-5 bg-white">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-lg" href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-lg"  href="/categories">Categories</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-lg font-bold" >Category Details</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {/* ================================== */}
          <div className="grid grid-cols-12   ">
            {/* Category Details */}
            <div className="col-span-12 sm:col-span-4 z-100  lg:col-span-3 sm:sticky top-50 w-full   h-fit flex justify-center      mb-10">
              <Card className="w-[70%] mx-auto   sm:w-full sm:my-5 sm:mx-5  ">
                {/* Image */}
                <div className="  ">
                  <Image
                    width={500}
                    height={400}
                    src={categoryDetails.image}
                    alt={categoryDetails.name}
                    className="w-full h-75 "
                  />
                </div>

                {/* product details */}
                <CardHeader className="mt-3">
                  <CardDescription>{categoryDetails.slug}</CardDescription>
                </CardHeader>
                {/* product rate */}
              </Card>
            </div>
            {/* related categories */}
            <div className=" col-span-12 sm:col-span-8  lg:col-span-9 me-0">
              <h2 className="text-center text-3xl text-gray-500 font-semibold mb-8">Related Category Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {relatedCategoryProducts?.map((product)=> <div key={product.id} className="p-0 sm:p-2 ms-0 sm:ms-5">
              <Card className=" overflow-hidden w-[90%] sm:w-full mx-auto sm:mx-0 pt-0 bg-fuchsia-300 h-full ">
                <Link href={"/products/" + product.id}>
                  {/* Image */}
                  <div className="-m-1 -mt-1 ">
                    <Image
                      width={1000}
                      height={900}
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
                        {[0, 1, 2, 3, 4].map((star) => {
                          const filledStar =
                            star < Math.round(product.ratingsAverage);
                          return (
                            <>
                              <Star
                                className={
                                  filledStar
                                    ? "text-fuchsia-700 fill-fuchsia-700"
                                    : "text-gray-500 fill-gray-500"
                                }
                              />
                            </>
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


            </div>
          </div>
        </div>
      </main>
    </>
  );
}
