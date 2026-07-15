const text = [
  "Aspiring Data Scientist",
  "Aspiring Data Analyst",
  "Power BI Enthusiast"
];

let count = 0;
let index = 0;
let current = "";
let letter = "";

(function type(){

if(count===text.length){
count=0;
}

current=text[count];
letter=current.slice(0,++index);

document.getElementById("typing").textContent=letter;

if(letter.length===current.length){
count++;
index=0;
setTimeout(type,1200);
}
else{
setTimeout(type,100);
}

})();

const links=document.querySelectorAll('a[href^="#"]');

links.forEach(link=>{
link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});

});

});
