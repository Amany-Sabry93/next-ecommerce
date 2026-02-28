import getAllBrands from '@/api/brand.api'
import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { Brand } from '@/Interfaces/CartInterfaces'
import Image from 'next/image'
import Link from 'next/link'

export default async function Brands() {
const allBrands:Brand[] =  await getAllBrands()
  return<>
  <main>
    <div className="container mx-auto bg-fuchsia-100 rounded-xl">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
         {allBrands.map((brand)=><div key={brand._id} className="p-2">
                    <Card className=" overflow-hidden pt-0 ">
                      <Link href={`/brands/${brand._id}`}>
                      
                        {/* Image */}
                        <div >
                          <Image
                            width={900}
                            height={800}
                            src={brand.image}
                            alt={brand.name}
                            className="w-full h-75  "
                          />
                        </div>
      
                        {/* product details */}
                        <CardHeader className="mt-3">
                          <CardDescription className='text-xl font-medium text-gray-400'>{brand.name}</CardDescription>
                        </CardHeader>
                        
                        </Link>
                    </Card>
                  </div>)}





      </div>



    </div>

  </main>

 


  </>
  
}
