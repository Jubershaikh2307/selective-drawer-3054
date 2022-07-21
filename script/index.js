let productimg=[
    "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fforbes-logo.webp&w=256&q=75",
    "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fyamaha-logo.webp&w=256&q=75",
    "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Funicef-logo.webp&w=256&q=75",
    "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fconvertkit-logo.webp&w=256&q=75",
    "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fwalgreens-logo.webp&w=256&q=75",
    "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fdictionary-com-logo.webp&w=256&q=75",
    "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fp-and-g-logo.webp&w=256&q=75",
    "https://coschedule.com/_next/image?url=%2Fimg%2Ftestimonials%2Fschwans-logo.webp&w=256&q=75"
]

productimg.map(function(elem){
    let img = document.createElement("img")
    img.setAttribute("src",elem)
    document.querySelector("#productcontainer > div").append(img)
})

let gridimg=[
    {
        bigimage:"https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100" ,
     smallimg:"https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-calendar-product-icon.png&w=64&q=75" ,
     heading:"Marketing Calendar",
      description:"A calendar that helps you see, schedule, and share your marketing.",
       point:[
        "See everything together in one place","Share your progress with higher-ups","Show what your marketing is doing"
    ],button:"#FFEDE3",buttontext:"#F38065"
},

{
    bigimage:"https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fsuite-product-background.png&w=1920&q=100" ,
 smallimg:"https://coschedule.com/_next/image?url=%2Fimg%2Fproduct%2Fmarketing-suite-product-icon.png&w=64&q=75" ,
 heading:"Marketing Suite",
  description:"A family of agile marketing products to coordinate your team, projects, and process.",
   point:[
    "Manage marketing requests","Eliminate content bottlenecks","Maximize resources to increase output"
],button:"#FFEDE3",buttontext:"#F38065"
},
{
    bigimage:"https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fmc-product-background.png&w=1920&q=100" ,
    smallimg:"image/headlinestudio.PNG" ,
 heading:"Headline Studio",
  description:"Write better headlines that will boost your traffic.",
   point:[
    "Score your headlines based on proven data","Improve headlines with smart suggestions","Find the high-scoring words instantly"
],button:"#DFE8F9",buttontext:"#618BE0"
},
{
    bigimage:"	https://coschedule.com/_next/image?url=%2Fimg%2Fhome%2Fami-product-background.png&w=1200&q=100" ,
    smallimg:"image/actionable.PNG" ,
 heading:"Actionable Marketing Institute",
  description:"Develop new marketing skills in 30 minutes (or less).",
   point:[
    "Improve your marketing with fluff-free training","Spend less time learning & more time doing","Learn from industry pros you trust"
],button:"#E6DEFA",buttontext:"#835CE5"
}
]

gridimg.map(function(elem){
    let box=document.createElement("div");

    let bigimg=document.createElement("img");
    bigimg.setAttribute("src",elem.bigimage)

    let smallimg=document.createElement("img");
    smallimg.setAttribute("src",elem.smallimg)

    let heading=document.createElement("h1")
    heading.innerHTML=elem.heading

    let description=document.createElement("p")
    description.innerHTML=elem.description

    let ul=document.createElement("ul")

    elem.point.map(function(data){

        let li=document.createElement("li")
        li.innerHTML=data
        ul.append(li)
    })    

    let button=document.createElement("button")
    button.innerHTML="Explore More"
    button.style.color=elem.buttontext
    button.style.border="none"
    button.style.backgroundColor=elem.button

    box.append(bigimg,smallimg,heading,description,ul,button)

    document.querySelector("#gridseccessio > div:nth-child(2)").append(box)

})

