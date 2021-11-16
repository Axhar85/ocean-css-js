const trashContainer = document.querySelector(".trash-contanier")

const moneyElem = document.querySelector(".money")

const curencyFormatter = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "GBP",
    maximumFractionDigits: 0
})


setupTrash()

async function setupTrash() {
  const amountRaised = await fetch("https://tscache.com/donation_total.json")
    .then(res => res.json())
    .then(data => data.count)
  moneyElem.innerText = currencyFormatter.format(amountRaised)
}