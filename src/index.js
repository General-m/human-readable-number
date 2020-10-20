module.exports = function toReadable(number) {
    let a = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (number === 0) return 'zero';
    if (number < 20) return a[number];
    else if (number < 100) {
        return b[Math.floor(number / 10)] + ((number % 10 == 0) ? '' : ' ') + toReadable((((number / 10) - Math.floor(number / 10)) * 10).toFixed(0))
    }
    else {
        return a[Math.floor(number / 100)] + ' hundred' + ((number % 100 == 0) ? '' : ' ') + toReadable(((number / 100 - Math.floor(number / 100)) * 100).toFixed(0))
    }
}
