function calculateDiscount (price, discontPercent) {
    let discont = (price * discontPercent) / 100;
    let finalPrice = price - discont;
    return finalPrice;
}

console.log(calculateDiscount(100, 20));