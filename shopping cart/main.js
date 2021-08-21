//heart color
var all = document.querySelectorAll('.heart')
for (let i = 0; i < all.length; i++){
    all[i].addEventListener('click', function(){
    set_color(all[i]);
})
}

function set_color(img) {
    if(img.style.backgroundColor === "red") {
        img.style.backgroundColor = "lightgray"
    } else {
        img.style.backgroundColor = "red"
    }

}

//buttons
var total = document.querySelectorAll(".totres")

var result = document.getElementById("result")

var shipping = document.getElementById("shipp")

var plus = document.querySelectorAll(".qty-plus")

var minus = document.querySelectorAll(".qty-minus")

var price = document.querySelectorAll(".col-price p")

//delete button
var allbtns = document.querySelectorAll('.button')

var tabs = document.querySelectorAll('.tab')

for (let c = 0; c < allbtns.length; c++){
    allbtns[c].addEventListener('click', function(){
        var r1 = allbtns[c].closest(".tab")
        r1.remove();

        minus[c].nextElementSibling = 0
        total[c].value = 0
    })
}

//plus
var x=[]
var n=0
for (let p = 0; p < plus.length; p++){
    plus[p].addEventListener('click', function(){
        var pp = plus[p].previousElementSibling
        pp.value ++ 

        var check = price[p].innerHTML
        var res = sum_quant(parseFloat(check, 10),parseFloat(pp.value, 10),p)
        console.log(res)
        x[n] = total[p].value
        n++
        sum(x)
    })
}

//minus
for (let m = 0; m < minus.length; m++){
    minus[m].addEventListener('click', function(){  
    var mm = minus[m].nextElementSibling
        if (mm.value != 0 ){
            mm.value --   
        }

        var check = price[m].innerHTML
        sum_quant(parseFloat(check, 10),parseFloat(mm.value, 10),m)
        sum(total[m])
        
    })
}

//update
var update = document.getElementsByClassName(".btn")
function updt() {
    for(var i=0 ; i<total.length; i++){
    total[i].value = 0
    }

    var mm = document.querySelectorAll(".qtty") 
    for(var z=0 ; z<mm.length ; z++ ){
        mm[z].value = 0
    }
        shipping.value = 1.5
        result.value = 0

}

//quantities
function sum_quant(a,b,i) {
    var res = a*b 
    total[i].value = res.toFixed(2)
    return total[i].value
}

//SUM
function sum (m){
   console.log(m)
   var z=0 
   var tab = []
   for(var i=0 ; i<m.length ; i++){
    tab[z] = parseFloat(m[i],10)
    z++
    console.log(tab)
   }
    var x =tab.reduce((prev, curr) => prev + curr  )
    var w = parseFloat(shipping.value,10)
    var c = parseFloat(x.toFixed(2),10)
    const r = w + c
   result.value = r
   console.log(typeof c)
}

