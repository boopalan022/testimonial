let testimonial_data=[
    {
        name:"ramash",
        image:"1.jpg",
        text_content:"i am ramash very happy with join in magicbus"
        
    },
    {
        name:"boopalan",
        image:"2.jpg",
        text_content:"i am boopalan very happy with join in magicbus"
    },
    {
        name:"sudharshan",
        image:"3.jpg",
        text_content:"i am sudharshan very happy with join in magicbus"
    }
]

let data = 0
let name = document.querySelector(".container_name")
let image = document.querySelector(".container_img")
let text_content = document.querySelector(".container_content")

function testimonial(){
    let current = testimonial_data[data]
    name.innerHTML =current.name
    image.src =current.image
    text_content.innerHTML = current.text_content
    data++
    
    if (data ===testimonial_data.length){
        data=0
    }
}

setInterval(() => {testimonial()
    
}, 1000);
testimonial()
