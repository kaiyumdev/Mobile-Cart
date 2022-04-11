function updateProductNumber(product, price, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if(isIncreasing) {
        productNumber = parseInt(productNumber) + 1;
        // console.log('click');
    }
    else if(productNumber>0){
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = productNumber * price;
    // calculateTotal
    calculateTotal()
}

function getProductValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}
function calculateTotal(){
    const phoneTotal = getProductValue('phone') * 1219;
    const caseTotal = getProductValue('case') * 59;
    const subTotal = phoneTotal + caseTotal;
    console.log('click');
    const tax = subTotal / 10;
    const totalPrice = subTotal + tax;
    // 
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}

// phone increase decrease event
document.getElementById('phone-plus').addEventListener('click',function(){
    updateProductNumber('phone', 1219, true);
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateProductNumber('phone', 1219, false);
})


// handle case increase decrease event
document.getElementById('case-plus').addEventListener('click', function(){
    // console.log('click');
    updateProductNumber('case', 59, true);
  
});

document.getElementById('case-minus').addEventListener('click', function() {
    updateProductNumber('case', 59, false);
})
