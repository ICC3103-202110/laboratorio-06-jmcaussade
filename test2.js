function PrintTemperatureSource(){
    return "Left temperature is source? (y/n)  "
}

function PrintTemperature(){
    return "Enter the temperature to convert:  "
}

function PrintFrom(){
    return "Choose the temperature to convert from (c,f,k)  "
}

function PrintTo(){
    return "Choose the temperature value to convert to (c,f,k)  "
}

module.exports ={
    PrintTemperatureSource,
    PrintTemperature,
    PrintFrom,
    PrintTo
}