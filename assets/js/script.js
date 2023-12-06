function totalClick (click) {
    const totalClicks = document.getElementById("totalClicks")
    const sumvalue = parseInt(totalClicks.innerText) + click
    // console.log(sumvalue + click)
    totalClicks.innerText = sumvalue

    //avoid negatives
    if(sumvalue < 0) {
        totalClicks.innerText = 0
    }

    //reset value
    if (click === 0) {
        totalClicks.innerText = 0
    }
}

function totalPrice () {
    const quantity = Number(document.querySelector(".spanqty").innerText)
    const price001 = parseInt(document.getElementById("price001").innerHTML)
    const total = quantity * price001

    const spanValor = document.getElementById("totalPrice")
    spanValor.innerHTML = total.toLocaleString('es-CL')

    // console.log(spanValor)
}

// spanPrecio = parseInt(document.getElementById("price001").innerHTML)
// precioChile = spanPrecio.toLocaleString('es-CL')
// spanPrecio.innerHTML = precioChile

// console.log(precioChile)

