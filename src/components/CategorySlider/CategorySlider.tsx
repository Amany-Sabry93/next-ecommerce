
import { Category } from '@/Interfaces/CartInterfaces'

import SwiperCategory from '../Swiper/Swiper'
import getAllCategories from '@/api/category.api'



export default  async function CategorySlider() {
  
  
  const allCategories:Category[] =  await getAllCategories()
  console.log (allCategories)
 
  return  <>
  <main>
    <h2 className='text-3xl mb-2 text-gray-500'> Shop Popular Catogries</h2>
      <SwiperCategory allCategories={allCategories}/>







  </main>

    </>
}
