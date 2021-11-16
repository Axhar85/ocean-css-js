const trashContainer = document.querySelector(".trash-contanier")

const moneyElem = document.querySelector(".money")

const curencyFormatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0
})


const amountraised = 102344
moneyElem.innerText = curencyFormatter.format(amountraised)