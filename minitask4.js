// konversi suhu
// c -> f
// c -> r
// c -> k
// output hasil konversi dengan format yang benar
let suhu = 40

function celciusToFerenheit(suhuCelcius){
    let result = (9/5 * suhuCelcius) + 32
    return result
}

const celciusToReamur = function(suhuCelcius){
    let result = 4/5 * suhuCelcius
    return result
}

const celciusToKelvin = (suhuCelcius) =>{
    let result = suhuCelcius + 273
    return result
}

function outputKonversi(suhuCelcius) {
    console.log(`Konversi Celcius Ke Ferenheit: ${celciusToFerenheit(suhuCelcius)}°F`)
    console.log(`Konversi Celcius Ke Reamur: ${celciusToReamur(suhuCelcius)}°R`)
    console.log(`Konversi Celcius Ke Kelvin: ${celciusToKelvin(suhuCelcius)}°K`)
}

outputKonversi(suhu)

