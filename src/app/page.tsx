
import CategorySlider from "@/components/CategorySlider/CategorySlider";
import HomeProducts from "@/components/HomeProducts/HomeProducts";
import HomeSlider from "@/components/HomeSlider/HomeSlider";


export default  function Home() {
 
  return (
    <>
      <main>
        <div className="container mx-auto space-y-8   ">
          <HomeSlider />
          <CategorySlider />
          <HomeProducts/>
          
          
        </div>
      </main>
    </>
  );
}
