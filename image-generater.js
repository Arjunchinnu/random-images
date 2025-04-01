let img = document.querySelector("img");
let imgg = document.querySelector(".img-container")
let btn = document.querySelector("button");

btn.addEventListener("click",()=>{

    for(let i=0;i<=10;i++){
  adding();
    }
       
});
function adding(){
    let newimg = document.createElement("img");
    newimg.src = `https://picsum.photos/300?random=${Math.floor(Math.random()*2000)}`
    imgg.appendChild(newimg)

}
img.addEventListener("mouseover",()=>{
    
})