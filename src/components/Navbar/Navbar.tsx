'use client'
import Link from "next/link";
import  { useContext } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../ui/navigation-menu";
import {
  Heart,
  HeartIcon,
  Moon,
  ShoppingCartIcon,
  SquareMenuIcon,
  Sun,
  User2Icon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { cartContext } from "@/context/cart.context";
import { useTheme } from "next-themes";

export default function Navbar() {
const router =useRouter()
  const {data} = useSession()
   const context =useContext(cartContext)
    const { theme, setTheme } = useTheme()
  async function handleLogout(){
    await signOut()
    router.push('/login')

  }
  
  
  

  return (
    <>
    <main className="">
      
      <nav className="bg-fuchsia-200 shadow py-4 dark:bg-pink-950  ">
        <div className="  font-semibold  flex  items-center pl-2 mx-3  justify-between sm:space-x-5">
          {/* Logo */}
          <div >
              <div className="nav-logo flex items-center  justify-center  ">
            {/* Logo ICON */}
            <Avatar className="rounded-lg ">
              <AvatarFallback className="bg-gray-600 text-white rounded-lg font-bold">
                T
              </AvatarFallback>
            </Avatar>

            {/* Logo Name */}
            <h2 className="text-2xl text-gray-500 dark:text-gray-100 ">
              <Link href={"/"}>TrendyBuy</Link>
            </h2>
          </div>
          </div>
        

          {/* Pages */}
          <div className="py-2 md:py-0 order-first sm:order-0 md:px-3   ">
            <NavigationMenu className="hidden  sm:flex">
              <NavigationMenuList>
                {/* Products Link  */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="text-gray-500 dark:text-gray-100 text-md sm:text-2xl ">
                    <Link
                      href="/products"
                      className="focus:bg-fuchsia-300 focus:text-white hover:bg-fuchsia-300 hover:text-white"
                    >
                      Products
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* ================ */}

                {/* Brands Link  */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="text-gray-500 dark:text-gray-100 text-md md:text-2xl">
                    <Link
                      href="/brands"
                      className="focus:bg-fuchsia-300 focus:text-white hover:bg-fuchsia-300 hover:text-white"
                    >
                      Brands
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* ===================== */}

                {/* Categories Link  */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="text-gray-500 dark:text-gray-100 text-md md:text-2xl">
                    <Link
                      href="/categories"
                      className="focus:bg-fuchsia-200 focus:text-white hover:bg-fuchsia-300 hover:text-white"
                    >
                      Categories
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* ================= */}

                 {/* SubCategories Link  */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="text-gray-500 dark:text-gray-100 text-md md:text-2xl">
                    <Link
                      href="/sub-categories"
                      className="focus:bg-fuchsia-300 focus:text-white hover:bg-fuchsia-300 hover:text-white"
                    >
                      SubCategories

                      
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* ====================== */}


              </NavigationMenuList>
            </NavigationMenu>
           

            {/* Pages icon in small screens */}
            <div className="block sm:hidden   ">
              <DropdownMenu >
                <DropdownMenuTrigger asChild className="">
                  <SquareMenuIcon className="text-gray-500"  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>My Pages</DropdownMenuLabel>
                        {/* Products Link */}
                    <Link href={"/products"}>
                      <DropdownMenuItem>Products</DropdownMenuItem>
                    </Link>
                        {/* Brands Link */}
                    <Link href={"/brands"}>
                      <DropdownMenuItem>Brands</DropdownMenuItem>
                    </Link>
                        {/* Categories Link */}
                    <Link href={"/categories"}>
                      <DropdownMenuItem>Categories</DropdownMenuItem>
                    </Link>
                    {/* SubCategories Link */}
                    <Link href={"/sub-categories"}>
                      <DropdownMenuItem>SubCategories</DropdownMenuItem>
                    </Link>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          {/* Icons */}
          <div >
            <NavigationMenu >
              <NavigationMenuList  >
                <div className=" flex flex-row items-center">

               {/* dark mode  icon */}
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className="hover:bg-transparent block dark:hidden">
                     <Moon onClick={()=>{setTheme('dark')}} className="  size-10 text-gray-500 dark:text-gray-100" />
                  </NavigationMenuLink>
                </NavigationMenuItem>
                    {/* =============== */}
                   <NavigationMenuItem>
                  <NavigationMenuLink asChild className="hover:bg-transparent hidden dark:block">
                     <Sun onClick={()=>{setTheme('light')}} className="size-10 text-gray-500 dark:text-gray-100" />
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* =================== */}
                 <NavigationMenuItem>
                  <NavigationMenuLink asChild className="hover:bg-transparent  hover:fill-fuchsia-500 ">
                     <Link href="/wishlist"className=" focus:text-white  hover:text-white mr-3 " >
                     <Heart className="size-6 text-gray-500"/>
                     </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {/* =================== */}
                

              </div>
                {/* User Icon */}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild >
                    <User2Icon className=" text-gray-500 dark:text-gray-100" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuGroup>
                      <DropdownMenuLabel className=" text-gray-500 ">My Account</DropdownMenuLabel>
                      <Link href={"/profile"}>
                        <DropdownMenuItem  className="text-gray-500">Profile</DropdownMenuItem>
                      </Link>
                     
                      {data?
                      <>
                       <Link href={"/allorders"}>
                        <DropdownMenuItem className="text-gray-500">MyOrders</DropdownMenuItem>
                      </Link>
                      <Link onClick={handleLogout}  href={""}>
                        <DropdownMenuItem className="text-gray-500">Logout</DropdownMenuItem>
                      </Link>
                      </>

                      :
                      <>
                        <Link href={"/login"}>
                        <DropdownMenuItem  className="text-gray-500">Login</DropdownMenuItem>
                      </Link>
                      <Link href={"/register"}>
                        <DropdownMenuItem className="text-gray-500">Register</DropdownMenuItem>
                      </Link>
                      </>
                      
                    }
              
                    </DropdownMenuGroup>
                  </DropdownMenuContent>
                </DropdownMenu>

                {/* Shopping Car Icon  */} 
                {data?
                <>
                <NavigationMenuItem >
                  <NavigationMenuLink asChild className="hover:bg-transparent flex-row items-center   ">
                   <div className="relative" >
                    <Link href="/cart"className=" focus:text-white  hover:text-white mr-3 " >
                      <ShoppingCartIcon className="size-6 text-gray-500 dark:text-gray-100 " />
                    </Link>
                    <div className=" w-5 h-5 bg-gray-500 text-sm text-white rounded-full flex justify-center items-center absolute bottom-7 left-5   ">
                  {context?.numOfCartItems != null &&  <h5>{context.numOfCartItems}</h5>}
                      </div>

                    <div className="text-gray-500 dark:text-gray-100  text-sm hidden sm:block">hi,{data.user?.name}</div>
                   </div>
                  
                  </NavigationMenuLink>
                </NavigationMenuItem>

                </>
                    :''
        
                  }
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
      </main>
    </>
  );
}
