var cartData1=JSON.parse(localStorage.getItem("wish"))|| [];
cartData1.map(function (elem, index){
    var box=document.createElement("div");
    var img=document.createElement("img");
    img.src=elem.imageUrl;
    var name=document.createElement("p");
    name.innerText=elem.name;
       var brand=document.createElement("p")
       brand.innerText=elem.brand;
       var price=document.createElement("p")
       price.innerText=elem.price;
       var btn=document.createElement("button");
       btn.innerText="X REMOVE";
       btn.addEventListener("click",function(){
           removeItem(elem, index);
       });
       box.append(img,name,brand,price,btn);
       document.querySelector("#wish").append(box);
   });
   function removeItem(elem, index){
    cartData1.splice(index,1);
    localStorage.setItem("wish",JSON.stringify(cartData1));
    window.location.reload();
}