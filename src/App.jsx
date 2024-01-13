import { BiSun } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import { useEffect, useState } from "react"
import Card from "./commponents/Card"
import Nav from "./commponents/Nav"
import NewArraivalSection from "./commponents/NewArrivalSection"
import ShoeDetail from "./commponents/ShoeDetail"
import Sidebar from "./commponents/Sidebar"
import { SHOE_LIST } from "./constant"
import { CartItem } from "./commponents/CartItem"
import { Cart } from "./commponents/Cart"

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [currentShoe, setCurrentShoe] = useState(SHOE_LIST[2]);
  const [cartItems, setCartItems]= useState([]);

  useEffect(()=>{
    const isDarkMode = localStorage.getItem("isDarkMode");
    if(isDarkMode === "true"){
      window.document.documentElement.classList.add("dark");
    }
  },[]);

  const toggleDarkMode = function () {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem("isDarkMode", window.document.documentElement.classList.contains("dark"));

  }

  const removeFromCart = function(productid){
    const updatedCartItems = [...cartItems];
    const existingItemIndex = cartItems.findIndex(item => item.product.id === productid);
    updatedCartItems.splice(existingItemIndex, 1); 
    setCartItems(updatedCartItems);
  }

  const addToCart = function(product, qty, size){
    if(qty && size){
      const updatedCartItems = [...cartItems];
      const existingItemIndex = cartItems.find(item => item.product.id === product.id);
      if(existingItemIndex > -1){
        updatedCartItems[existingItemIndex].qty = qty;
        updatedCartItems[existingItemIndex].size = size;
      }else{
        updatedCartItems.push({
          product: product,
          qty: qty,
          size: size,
        });
      }

      setCartItems(updatedCartItems);
    }
  }

  return (
    <>
      <div className=" animate-fadeIn p-4 xl:px-24 dark:bg-night-50">
        <Nav onClickShoppingBtn={() => { setIsSidebarOpen(true) }} />
        <ShoeDetail shoe={currentShoe} onClickAdd={addToCart}/>
        <NewArraivalSection 
        onClickCard={setCurrentShoe}
        items={SHOE_LIST} />

        <Sidebar onClickClose={() => { setIsSidebarOpen(false) }} isOpen={isSidebarOpen}>
          <Cart 
          onClickTrash={removeFromCart}
          cartItems={cartItems} />
        </Sidebar>
        <div className="  fixed bottom-4 right-4 ">
          <button onClick={toggleDarkMode} className=" shadow-lg dark:bg-white bg-night-50 px-4 py-2 rounded-full text-white dark:text-night-default">
            <BiSun className="hidden dark:block" />
            <BiMoon className=" dark:hidden" />

          </button>
        </div>
      </div>



    </>
  )
}

export default App
