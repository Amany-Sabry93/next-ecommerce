import { getBrandDetails, getRelatedBrand } from '@/api/brand.api'
import AddToCart from '@/components/AddToCart/AddToCart'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Product } from '@/Interfaces/productInterface'
import { Star } from 'lucide-react'
import { Params } from 'next/dist/server/request/params'
import Image from 'next/image'
import Link from 'next/link'


export default async function BrandDetails({params}:{params:Params}) {
    const{brandId}=await params
    const brandDetails  =await getBrandDetails(brandId as string)
    const relatedBrandProducts = await getRelatedBrand(brandId as string)
console.log(relatedBrandProducts);

    
  return <>
  <main>
     <div className="container mx-auto bg-fuchsia-100 rounded-xl">
      
       {/*Brand Bread Crumb List  */}
        <div className="p-5 bg-white">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-lg" href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-lg"  href="/brands">Brands</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-lg font-bold" >Brand Details</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        {/* ============================= */}
        <div className="grid grid-cols-12   ">

             {/* Brand Details */}
            <div className="col-span-12 sm:col-span-4 z-100  lg:col-span-3 sm:sticky top-50 w-full   h-fit flex justify-center  my-10      ">
              <Card className="w-[70%] mx-auto  sm:w-full sm:my-5 sm:mx-5 ">
                {/* Image */}
                <div className="  ">
                  <Image
                    width={1500}
                    height={1400}
                    src={brandDetails.data.image}
                    alt={brandDetails.data.name}
                    className="w-full h-75 "
                  />
                </div>

                {/* product details */}
                <CardHeader className="mt-3">
                  <CardDescription>{brandDetails.data.slug}</CardDescription>
                </CardHeader>
                {/* product rate */}
              </Card>
            </div>
            {/* ====================== */}

            {/* related brands */}
                        <div className=" col-span-12 sm:col-span-8 space-y-10  lg:col-span-9 py-10 me-0">
                        <div >
                             <h2 className="text-center md:text-3xl text-xl  text-gray-500 font-semibold w-[50%] mx-auto bg-white py-5 px-3 rounded-xl  ">Related Brand Products</h2>
                        </div>
                     
                          <div className="grid grid-cols-1 sm:w-[80%] w-[90%] md:[60%]  mx-auto     gap-5">
                          {relatedBrandProducts.data?.map((product:Product)=> <div key={product.id} className="p-0 sm:p-2 ms-0 sm:ms-5">
                          <Card className=" overflow-hidden w-[80%] sm:w-full mx-auto sm:mx-0 pt-0 bg-fuchsia-300  ">
                            <Link href={"/products/" + product.id}>
                              {/* Image */}
                              <div className="-m-1 -mt-1 ">
                                <Image
                                  width={2000}
                                  height={1900}
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
}
