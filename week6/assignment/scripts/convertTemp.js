// This script should return the results of a function that converts the temperature provided by the api (Kelvin).
// Depending on the location of the city, the function should return degrees in either fahrenheit or centigrade.
export default function convertKelvin(kelv) {
    return ((parseFloat(kelv).toFixed(2) - 273.15) * (9 / 5) + 32).toFixed(2)
}