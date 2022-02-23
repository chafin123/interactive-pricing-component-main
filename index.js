// Changes pageviews to correct number in accordance with range slider value

const slider = document.getElementById("pageViewSlider");
const output = document.getElementById("pageViewNumber");

function convertRangeValueIntoPageViews(range) {
    switch(range.value) {
        case '0':
            return '10K';
            break;
        case '25':
            return '50K';
            break;
        case '50':
            return '100K';
            break;
        case '75':
            return '500K';
            break;
        case '100':
            return '1M';
            break;
    }   
}
function pageViews() {
    return convertRangeValueIntoPageViews(slider)
}
function monthlyPrice() {
    return getMonthyBillBasedOnPageViews()
}
slider.onchange = function() {
    output.innerHTML = pageViews();
    monthlyCost.innerHTML = monthlyPrice();
}
const sliderButton = document.querySelector('input[name="discountSlider"]');
const monthlyCost = document.getElementById('rangeNumbers');
//change monthy price based on range slider and if discount applyied
function getMonthyBillBasedOnPageViews() {
    let pageViewNumbers = pageViews();
    switch(pageViewNumbers) {
        case '10K':
            if(sliderButton.checked == true) {
                return "$6.00"
            } return "$8.00"
            break;
        case '50K':
            if(sliderButton.checked == true) {
                return "$9.00"
            } return "$12.00"
            break;
        case '100K':
            if(sliderButton.checked == true) {
                return "$12.00"
            } return "$16.00"
            break;
        case '500K':
            if(sliderButton.checked == true) {
                return "$18.00"
            } return "$24.00"
            break;
        case '1M':
            if(sliderButton.checked == true) {
                return "$27.00"
            } return "$36.00"
            break;
    }
}
sliderButton.onchange = function() {
    monthlyCost.innerHTML = monthlyPrice();
}
// JS for button slider
const range = document.querySelector('.range')
const thumb = document.querySelector('.thumb')
const track = document.querySelector('.track-inner')

const updateSlider = (value) => {
  thumb.style.left = `${value}%`
  thumb.style.transform = `translate(-${value}%, -50%)`
  track.style.width = `${value}%`
}

range.oninput = (e) =>
  updateSlider(e.target.value)

updateSlider(50) // Init value