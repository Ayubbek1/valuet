export function aside(place) {
    place.innerHTML = `<div class="top">
    <h2 class="logo">VALUET</h2>
    <nav>
        <a href="/" class="active">
            <img style="filter:invert(0.5)" src="/img/menu.png" alt="">
            <p>Overview</p>
        </a>
        <a href="#">
            <img src="/img/cards.png" alt="">
            <p>Wallets</p>
        </a>
        <a href="/pages/transaction/" class="transactions_aside">
            <img src="/img/transactions.png" alt="">
            <p>Transictions</p>
        </a>
        <a href="#">
            <img src="/img/exchange.png" alt="">
            <p>Exchange</p>
        </a>
        <a href="#">
            <img src="/img/market.png" alt="">
            <p>Market</p>
        </a>
    </nav>
</div>
<div class="bottom">
    <div class="line"></div>
    <div class="user"><img src="/img/Ellipse.png" alt=""><p>${JSON.parse(localStorage.getItem("user")).email}</p></div>
    <div class="logout"><img src="/img/logout.png" alt="">Log out</div>
</div>
<img src="/img/Polygon.png" alt="" class="triangle_main">`
let navDivs = document.querySelectorAll("nav a")
let triangle_main = document.querySelector(".triangle_main")
let transactions = document.querySelector(".transactions_aside")
triangle_main.onclick = () =>{
    triangle_main.style.rotate= "360deg"
    setTimeout(() => {
        triangle_main.style.rotate= "0deg"
    }, 1000);
}
navDivs.forEach(div => {
    div.onclick = () => {
        navDivs.forEach(element => { element.classList.remove("active") });
        div.classList.add("active")
    }
});
transactions.onclick = () =>{
    location.assign("/pages/transaction")
    
}
}