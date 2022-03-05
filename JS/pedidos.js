function inicio(){
    checkRadioButtons();
}

function checkRadioButtons(){
    let radios = document.querySelectorAll("input[name='sabor']");
    for(let radio of radios){
        console.log(radio.value);
        radio.addEventListener("change",()=>{
            switch(radio.value){
                case 'Chocolate':
                    changeFigure("Chocolate.jpg","Chocolate");
                    checkPrice(200);
                break;
                case 'Zanahoria':
                    changeFigure("Zanahoria.jpg","Zanahoria");
                    checkPrice(250);
                break;
                case 'Coco':
                    changeFigure("Coco.jpg","Coco");
                    checkPrice(300);
                break;
                case 'Frambuesa':
                    changeFigure("Frambuesa.jpg","Frambuesa");
                    checkPrice(200);
                break;
                case 'Manzana':
                    changeFigure("Manzana.jpg","Manzana");
                    checkPrice(150);
                break;
                case 'Frutos Rojos':
                    changeFigure("FrutosRojos.jpg","Frutos Rojos");
                    checkPrice(300);
                break;
                case 'Fresa':
                    changeFigure("Fresa.jpg","Fresa");
                    checkPrice(300);
                break;
                case 'Queso':
                    changeFigure("Queso.jpg","Queso");
                    checkPrice(400);
                break;
                default:
                    console.log("ERROR");
                break;
            }
        },false);
    }
}

function changeFigure(newRootImg, newFlavor){
    let img = document.getElementById("imgPedido");
    let figcaption = document.getElementById("captionPedido");
    imgRoot="ASSETS/IMG/SABORES/"+newRootImg;
    img.src = imgRoot;
    figcaption.textContent="PASTEL DE "+(newFlavor.toUpperCase());
    
}

function checkPrice(price){
    let select = document.getElementById('cantidad');
    let finalPrice = document.getElementById('finalPrice');
    let cantidad = parseInt(select.options[select.selectedIndex].value);
    let total = cantidad*price;
    finalPrice.textContent=cantidad+" * "+price+"= $ "+total;
    select.addEventListener("change",()=>{
        cantidad = parseInt(select.options[select.selectedIndex].value);
        total = cantidad * price;
        finalPrice.textContent=cantidad+" * "+price+"= $ "+total;
    },false);
}

window.addEventListener("DOMContentLoaded",inicio,false);
