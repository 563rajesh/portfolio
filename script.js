let hamm = document.querySelector(".hambar");
// document.querySelector(".hambar").addEventListener("click",()=>{
//     console.log('i was clicked');
// });
let ul = document.querySelector(".list-item");
console.log(ul.children);
hamm.onclick = () => {
  document.querySelector(".list-item").classList.toggle("ind");

};
let collection = document.getElementsByClassName('link');
for(let i = 0; i<collection.length; i++){
    collection[i].onclick = function(){
        document.getElementsByClassName('list-item')[0].classList.remove('ind');
    }
}

let codinghome = (document.getElementsByClassName(
  "coding-home"
)[0].style.fontWeight = "bold");
console.log(codinghome);

// const firstlink= document.querySelector("#firstlink");
// firstlink.onclick= () =>{
//     console.log("firstlink= ",firstlink);
//     document.querySelector(".list-item").classList.remove("ind");
// }
// const secondlink= document.querySelector("#secondlink");
// secondlink.onclick= () =>{
//     console.log("ab= ",secondlink);
//     document.querySelector(".list-item").classList.remove("ind");
// }
// const thirdlink= document.querySelector("#thirdlink");
// thirdlink.onclick= () =>{
//     console.log("ab= ",thirdlink);
//     document.querySelector(".list-item").classList.remove("ind");
// }
// const fourthlink= document.querySelector("#fourthlink");
// fourthlink.onclick= () =>{
//     console.log("aD= ",fourthlink);
//     document.querySelector(".list-item").classList.remove("ind");
// }
// const fifthlink= document.querySelector("#fifthlink");
// fifthlink.onclick= () =>{
//     console.log("ab= ",fifthlink);
//     document.querySelector(".list-item").classList.remove("ind");
// }
// const sixthlink= document.querySelector("#sixthlink");
// sixthlink.onclick= () =>{
//     console.log("ab= ",sixthlink);
//     document.querySelector(".list-item").classList.remove("ind");
// }
// document.querySelector(".link").classList.toggle("rja");this is for you can add this
// class also or simply overwrite the property for link item

