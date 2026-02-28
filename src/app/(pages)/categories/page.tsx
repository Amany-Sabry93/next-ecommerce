import getAllCategories from '@/api/category.api'
import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { Category } from '@/Interfaces/CartInterfaces'
import Image from 'next/image'
import Link from 'next/link'

export default async function Categories() {
  const allCategories:Category[] = await getAllCategories() 
  return  <>
  <main>
    <div className="container mx-auto bg-fuchsia-100 rounded-xl">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {allCategories.map((category)=><div key={category._id} className="p-2">
                    <Card className=" overflow-hidden pt-0 ">
                      <Link href={"/categories/" + category._id}>
                        {/* Image */}
                        <div >
                          <Image
                            width={900}
                            height={800}
                            src={category.image}
                            alt={category.name}
                            className="w-full h-75  "
                          />
                        </div>
      
                        {/* product details */}
                        <CardHeader className="mt-3">
                          <CardDescription>{category.name}</CardDescription>
                        </CardHeader>
                        </Link>
                       
                    </Card>
                  </div>)}

  </div>
    </div>
  </main>

  </>
  
}
