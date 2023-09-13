const trendCrypto = document.querySelectorAll('.trendImg')
const tredingName = document.querySelectorAll('.trendName')
const tredingPrice = document.querySelectorAll('.trendInUsd')
const tredingChange = document.querySelectorAll('.change')
var data




var trendData

var trendPrice = ''
async function trendingCrypto() {
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
    trendData = await response.json();
    mainFunc();
}
trendingCrypto()

function mainFunc() {
    for (let i = 0; i < 5; i++) {
        try {
            tredingName[i].innerHTML = trendData.coins[i].item.name
            trendCrypto[i].style.filter = 'none';
            trendCrypto[i].src = trendData.coins[i].item.large
            trendPrice += '%2C' + trendData.coins[i].item.id
        } catch (error) {
            continue;
        }
    }
    trendPrice = trendPrice.slice(3);
    // console.log(trendPrice)
    trendingPrices();

}
var trendPriceResponse;
async function trendingPrices() {

    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${trendPrice}&vs_currencies=usd&include_24hr_change=true&precision=4`);
    trendPriceResponse = await response.json();
    // console.log(trendPriceResponse)
    for (let i = 0; i < 4; i++) {
        const firstKey = Object.keys(trendPriceResponse)[i];
        const firstValue = trendPriceResponse[firstKey].usd;
        tredingPrice[i].innerHTML = firstValue;

        const secondKey = Object.keys(trendPriceResponse)[i];
        const secondValue = trendPriceResponse[secondKey].usd_24h_change;
        if (secondValue < 0) {
            tredingChange[i].style.color = '#e70000';
            tredingChange[i].innerHTML = Math.round(secondValue) + '%';
        }
        else if (secondValue > 0) {
            tredingChange[i].style.color = '#34e134';
            tredingChange[i].innerText = '+' + Math.round(secondValue) + '%';
        }
    }
}

var coinName = document.querySelectorAll('.coinName');
var coinPrice = document.querySelectorAll('.coinPrice');
var coin24h = document.querySelectorAll('.coin24h');
var coinMarket = document.querySelectorAll('.coinMarket');
var coinImg = document.querySelectorAll('.coinImg');



var tableData;

async function getTableData(page) {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&sparkline=false&price_change_percentage=1h`);
    tableData = await response.json();
    // console.log(tableData);
    setData();
}
getTableData(1);

function setData() {
    for (let i = 0; i < 10; i++) {
        try {
            coinImg[i].src = tableData[i].image;
            coinName[i].innerHTML = tableData[i].name;
            coinPrice[i].innerHTML = '$' + tableData[i].current_price;
            coinMarket[i].innerHTML = '$' + tableData[i].market_cap;

            if (tableData[i].price_change_percentage_1h_in_currency >= 0) {
                coin24h[i].style.color = '#34e134';
                coin24h[i].innerHTML = '+' + tableData[i].price_change_percentage_1h_in_currency.toFixed(3) + '%';
            } else if (tableData[i].price_change_percentage_1h_in_currency < 0) {
                coin24h[i].style.color = '#e70000';
                coin24h[i].innerHTML = tableData[i].price_change_percentage_1h_in_currency.toFixed(3) + '%';
            }

        } catch (error) {
            continue;
        }
    }
}




const toPageButton = document.querySelectorAll('.button')
toPageButton.forEach(clickedbtn => {
    clickedbtn.addEventListener('click', () => {
        if (clickedbtn.classList.contains('active')) {
            return;
        } else {
            if (clickedbtn.id == 'btn1') {
                getTableData(1);
                document.querySelector('.active').classList.remove('active');
                clickedbtn.classList.add('active');
            }
            else if (clickedbtn.id == 'btn2') {
                getTableData(2);
                document.querySelector('.active').classList.remove('active');
                clickedbtn.classList.add('active');
            }
            else if (clickedbtn.id == 'btn3') {
                getTableData(3);
                document.querySelector('.active').classList.remove('active');
                clickedbtn.classList.add('active');
            }
            else if (clickedbtn.id == 'btn4') {
                getTableData(4);
                document.querySelector('.active').classList.remove('active');
                clickedbtn.classList.add('active');
            }
            else if (clickedbtn.id == 'btn5') {
                getTableData(5);
                document.querySelector('.active').classList.remove('active');
                clickedbtn.classList.add('active');
            }
        }
    })
});

var menuBtn = document.querySelectorAll('.menuBtn');
var menu = document.querySelector('.mobileMenu');
menuBtn.forEach(activeBtn => {
    activeBtn.addEventListener('click', () => {
        toggleMenu();
    })
})
function toggleMenu() {
    menu.classList.toggle('menuActive');
}











/* Unused Functions */
/*
async function test() {
    // let request = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&precision=2')
   // let request = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin   Cethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true')
    let request = await fetch('https://api.coingecko.com/api/v3/search/trending')
    data = await request.json();
    console.log(data)
}
test()
trendCrypto[0]
data.coins[0].item.thumb








function headerFade(){
//     document.getElementsByTagName('header')[0].style.background = '#0000009e';
if ( document.body.onscroll == true){
    document.getElementsByTagName('header')[0].style.background = '#0000009e';
}
else{   document.getElementsByTagName('header')[0].style.background = '#ffffff00';
}
}
*/