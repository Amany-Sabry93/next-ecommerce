import getAllSubcategories from "@/api/sub-categories.api"
import { Card, CardDescription, CardHeader } from "@/components/ui/card"
import { Data } from "@/Interfaces/subcategories"
import Link from "next/link"


export default async function SubCategories() {
    const allSubCategories:Data[] = await getAllSubcategories()
    console.log(allSubCategories)
  return <>
  <main>
    <div className="container mx-auto bg-fuchsia-100 rounded-xl">
         <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {allSubCategories?.map((subcategory)=><div key={subcategory._id} className="p-2 ">
                    <Card className=" overflow-hidden pt-0 text-2xl font-bold text-center  h-full ">
                      <Link href={`/sub-categories/${subcategory._id}`}>
                  
                        <CardHeader >
                          <CardDescription >{subcategory.name}</CardDescription>
                        </CardHeader>
                        </Link>
                       
                    </Card>
                  </div>)}

  </div>





    </div>


  </main>
  
  
  
  </>
}
