import Image from "next/image";
import { Card, CardDescription, CardHeader } from "../ui/card";


export default  async function SubCategoriesProducts({categoryId}:{categoryId:string}) {
const response = await fetch(`https://ecommerce.routemisr.com/api/v1/categories/${categoryId}`)
const {data} = await response.json()
console.log(data);


  return <>
  <main>
    <div className="container mx-auto">
           <Card className="w-[70%] mx-auto   sm:w-full sm:my-5 sm:mx-5  ">
                {/* Image */}
                <div className="  ">
                  <Image
                    width={500}
                    height={400}
                    src={data.image}
                    alt={data.name}
                    className="w-full h-75 "
                  />
                </div>

                {/* product details */}
                <CardHeader className="mt-3">
                  <CardDescription>{data.slug}</CardDescription>
                </CardHeader>
                {/* product rate */}
              </Card>
    </div>


  </main>
  
  
  </>
}
