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