

function CtoF(celsius){
    var fahrenheit = parseFloat(celsius*(9/5) + 32)
    return fahrenheit
}

function CtoK(celsius){
    var Kelvin = parseFloat(celsius + 273.15)
    return Kelvin
}

function FtoK(fahreinheit){
    var Kelvin = parseFloat((fahreinheit - 32)*(5/9) +273.15)
    return Kelvin
}

function FtoC(fahreinheit){
    var celsius = parseFloat((fahreinheit - 32) * (5/9))
    return celsius
}

function KtoC(kelvin){
    var celsius = parseFloat((kelvin - 273.15))
    return celsius
}

function KtoF(kelvin){
    var fahreinheit = (kelvin -273.15)*(9/5) + 32
    return fahreinheit
}



module.exports = {
    CtoF,
    CtoK,
    FtoK,
    FtoC,
    KtoC,
    KtoF,
}