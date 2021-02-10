/**
 * CARTA DEL RESTAURANTE
 */
// ***************** Variables **********************
//  CLIENTE
let cliente = {
    nombre: 'Alvaro',
    edad: 54
}

// Pedido Actual
let pedido = []

let total = 0

// CARTA
const CARTA = [
    {
        nombre: 'Pollo    ',
        precio: '12',
        cod: 'C01'
    },
    {
       nombre: 'Patatas   ',
       precio: '5',
       cod: 'G01'
   },
   {
       nombre: 'Vino tinto',
       precio: '23',
       cod: 'V01'
   },
   {
       nombre: 'Postre    ',
       precio: '18',
       cod: 'P01'
   },
]


// Campos de entrada
const detallePedido = document.querySelector('#detPedido')
const codigoPlato = document.querySelector('#codPlato')

// UI
class UI {
    imprimirDetalles() {
        this.limpiarHTML()
        let ArrayFindDetalle = pedido.find(detalle => detalle.cod === codPlato.value)
        const divDetalle = document.createElement('div')
        divDetalle.classList.add('detPlatoPedido')
                
        // ---- Scripting de los elementos del detalle --
        const codDet = document.createElement('li')
        codDet.classList.add('codDetLi')
        codDet.textContent = ArrayFindDetalle.cod

        const nomDet = document.createElement('li')
        nomDet.classList.add('codDetLi')
        nomDet.textContent = ArrayFindDetalle.nombre

        const precioDet = document.createElement('li')
        precioDet.classList.add('codDetLi')
        precioDet.textContent = ArrayFindDetalle.precio

        // ---- Agregar los párrafos al divDetalle ---
        divDetalle.appendChild(codDet)
        divDetalle.appendChild(nomDet)
        divDetalle.appendChild(precioDet)

        // ---- Agregar el detalle al HTML --------
        detPedido.appendChild(divDetalle)  
    }

    // Limpia la linea de detalle del pedido
    limpiarHTML(){
        while(detPedido.firstChild) {
            detPedido.removeChild( detPedido.firstChild)
        }
    }

    // El total se va calculando e imprimindo cada vez que entra detalle
    imprimirTotal(){
        const divTotal = document.createElement('div')
        divTotal.classList.add('totalPlatoPedido')

        let totalPedido = 0
        pedido.forEach(precioDet => {
            totalPedido =  totalPedido + parseInt(precioDet.precio)
        })

        // ---- Scripting del total del pedido --
        const totDetPedido = document.createElement('li')
        totDetPedido.classList.add('totDetLi')

        totDetPedido.textContent = totalPedido

        // ---- Agregar los párrafos al divDetalle ---
        divTotal.appendChild(totDetPedido)

        // ---- Agregar el total al HTML --------
        totalPedidoMostrar.appendChild(divTotal) 
    } 

    // Limpia la linea de Total Pedido
    limpiarHTML(){
        while(totalPedidoMostrar.firstChild) {
            totalPedidoMostrar.removeChild( totalPedidoMostrar.firstChild)
        }
    }
}
const ui = new UI()

// ***************** FUNCIONES **************************/
function muestraCarta() {
    const carta = ''
    CARTA.forEach(x => {
        carta = CARTA
    })
}

function eventListeners() {
    codigoPlato.addEventListener('change', buscarDetalle) 
}

function buscarDetalle() {
    // buscar en Array CARTA
    const codigoValidado = CARTA.find(x => x.cod === codPlato.value) 

    // Validamos que exista para excribir en Array pedido[]
    if (codigoValidado != undefined) {
        // Escribimos en Array pedido[]
        pedido.push(codigoValidado) 
        total += parseInt(CARTA.precio)
        mostrarDetalle()
    }
}

function mostrarDetalle() {
    // Mostrar el HTML de detalles
    ui.imprimirDetalles()

    // Mostrar el HTML de Total
    ui.imprimirTotal()

    // Limpiar línea de detalle

    // detallePedido.reset()

    // Muestra el total del Pedido
}
 
// ******************** LOGICA **************************/

ejecucion()

function ejecucion() {

    // muestraCarta()

    // Entrada de platos al pedido
    eventListeners()
}


