
let shop = document.getElementById('shop')
const checkOutPage = document.getElementById('checkOutPage')
const sideMenu = document.getElementById('sideMenu')
const mainContainer = document.getElementById('mainContainer')
const itemPage = document.getElementById('itemPage')
const cartItems = document.getElementById('cartItems')
const shoppingCartBox = document.getElementById('shoppingCartBox').onclick = openShoppingCart
const shoppingPage = document.getElementById('shoppingPage')
const navShoppingCart = document.getElementById('navShoppingCart')
const totalSumBottom = document.getElementById('totalSumBottom')
const backStoreButton = document.getElementById('backStoreButton').onclick = openShop
const picassoButton = document.getElementById('picassoButton').onclick = openDefault
const sideHomeButton = document.getElementById('sideHomeButton').onclick = openDefault
const sideShopButton = document.getElementById('sideShopButton').onclick = openShop
const shoppingCartButton = document.getElementById('shoppingCartButton')
const bars = document.getElementById('bars').onclick = showSide
const menuButton = document.getElementById('menuButton').onclick = showSide
const closeX = document.getElementById('xClose').onclick = closeSide
const shopNow = document.getElementById('shopNowButton').onclick = openShop

let mainImage
let totalSumBox
let shopItem
let itemsCounter
let shoppingCart = []
let selectedItem = []
let totalSum = 0
let sum = 0
let itemPrice = 0
let navShoppingCartSum = 0
let products = [
    {
        title: "OZWEEGO SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/f204ed5c024d42498e67ab9e012eb10f_9366/OZWEEGO_Shoes_White_FV9654_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/9535beef288247efb9e4ab9e012ec028_9366/OZWEEGO_Shoes_White_FV9654_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/dad6b877e7fd4f1eb278ab9e012ec786_9366/OZWEEGO_Shoes_White_FV9654_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/9ced8f95abe745cd95b6ab9f001dc207_9366/OZWEEGO_Shoes_White_FV9654_04_standard.jpg"
        ],
        stock: "2",
        price: "80",
        id: "1",
        selectedQuantity: "0"
    },
    {
        title: "ZX 2K BOOST SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/a00e176273414e2d986babc90099fa3e_9366/ZX_2K_Boost_Shoes_White_FV9996_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/22ca1f055a294725880aabc9009a070a_9366/ZX_2K_Boost_Shoes_White_FV9996_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/4560338c129440d894d9abc9009a0e97_9366/ZX_2K_Boost_Shoes_White_FV9996_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/fd11b47048434931acd9abc9009a1542_9366/ZX_2K_Boost_Shoes_White_FV9996_04_standard.jpg"
        ],
        stock: "8",
        price: "150",
        id: "2",
        selectedQuantity: "0"
    },

    {
        title: "X90004D SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/d6641ce0097f4b9ca22cabdd00a1c66e_9366/X90004D_Shoes_Black_FW7093_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/9bca524f6e564ce19f7babdd00a1d334_9366/X90004D_Shoes_Black_FW7093_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/0075d5d3a0b8418c9756abdd00a1dad2_9366/X90004D_Shoes_Black_FW7093_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/efbfcf28ea55442e8130abdd00a1e173_9366/X90004D_Shoes_Black_FW7093_04_standard.jpg"
        ],
        stock: "5",
        price: "160",
        id: "3",
        selectedQuantity: "0"
    },

    {
        title: "ULTRABOOST 20 SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/c506dc4a84804ab1a907abad011ebdf0_9366/Ultraboost_20_Shoes_Black_FV8330_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/d211447e73564a9d9d6babad011ec8fb_9366/Ultraboost_20_Shoes_Black_FV8330_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/9b01b768b58546cebcf1abad011ecf01_9366/Ultraboost_20_Shoes_Black_FV8330_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/fd2750a89cb74c73beb4abad011ed544_9366/Ultraboost_20_Shoes_Black_FV8330_04_standard.jpg"
        ],
        stock: "12",
        price: "180",
        id: "4",
        selectedQuantity: "0"
    },

    {
        title: "OZWEEGO SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/d8afb099dc9047789c63abed0072c6c1_9366/OZWEEGO_Shoes_Grey_FZ1963_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/be589225059b44868386abed0072d488_9366/OZWEEGO_Shoes_Grey_FZ1963_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/f897d99916184c928d19abed0072dbd1_9366/OZWEEGO_Shoes_Grey_FZ1963_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/d197459d4fcb494380d0abed0072e33a_9366/OZWEEGO_Shoes_Grey_FZ1963_04_standard.jpg"
        ],
        stock: "25",
        price: "110",
        id: "5",
        selectedQuantity: "0"
    },

    {
        title: "ZX 2K BOOST SHOES",
        photos: [
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/16216c130f5846ed8c9eabc600b3ea6f_9366/ZX_2K_Boost_Shoes_White_FX8835_01_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/34f64adbe930404f9203abc600b3f7f5_9366/ZX_2K_Boost_Shoes_White_FX8835_02_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/7f360335273e45cf9160abc600b3fefc_9366/ZX_2K_Boost_Shoes_White_FX8835_03_standard.jpg",
            "https://assets.adidas.com/images/w_600,f_auto,q_auto/a6105a11bb96483297c5abc600b40603_9366/ZX_2K_Boost_Shoes_White_FX8835_04_standard.jpg"
        ],
        stock: "5",
        price: "150",
        id: "6",
        selectedQuantity: "0"
    }
]

function showSide () {
    sideMenu.style.display = "flex"
}

function closeSide () {
    sideMenu.style.display = "none"
}

function openDefault () {
    sideMenu.style.display = "none"
    itemPage.style.display = "none"
    shop.style.display = "none"
    shoppingPage.style.display = "none"
    mainContainer.style.display = "flex"
}

function openShop () {
    mainContainer.style.display = "none"
    shop.style.display = "flex"
    shop.innerHTML = ""
    itemPage.style.display = "none"
    shoppingPage.style.display = "none"
    sideMenu.style.display = "none"

    products.map(item =>{
        shop.innerHTML += `
        <div class="display_flex flex-column justify-content-center align-items-center shopItem" 
        onclick="openItemPage(event)" id="${item.id}">
            <div>
                <img src=${item.photos[0]} class="img">
            </div>
            <div class="itemTitle">
                ${item.title}
            </div>
            <div class="itemPrice">
                $${item.price}
            </div>
        </div>
        `
    })
}

function openItemPage (event) {
    console.log(event)
    shop.style.display = "none"
    itemPage.style.display = "block"
    sideMenu.style.display = "none"

    console.log(event.path[2].id)

    selectedItem = products
    selectedItem = products.filter(el => el.id === event.path[2].id)

    console.log(selectedItem)

    itemPage.innerHTML = `
            <div id="backToList" onclick="openShop()">
            <i class="fas fa-sitemap"></i>
        </div>
        <div id="${event.path[2].id}" class="display_flex flex-column align-items-center justify-content-center">
            <div class="fontSize48 marginTop50">${selectedItem[0].title}</div>
            <div class="fontSize25 orange marginTop20">$${selectedItem[0].price}</div>
            <div class="display_flex margin100 spaceAround">
                <div class="display_flex flex-column justify-content-center align-items-center">
                    <div>
                        <img src="${selectedItem[0].photos[0]}" id="mainImage">
                    </div>
                    <div class="display_flex justify-content-center">
                        <div>
                            <img src="${selectedItem[0].photos[1]}" class="border3pSolidBlack smallImg" id="smallImg1" onclick = changeImage(event)>
                        </div>
                        <div>
                            <img src="${selectedItem[0].photos[2]}"
                                 class="border3pSolidBlack smallImg" id="smallImg2" onclick = changeImage(event)>
                        </div>
                        <div>
                            <img src="${selectedItem[0].photos[3]}"
                                 class="border3pSolidBlack smallImg" id="smallImg3" onclick = changeImage(event)>
                        </div>
                    </div>
                </div>
                <div class="display_flex flex-column justify-content-center align-items-center">
                    <div id="textDiv">
                        Lorem ipsum dolor sit amet, consecte tuer ad ipiscing elit. Aenean commodo ligula eget dolor.
                        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculu.
                    </div>
                    <div>
                        <label for="sizes">Choose a size:</label>
                            <select name="sizes" id="sizes">
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="7">7</option>
                              <option value="8">8</option>
                            </select> 
                    </div>
                    <div id="addToCartButton" onclick="addToCart(event)">
                        ADD TO CART
                    </div>
                </div>
            </div>
        </div>
    `
    mainImage = document.getElementById('mainImage')
}

function addToCart (event) {
    console.log(event)
    console.log(event.path[3].id)

    let id = Number(event.path[3].id) - 1

    console.log(id)

    let quantity = Number(products[id].selectedQuantity)


    let newCart = []

    if (!!shoppingCart.filter(item => item.id === event.path[3].id)[0]) {

        newCart = shoppingCart.filter(el => el.id == event.path[3].id)
        newCart.map(item =>{
            if (item.id  == id + 1) {
                console.log("Quantity plus")
                quantity = products[id].selectedQuantity
                quantity++
                products[id].selectedQuantity = quantity
                navShoppingCartSum += Number(item.price)
                navShoppingCart.innerHTML = `$${navShoppingCartSum}`
                totalSumBottom.innerHTML = `$${navShoppingCartSum}`
            }
        })
    } else {
        console.log("ishiftinom")
        quantity = products[id].selectedQuantity
        quantity++
        products[id].selectedQuantity = quantity
        shoppingCart.unshift(products[id])
        navShoppingCartSum += Number(products[id].price)
        navShoppingCart.innerHTML = `$${navShoppingCartSum}`
        totalSumBottom.innerHTML = `$${navShoppingCartSum}`
    }

}

function changeImage (event) {
    console.log(event)
    mainImage.src = event.path[0].currentSrc
}

function openShoppingCart () {
    itemPage.style.display = "none"
    mainContainer.style.display = "none"
    shop.style.display = "none"
    shoppingPage.style.display = "block"
    sideMenu.style.display = "none"
    cartItems.innerHTML = ''
    totalSumBottom.innerHTML = `$${navShoppingCartSum}`
    shoppingCart.map(item => {
        itemPrice = Number(item.price)
        totalSum = item.price
        cartItems.innerHTML += `
            <div id="${item.id}" class="margin20">
                <div id="itemCard" class="display_flex flex-column justify-content-center align-items-center positionRelative">
                    <div class="xDiv">
                        <i class="fas fa-times" id="xClose2" onclick="removeItem(event)"></i>
                    </div>
                    <div class="width85 marginTop50">
                        <img src="${item.photos[0]}" class="cartItemImage">
                    </div>
                    <div class="fontSize24 margin10">
                        ${item.title}
                    </div>
                    <div class="fontSize18 gray margin10">
                        <span>$</span>${item.price}
                    </div>
                    <div class="display_flex">
                        <div class="fontSize40 gray margin10 pointer" onclick="minusItems1(event)">
                            -
                        </div>
                        <div class="fontSize40 margin10" id="itemsCounter">
                            ${item.selectedQuantity}
                        </div>
                        <div class="fontSize40 gray margin10 pointer" onclick="plusItems1(event)">
                            +
                        </div>
                    </div>
                    <div class="orange fontSize30 marginTop10 marginBottom30" id="totalSumBox">
                        $${itemPrice * item.selectedQuantity}  
                    </div>
                </div>
            </div>
        `
    })
}

function plusItems1 (event) {
    let id = Number(event.path[3].id) - 1
    let quantity = Number(products[id].selectedQuantity)
    let stock = Number(products[id].stock)
    let plus = 1

        if (quantity == stock) {
            plus = 0
            event.path[1].children[1].innerHTML = quantity
            alert("We have only " + stock + " in stock!")
        }
        if (quantity < stock) {
            quantity = quantity + plus
            event.path[1].children[1].innerHTML = quantity
            totalSum = products[id].price * quantity
            navShoppingCartSum += Number(products[id].price)
            navShoppingCart.innerHTML = `$${navShoppingCartSum}`
            totalSumBottom.innerHTML = `$${navShoppingCartSum}`
            event.path[2].children[5].innerHTML = `$${totalSum}`
            products[id].selectedQuantity = quantity
        }
}

function minusItems1 (event) {
    let id = Number(event.path[3].id) - 1
    let quantity = 0
    quantity = Number(products[id].selectedQuantity)
    console.log(quantity)

    let minus = 1

    if (quantity == 1) {
        event.path[1].children[1].innerHTML = quantity
    } else {
        quantity = quantity - minus
        event.path[1].children[1].innerHTML = quantity
        totalSum = products[id].price * quantity
        navShoppingCartSum -= Number(products[id].price)
        navShoppingCart.innerHTML = `$${navShoppingCartSum}`
        totalSumBottom.innerHTML = `$${navShoppingCartSum}`
        event.path[2].children[5].innerHTML = `$${totalSum}`
        products[id].selectedQuantity = quantity
    }
}

function removeItem (event) {
    selectedItem = []
    selectedItem = shoppingCart.filter(el => el.id === event.path[3].id)
    shoppingCart = shoppingCart.filter(el => el.id !== event.path[3].id)
    let quant = 0
    let id = Number(event.path[3].id) - 1
    quant = Number(products[id].selectedQuantity)
    navShoppingCartSum -= selectedItem[0].price * quant
    navShoppingCart.innerHTML = `$${navShoppingCartSum}`
    totalSumBottom.innerHTML = `$${navShoppingCartSum}`
    openShoppingCart ()
}


// function plusItems (event) {
//     console.log(event)
//     let id = event.path[3].id
//     let filteredItem = []
//     filteredItem = products.filter(el => el.id === event.path[3].id)
//
//     let plus = 1
//
//     event.path[1].children[1].innerText = ``
//
//     if (`itemsQuantity${id}` === "itemsQuantity1") {
//         if (itemsQuantity1 == filteredItem[0].stock) {
//             plus = 0
//             event.path[1].children[1].innerHTML = itemsQuantity1
//             alert("We have only " + filteredItem[0].stock + " in stock!")
//         }
//         if (itemsQuantity1 < filteredItem[0].stock) {
//             itemsQuantity1 = itemsQuantity1 + plus
//             console.log(itemsQuantity1)
//             event.path[1].children[1].innerHTML = itemsQuantity1
//             totalSum = itemPrice * itemsQuantity1
//             navShoppingCartSum += itemPrice
//             navShoppingCart.innerHTML = `$${navShoppingCartSum}`
//             totalSumBottom.innerHTML = `$${navShoppingCartSum}`
//             event.path[2].children[5].innerHTML = `$${totalSum}`
//         }
//     }
//     if (`itemsQuantity${id}` === "itemsQuantity2") {
//         if (itemsQuantity2 == filteredItem[0].stock) {
//             plus = 0
//             event.path[1].children[1].innerHTML = itemsQuantity2
//             alert("We have only " + filteredItem[0].stock + " in stock!")
//         }
//         if (itemsQuantity2 < filteredItem[0].stock) {
//             itemsQuantity2++
//             console.log(itemsQuantity2)
//             event.path[1].children[1].innerHTML = itemsQuantity2
//             totalSum = itemPrice * itemsQuantity2
//             navShoppingCartSum += itemPrice
//             navShoppingCart.innerHTML = `$${navShoppingCartSum}`
//             totalSumBottom.innerHTML = `$${navShoppingCartSum}`
//             event.path[2].children[5].innerHTML = `$${totalSum}`
//         }
//     }
//     if (`itemsQuantity${id}` === "itemsQuantity3") {
//         if (itemsQuantity3 == filteredItem[0].stock) {
//             plus = 0
//             event.path[1].children[1].innerHTML = itemsQuantity3
//             alert("We have only " + filteredItem[0].stock + " in stock!")
//         }
//         if (itemsQuantity3 < filteredItem[0].stock) {
//             itemsQuantity3++
//             console.log(itemsQuantity3)
//             event.path[1].children[1].innerHTML = itemsQuantity3
//             totalSum = itemPrice * itemsQuantity3
//             navShoppingCartSum += itemPrice
//             navShoppingCart.innerHTML = `$${navShoppingCartSum}`
//             totalSumBottom.innerHTML = `$${navShoppingCartSum}`
//             event.path[2].children[5].innerHTML = `$${totalSum}`
//         }
//     }
//     if (`itemsQuantity${id}` === "itemsQuantity4") {
//         if (itemsQuantity4 == filteredItem[0].stock) {
//             plus = 0
//             event.path[1].children[1].innerHTML = itemsQuantity4
//             alert("We have only " + filteredItem[0].stock + " in stock!")
//         }
//         if (itemsQuantity4 < filteredItem[0].stock) {
//             itemsQuantity4++
//             console.log(itemsQuantity4)
//             event.path[1].children[1].innerHTML = itemsQuantity4
//             totalSum = itemPrice * itemsQuantity4
//             navShoppingCartSum += itemPrice
//             navShoppingCart.innerHTML = `$${navShoppingCartSum}`
//             totalSumBottom.innerHTML = `$${navShoppingCartSum}`
//             event.path[2].children[5].innerHTML = `$${totalSum}`
//         }
//     }
//     if (`itemsQuantity${id}` === "itemsQuantity5") {
//         if (itemsQuantity5 == filteredItem[0].stock) {
//             plus = 0
//             event.path[1].children[1].innerHTML = itemsQuantity5
//             alert("We have only " + filteredItem[0].stock + " in stock!")
//         }
//         if (itemsQuantity5 < filteredItem[0].stock) {
//             itemsQuantity5++
//             console.log(itemsQuantity5)
//             event.path[1].children[1].innerHTML = itemsQuantity5
//             totalSum = itemPrice * itemsQuantity5
//             navShoppingCartSum += itemPrice
//             navShoppingCart.innerHTML = `$${navShoppingCartSum}`
//             totalSumBottom.innerHTML = `$${navShoppingCartSum}`
//             event.path[2].children[5].innerHTML = `$${totalSum}`
//         }
//     }
//     if (`itemsQuantity${id}` === "itemsQuantity6") {
//         if (itemsQuantity6 == filteredItem[0].stock) {
//             plus = 0
//             event.path[1].children[1].innerHTML = itemsQuantity6
//             alert("We have only " + filteredItem[0].stock + " in stock!")
//         }
//         if (itemsQuantity6 < filteredItem[0].stock) {
//             itemsQuantity6++
//             console.log(itemsQuantity6)
//             event.path[1].children[1].innerHTML = itemsQuantity6
//             totalSum = itemPrice * itemsQuantity6
//             navShoppingCartSum += itemPrice
//             navShoppingCart.innerHTML = `$${navShoppingCartSum}`
//             totalSumBottom.innerHTML = `$${navShoppingCartSum}`
//             event.path[2].children[5].innerHTML = `$${totalSum}`
//         }
//     }
// }

// function minusItems (event) {
//     console.log(event)
//     let id = event.path[3].id
//
//     let minus = 1
//
//     event.path[1].children[1].innerText = ``
//
//     if (`itemsQuantity${id}` === "itemsQuantity1") {
//
//         if (itemsQuantity1 == 1) {
//             minus = 0
//             event.path[1].children[1].innerHTML = itemsQuantity1
//         } else {
//             itemsQuantity1 = Number(itemsQuantity1) - minus
//             event.path[1].children[1].innerHTML = itemsQuantity1
//             totalSum = itemPrice * itemsQuantity1
//             navShoppingCartSum -= itemPrice
//             navShoppingCart.innerHTML = `$${navShoppingCartSum}`
//             totalSumBottom.innerHTML = `$${navShoppingCartSum}`
//             event.path[2].children[5].innerHTML = `$${totalSum}`
//         }
//     }
//     if (`itemsQuantity${id}` === "itemsQuantity2") {
//
//         if (itemsQuantity2 == 1) {
//             minus = 0
//             event.path[1].children[1].innerHTML = itemsQuantity2
//         } else {
//             itemsQuantity2 = Number(itemsQuantity2) - minus
//             event.path[1].children[1].innerHTML = itemsQuantity2
//             totalSum = itemPrice * itemsQuantity2
//             navShoppingCartSum -= itemPrice
//             navShoppingCart.innerHTML = `$${navShoppingCartSum}`
//             totalSumBottom.innerHTML = `$${navShoppingCartSum}`
//             event.path[2].children[5].innerHTML = `$${totalSum}`
//         }
//     }
//     if (`itemsQuantity${id}` === "itemsQuantity3") {
//
//         if (itemsQuantity3 == 1) {
//             minus = 0
//             event.path[1].children[1].innerHTML = itemsQuantity3
//         } else {
//             itemsQuantity3 = Number(itemsQuantity3) - minus
//             event.path[1].children[1].innerHTML = itemsQuantity3
//             totalSum = itemPrice * itemsQuantity3
//             navShoppingCartSum -= itemPrice
//             navShoppingCart.innerHTML = `$${navShoppingCartSum}`
//             totalSumBottom.innerHTML = `$${navShoppingCartSum}`
//             event.path[2].children[5].innerHTML = `$${totalSum}`
//         }
//     }
//     if (`itemsQuantity${id}` === "itemsQuantity4") {
//
//         if (itemsQuantity4 == 1) {
//             minus = 0
//             event.path[1].children[1].innerHTML = itemsQuantity4
//         } else {
//             itemsQuantity4 = Number(itemsQuantity4) - minus
//             event.path[1].children[1].innerHTML = itemsQuantity4
//             totalSum = itemPrice * itemsQuantity4
//             navShoppingCartSum -= itemPrice
//             navShoppingCart.innerHTML = `$${navShoppingCartSum}`
//             totalSumBottom.innerHTML = `$${navShoppingCartSum}`
//             event.path[2].children[5].innerHTML = `$${totalSum}`
//         }
//     }
//     if (`itemsQuantity${id}` === "itemsQuantity5") {
//
//         if (itemsQuantity5 == 1) {
//             minus = 0
//             event.path[1].children[1].innerHTML = itemsQuantity5
//         } else {
//             itemsQuantity5 = Number(itemsQuantity5) - minus
//             event.path[1].children[1].innerHTML = itemsQuantity5
//             totalSum = itemPrice * itemsQuantity5
//             navShoppingCartSum -= itemPrice
//             navShoppingCart.innerHTML = `$${navShoppingCartSum}`
//             totalSumBottom.innerHTML = `$${navShoppingCartSum}`
//             event.path[2].children[5].innerHTML = `$${totalSum}`
//         }
//     }
//     if (`itemsQuantity${id}` === "itemsQuantity6") {
//
//         if (itemsQuantity6 == 1) {
//             minus = 0
//             event.path[1].children[1].innerHTML = itemsQuantity6
//         } else {
//             itemsQuantity6 = Number(itemsQuantity6) - minus
//             event.path[1].children[1].innerHTML = itemsQuantity6
//             totalSum = itemPrice * itemsQuantity6
//             navShoppingCartSum -= itemPrice
//             navShoppingCart.innerHTML = `$${navShoppingCartSum}`
//             totalSumBottom.innerHTML = `$${navShoppingCartSum}`
//             event.path[2].children[5].innerHTML = `$${totalSum}`
//         }
//     }
// }



//KARUSELE

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}








