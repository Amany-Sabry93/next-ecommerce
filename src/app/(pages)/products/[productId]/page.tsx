import { getProductDetails, getRelatedProducts } from "@/api/product.api";
import AddToCart from "@/components/AddToCart/AddToCart";
import RelatedProducts from "@/components/RelatedProducts/RelatedProducts";
import Slider from "@/components/Slider/Slider";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Product } from "@/Interfaces/productInterface";
import {  Star } from "lucide-react";
import { Params } from "next/dist/server/request/params";

export default async function ProductDetails({ params }: { params: Params }) {
  const { productId } = await params;
  const productDetails:Product =await getProductDetails(productId as string)
  const relatedProducts:Product[] = await getRelatedProducts(productDetails.category._id as string)
  console.log(relatedProducts)

  return (
    <>
      <main >
        <div className="container mx-auto ">
        {/*product Bread Crumb List  */}
        <div className="p-5">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink className="text-lg" href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-lg"  href="/products">Products</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-lg font-bold" >Product Details</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

       {/* product Details */}
        <Card className="grid grid-cols-1 md:grid-cols-3 items-center mx-5 sm:mx-auto bg-fuchsia-100  my-2">
          <div className="col-span-1  -my-6 -me-6 ">
            {/* Product Images Slider */}
            <Slider  images={productDetails.images} title={productDetails.title} />
          </div>
          <div className="col-span-2 p-4 space-y-8">
            {/* product details */}
            <CardHeader className="mt-3">
              <CardDescription>{productDetails.brand.name}</CardDescription>
              <CardTitle>{productDetails.title}</CardTitle>
              <CardAction>{productDetails.category.name}</CardAction>
              <CardDescription>{productDetails.description}</CardDescription>
            </CardHeader>
            {/* product rate */}
            <CardContent>
              <div className="flex gap-2">
                <div className="flex ">
                  {[0, 1, 2, 3, 4].map((star, index) => {
                    const filledStar =
                      star < Math.round(productDetails.ratingsAverage);
                    return  <Star key={index}
                          className={
                            filledStar
                              ? "text-fuchsia-700 fill-fuchsia-700"
                              : "text-gray-500 fill-gray-500"
                          }
                        />
                    
                    
                  })}
                </div>

                <p>{productDetails.ratingsAverage}</p>
              </div>
              <p className="mt-2">
                Price: <strong>{productDetails.price} </strong>EGP{" "}
              </p>
            </CardContent>

            {/* Add To Cart button */}
           <AddToCart productId={productDetails.id}/>
          </div>
        </Card>
        {/* Related Products */}
        <h2 className="text-gray-600 text-3xl font-semibold">Related Products</h2>
       <RelatedProducts relatedProducts={relatedProducts} />

        </div>
      </main>
    </>
  );
}
