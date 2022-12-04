const year = 100;
const century = spo(year);

console.log(`Year: ${year} \nCentury: ${century}`);
function spo(year) {
    return  Math.floor( ( year - 1) / 100) + 1;
}
