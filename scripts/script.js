// console.log("tudo ok")

let products = document.querySelector("#products")
let handbags = [
    {
        name:"Bolsa Roux & Robin Couro Vermelha",
        price: "R$ 4300,00",
        picture: '../assets/f16.jpg'
    },
    {
        name:"Bolsa Tiracolo Bucket Esther",
        price: "R$ 2900,00",
        picture: '../assets/f17.jpg'
    },
    {
        name:"Bolsa Lucky Girl Couro Vermelha",
        price: "R$ 2400,00",
        picture: '../assets/f18.jpg'
    },
    {
        name:"Bolsa Shoulder Branca",
        price: "R$ 800,00",
        picture: '../assets/f12.jpg'
    },
    {
        name:"Bolsa Shopping Prada Couro Branco",
        price: "R$ 1500,00",
        picture: '../assets/f1.jpg'
    },
    {
        name:"Bolsa Média Believe Summer",
        price: "R$ 900,00",
        picture: '../assets/f5.jpg'
    },
    
    // {
    //     name:"Bolsa 6",
    //     price: "300,00 R$",
    //     picture: '../assets/f6.jpg'
    // },
    {
        name:"Bolsa Shoulder Mary Double Couro",
        price: "R$ 1600,00",
        picture: '../assets/f7.jpg'
    },
    {
        name:"Bolsa Shoulder Tina Média Bege",
        price: "R$ 700,00",
        picture: '../assets/f3.jpg'
    },
    {
        name:"Bolsa Mini Aryna",
        price: "R$ 800,00",
        picture: '../assets/f9.jpg'
    },
    // {
    //     name:"Bolsa 10",
    //     price: "300,00 R$",
    //     picture: '../assets/f10.jpg'
    // },
    
    
    
    
    {
        name:"Bolsa Bolsa Mini Shoulder Amarela",
        price: "R$ 1300,00",
        picture: '../assets/f20.jpg'
    },
    {
        name:"Bolsa Maxi Tote Aryna",
        price: "R$ 1600,00",
        picture: '../assets/f13.jpg'
    },
    {
        name:"Bolsa Tote Aryna",
        price: "R$ 1800,00",
        picture: '../assets/f15.jpg'
    },
    // {
    //     name:"Bolsa 19",
    //     price: "300,00 R$",
    //     picture: '../assets/f19.jpg'
    // },
    // {
    //     name:"Bolsa 14",
    //     price: "300,00 R$",
    //     picture: '../assets/f14.jpg'
    // },
    // {
    //     name:"Bolsa 2",
    //     price: "300,00 R$",
    //     picture: '../assets/f2.jpg'
    // },
    // {
    //     name:"Bolsa 8",
    //     price: "300,00 R$",
    //     picture: '../assets/f8.jpg'
    // },
    // {
    //     name:"Bolsa 4",
    //     price: "300,00 R$",
    //     picture: '../assets/f4.jpg'
    // },
    // {
    //     name:"Bolsa 11",
    //     price: "300,00 R$",
    //     picture: '../assets/f11.jpg'
    // },
    
]

handbags.map( handbag => {
    products.innerHTML += `
    <div class="information">
    <img src="${handbag.picture}">
    <h3>${handbag.name}</h3>
    <h5/>${handbag.price}</h5>
    <button>Compre Aqui</button></div>
    `
})