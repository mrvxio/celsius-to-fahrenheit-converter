const one = document.querySelector('.one')
const two = document.querySelector('.two')
const conv = document.querySelector('.conv')
const res = document.querySelector('.reset')
const change = document.querySelector('.change')
const p = document.querySelector('.result')
const converterValue = document.querySelector('#converter')
let celsius
let fahrenheit
function celtoFah()
{
    fahrenheit = 32 + 1.8 * converterValue.value
}
function fahtoCel()
{
    celsius = (converterValue.value - 32) / 1.8
}
function changeUnit()
{
    if(one.textContent === "°C")
    {
        one.textContent = "°F"
        two.textContent = "°C"
    }
    else
    {
        one.textContent = "°C"
        two.textContent = "°F"
    }
}
function reset()
{
    converterValue.value = ""
    p.textContent = "Enter a number"
}
function result()
{
    if(one.textContent === "°C")
    {
        celtoFah()
        p.textContent = `${converterValue.value}°C = ${fahrenheit.toFixed(1)}°F`
        converterValue.value = ''
    }
    else
    {
        fahtoCel()
        p.textContent = `${converterValue.value}°F = ${celsius.toFixed(1)}°C`
        converterValue.value = ''
    }
}
conv.addEventListener('click', result)
res.addEventListener('click', reset)
change.addEventListener('click', changeUnit)