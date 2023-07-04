const promos = document.getElementsByClassName("promo-cart")
let currentPage = 0


function nextPage() {
    currentPage++
    if (currentPage >= promos.length) {
        currentPage = 0
    }
    for (let cart of promos) {
        cart.style.display = "none"
    }
    promos[currentPage].style.display = "flex"
}

nextPage()
setInterval(nextPage, 5000)