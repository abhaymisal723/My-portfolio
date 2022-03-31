// function menu() {
//     var nav = document.getElementById("nav");
//     nav.classList.toggle("nav-close");
// }
document.getElementById("scrollright").onclick=function (){
    list = document.getElementById("project-list");
    list.scrollLeft += 300;
}
document.getElementById("scrollleft").onclick=function (){
    list = document.getElementById("project-list");
    list.scrollLeft -= 300;
}