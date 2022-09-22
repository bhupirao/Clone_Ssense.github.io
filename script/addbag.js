var cartData=JSON.parse(localStorage.getItem("cart"))|| [];
var total=cartData.reduce(function (sum, elem, index,arr){
    return sum + Number(elem.price);
},0);
var length=cartData.length;
document.querySelector(".p1").innerText=`Total Items ${length} items `;
document.querySelector(".p").innerText=`Total Price $ ${total}`
cartData.map(function (elem, index){
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
    btn.setAttribute('id','btn')
    btn.innerText="REMOVE";
    btn.addEventListener("click",function(){
        removeItem(elem, index);
    });
    box.append(img,name,brand,price,btn);
    document.querySelector("#add").append(box);
});
function removeItem(elem, index){
    cartData.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(cartData));
    window.location.reload();
}
const addCart =document.querySelectorAll("#btn")
const cartShow =document.querySelector('.num span');

for(var i=addCart.length-1;i>=0;i--){
    addCart[i].addEventListener('click',() =>{
        aCart();
    })
}
function aCart(){
    let prdCount =localStorage.getItem('cartsCount');
    prdCount =parseInt(prdCount)
    if(prdCount){
        localStorage.setItem('cartsCount', prdCount-1);
        cartShow.textContent = prdCount -1;
    }
    else{
        localStorage.setItem('cartsCount',1);
        cartShow.textContent = prdCount;
    } 
}
function displayCart(){
    let prdCount =localStorage.getItem('cartsCount');
    if(prdCount){
        cartShow.textContent = prdCount;
    }
}
displayCart();