// Calc
const productsInput = document.getElementById('quantity'); //Products
const productsSum = document.getElementById('products-sum');
const productsVal = document.getElementById('product-value');
const ordersInput = document.getElementById('orders');    //Orders
const ordersSum = document.getElementById('orders-sum');
const ordersVal = document.getElementById('order-value');
const arrow = document.getElementById('package-list'); //Package
const packageTypeAll = document.querySelectorAll('.option');
const packageType = document.getElementById('package-type');
const packageVal = document.getElementById('package-value');
const accountingInput = document.getElementById('accounting'); //Acounting
const accountingPrice = document.getElementById('accounting-price');
const rentalInput = document.getElementById('rental'); //Rental
const rentalTerminal = document.getElementById('rental-terminal');

let sumProducts = 0;
let sumOrders = 0;
let sumPackage = 0;
let sumAccounting = 0;
let sumRental = 0;

const sum = document.getElementById('sum'); 

const totalPrice = () => { 
    let result = sumProducts + sumOrders + sumPackage + sumAccounting + sumRental;
    sum.innerText = 'Total: ' + result + '$' ;
}   

productsInput.addEventListener('input', function () {
    if (Number.isInteger(parseFloat(productsInput.value)) && parseFloat(productsInput.value) > 0) {
        productsSum.parentElement.style.visibility = 'visible';
        productsSum.innerText = productsInput.value * 0.5 + "$";
        productsVal.innerText = productsInput.value + ` * 0.5$`;
        sumProducts = 0;
        sumProducts = productsInput.value * 0.5;
        totalPrice();
    } else if (productsInput.value === ''){
        sumProducts = 0;
        totalPrice();
        productsSum.innerText = "0$";
        productsVal.innerText = "";
    } else {
        productsInput.value = '';
        productsInput.setAttribute('placeholder', 'Value has to be a positive integer');
        productsSum.innerText = "0$";
        productsVal.innerText = "";
    }
});
ordersInput.addEventListener('input', function () {
    if (Number.isInteger(parseFloat(ordersInput.value)) && parseFloat(ordersInput.value) > 0) {
        ordersSum.parentElement.style.visibility = 'visible';
        ordersSum.innerText = ordersInput.value * 0.25 + "$";
        ordersVal.innerText = ordersInput.value + ` * 0.25$`;
        sumOrders = 0;
        sumOrders = ordersInput.value * 0.25;
        totalPrice();
    } else if(ordersInput.value === ''){
        sumOrders = 0;
        totalPrice();
        ordersSum.innerText = "0$";
        ordersVal.innerText = "";
    } else {
        ordersInput.value = '';
        ordersInput.setAttribute('placeholder', 'Value has to be an integer');
    }
});

for (let i = 0; i < packageTypeAll.length; i++) {
    packageTypeAll[i].addEventListener('click', function (e) {
        if (i === 0) {
            arrow.innerText = packageTypeAll[0].innerText;
            packageType.parentElement.style.visibility = 'visible';
            packageType.innerText = 0 +'$'
            packageVal.innerText = packageTypeAll[0].innerText;
            sumPackage = 0;
            totalPrice();
        } else if (i === 1) {
            arrow.innerText = packageTypeAll[1].innerText;
            packageType.parentElement.style.visibility = 'visible';
            packageType.innerText = 25 +'$'
            packageVal.innerText = packageTypeAll[1].innerText;
            sumPackage = 0;
            sumPackage = 25;
            totalPrice();
        } else {
            arrow.innerText = packageTypeAll[2].innerText;
            packageType.parentElement.style.visibility = 'visible';
            packageType.innerText = 60 +'$'
            packageVal.innerText = packageTypeAll[2].innerText;
            sumPackage = 0;
            sumPackage = 60;
            totalPrice();
        }
    })
}

accountingInput.addEventListener('change', function () {
    accountingPrice.parentElement.style.visibility = 'visible';
    if (accountingInput.checked) {
        accountingPrice.innerText = 35 +"$"
        sumAccounting = 0;
        sumAccounting = 35;
        totalPrice();
    } else {
        accountingPrice.innerText = 0 + "$"
        sumAccounting = 0;
        totalPrice();
    }
});

rentalInput.addEventListener('change', function () {
    rentalTerminal.parentElement.style.visibility = 'visible';
    if (rentalInput.checked) {
        rentalTerminal.innerText = 5 +"$"
        sumRental = 0;
        sumRental = 5;
        totalPrice();
    } else {
        rentalTerminal.innerText = 0 + "$"
        sumRental = 0;
        totalPrice();
    }
});

//Menu - Hamburger;
const button = document.querySelector('.hamburger');
const onClick = (e) => {
    e.target.classList.toggle('active');
}
const nav = document.getElementById('nav');
const menuToggle = () => {
    nav.classList.toggle('hidden');
} 

button.addEventListener('click', onClick);
button.addEventListener('click', menuToggle);
