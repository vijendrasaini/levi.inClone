function popup(parent,child){




    document.getElementById(parent).addEventListener("mouseover",()=>{
        document.getElementById(child).style.display="flex"
       document.getElementById(parent).style.borderLeft="2px solid black"
       document.getElementById(parent).style.borderRight="2px solid black"
       document.getElementById(parent).style.borderTop="1px solid black"
    
    
       document.getElementById(parent).style.backgroundColor="white"
    
       document.getElementById(child).addEventListener("mouseover",()=>{
        document.getElementById(child).style.display="flex"
       document.getElementById(parent).style.borderLeft="2px solid black"
       document.getElementById(parent).style.borderRight="2px solid black"
       document.getElementById(parent).style.borderTop="1px solid black"
       document.getElementById(parent).style.backgroundColor="white"
    
    
    
       document.getElementById(child).addEventListener("mouseout",()=>{
        document.getElementById(child).style.display="none"
        document.getElementById(parent).style.borderLeft="transparent"
        document.getElementById(parent).style.borderRight="transparent"
       document.getElementById(parent).style.borderTop="transparent"
       document.getElementById(parent).style.backgroundColor="transparent"
    
    
    })
    document.getElementById(parent).addEventListener("mouseout",()=>{
        document.getElementById(child).style.display="none"
        document.getElementById(parent).style.borderLeft="transparent"
        document.getElementById(parent).style.borderRight="transparent"
       document.getElementById(parent).style.borderTop="transparent"
       document.getElementById(parent).style.backgroundColor="transparent"
    
    
    })
    
    })
    
    
    
    })

}



function headernav()
{

return `
<nav>
<div id="Header_logo_img"><img src="https://www.levi.in/on/demandware.static/-/Sites-LeviIN-Library/en_IN/dw96cbad45/images/homepage/logo.jpg" alt=""></div>
<div id="Header_list">
<ul>
<li id="Header_A"><a href="">MEN</a></li>
<li id="Header_B"><a href="">WOMEN</a></li>
<li id="Header_C"><a href="">NEW ARRIVALS</a></li>
<li id="Header_D"><a href="">COLLECTIONS</a></li>
<li id="Header_E"><a href="">SALE</a></li>
<li id="Header_F"><a href="">WINTERWEAR COLLECTION</a></li>
</ul>
</div>
<div id="Header_search_cart">
<div id="Header_search">
<input type="text" placeholder="Search">
<button><i class="fa fa-search" aria-hidden="true"></i>
</button>
</div>
<div id="Header_cart">
<img src="https://www.levi.in/on/demandware.static/Sites-LeviIN-Site/-/en_IN/v1642463638317/images/bagicon24x24.png" alt="">
</div>
</div>
</nav>
<div id="Header_hide">
<!-- divg form men category -->
<div id="Header_men">

<div>
   <ul>
       <li><a href="">CLOTHING</a></li>
  <li><a href="">Jeans</a></li>
  <li><a href="">Pants</a></li>
  <li><a href="">Shorts</a></li>
  <li><a href="">T-Shirts & Polos</a></li>
  <li><a href="">Shirts</a></li>
  <li><a href="">Jackets</a></li>
  <li><a href="">Sweaters & Sweatshirts</a></li>
   </ul> 
</div>
<div>
    <ul>
        <li><a href="">SHOP JEANS BY FIT</a></li>
        <li><a href="">Skinny</a></li>
        <li><a href="">Slim</a></li>
        <li><a href="">Straight</a></li>
        <li><a href="">Relaxed</a></li>
    </ul>
</div>

<div>
    <ul>
     <li><a href="">ACCESSORIES</a></li>
     <li><a href="">Wallets</a></li>
     <li><a href=""></a></li>
     <li><a href="">Bags & Backpacks</a></li>
     <li><a href="">Footwear</a></li>
    </ul>
   
</div>

<div> <ul>
        <li><a href="">COLLECTIONS</a></li>
        <li><a href="">Sustainability</a></li>
        <li><a href="">Levi's® X Super Mario™</a></li>
        <li><a href="">RedLoop™</a></li>
        <li><a href=""></a></li>
        <li><a href="">White Tab</a></li>
        <li><a href=""></a>Winterwear</li>
        <li><a href="">Levi's® Flex</a></li>
    </ul></div>

</div>
<div id="Header_women">

<div>
   <ul>
       <li><a href="">CLOTHING</a></li>
  <li><a href="">Jeans</a></li>
  <li><a href="">T-Shirts & Tops</a></li>
  <li><a href="">Shirts</a></li>
  <li><a href="">Jackets</a></li>
  <li><a href="">Shirts</a></li>
  <li><a href="">Shorts & Skirts</a></li>
  <li><a href="">Pants</a></li>
  <li><a href="">Sweaters & Sweatshirts</a></li>

   </ul> 
</div>
<div>
    <ul>
        <li><a href="">SHOP JEANS BY FIT</a></li>
        <li><a href="">Super Skinny</a></li>
        <li><a href="">Skinny</a></li>
        <li><a href="">Slim</a></li>
        <li><a href="">Balloon Leg</a></li>
        <li><a href="">High Rise</a></li>

    </ul>
</div>

<div>
    <ul>
     <li><a href="">ACCESSORIES</a></li>
     <li><a href="">Bags & Backpacks</a></li>
     <li><a href="">Belts</a></li>
     <li><a href="">Sneakers</a></li>
     <li><a href="">Footwear</a></li>
    </ul>
   
</div>

<div> <ul>
        <li><a href="">COLLECTIONS</a></li>
        <li><a href="">Sustainability</a></li>
        <li><a href="">Levi's® X Super Mario™</a></li>
        <li><a href="">Balloon Jeans</a></li>
        <li><a href="">Sculpt Jeans</a></li>
        <li><a href="">Levi's® Made & Crafted®</a></li>
        <li><a href=""></a>Winterwear</li>
        <li><a href="">RedLoop™</a></li>
        <li><a href="">White Tab</a></li>

    </ul></div>

</div>
<div id="Header_newarrivals">
<div>
<ul>
    <li><a href="">MEN</a></li>
    <li><a href="">WOMEN</a></li>
    <li><a href="">ONLINE EXCLUSIVE</a></li>
</ul>
</div>
 </div>
 <div id="Header_collection">
     <div>
    <ul>
        <li><a href="">REDLOOP</a></li>
        <li><a href="">LEVI'S® MADE & CRAFTED®</a></li>
        <li><a href="">FASHIONFITS</a></li>
        <li><a href="">LEVI'S X DEEPIKA PADUKONE</a></li>
         <li><a href="">WINTERWEAR COLLECTION</a></li>
    </ul>
</div>
 </div>
 <div id="Header_sale">
     <div>
     <ul>
         <li><a href="">Men</a></li>
         <li><a href="">Women</a></li>
         <li><a href="">FLAT 60%</a></li>
     </ul>
    </div>
 </div>
</div>

`


}
    

 export  {popup,headernav}