const slider = $('input.price-range').slider({});
const priceMinEl = $('input#price-min');
const priceMaxEl = $('input#price-max');
const currentPrice = slider.slider('getValue');
const currency = '$';
priceMinEl.val(`${currency} ${currentPrice[0]}`);
priceMaxEl.val(`${currency} ${currentPrice[1]}`);

slider.on('slide', v => {
    const min = v.value[0];
    const max = v.value[1];
    priceMinEl.val(`${currency} ${min}`);
    priceMaxEl.val(`${currency} ${max}`);
});