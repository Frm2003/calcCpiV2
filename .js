function load(cpi, res) {
    res = document.getElementsByClassName("result")[0]
    menu(document.getElementById("cb"), document.querySelectorAll("#btMenu"))
    tema(document.getElementById("altTheme"))
    radio = document.querySelectorAll('[name="r"]')
    for (let a = 0; a < radio.length; a++) {
        radio[a].hidden = true
    }
    btCalc = document.querySelectorAll("#bt")
    mainInputs = document.querySelectorAll(".cont")
    exibir = document.querySelectorAll("#exibir")
    for (let b = 0; b < exibir.length; b++) {
        exibir[0].value = cpi
        exibir[1].value = cpi
    }
    for (let a = 0; a < btCalc.length; a++) {
        btCalc[0].onclick = function () { // fecha a aba de calculo 
            res.style.marginLeft = "-100%"
        }
        btCalc[1].onclick = function () { // chama o calculo
            if (mainInputs[0].value === "") {
                mainInputs[0].style.borderColor = "red"
            } else {
                res.style.marginLeft = "-100%"
                btCalc[3].style.opacity = "0"
                mainInputs[0].style.borderColor = "rgba(196,31,20,0.5)"
                calcCpi(mainInputs[0])
            }
        }
        btCalc[2].onclick = function () { // abre e cria inputs da aba calculo
            if (mainInputs[1].value === "") {
                mainInputs[1].style.borderColor = "red"
            } else {
                res.style.marginLeft = "0%"
                btCalc[3].style.opacity = "1"
                mainInputs[1].style.borderColor = "rgba(196,31,20,0.5)"
                criarInputs(mainInputs[1])
            }
        }
        btCalc[3].onclick = function () {
            res.style.marginLeft = "0%"
        }
    }
}
function menu(cb) {
    cb.hidden = true
    cb.onchange = function (nav, header) {
        nav = document.getElementsByTagName("nav")[0]
        if (cb.checked) {
            nav.style.marginLeft = "0%"
        } else {
            nav.style.marginLeft = "-100%"
        }
    }
}
function tema(checkbox) {
    checkbox.hidden = true
    checkbox.onchange = function () {
        if (checkbox.checked) {
            document.getElementById("attheme").setAttribute("class", "fas fa-lightbulb")
            document.getElementsByTagName("link")[4].setAttribute("href", "css/themeDark.css")
        } else {
            document.getElementById("attheme").setAttribute("class", "far fa-lightbulb")
            document.getElementsByTagName("link")[4].setAttribute("href", "css/themeLight.css")
        }
    }
}
function criarInputs(x, instA, instB) {
    for (let a = 0; a < x.value; a++) {
        instA = document.body.appendChild(document.createElement("input"))
        instB = document.body.appendChild(document.createElement("input"))
        instA.setAttribute("class", "a field")
        instB.setAttribute("class", "b field")
        document.getElementsByClassName("ia")[0].insertAdjacentElement("beforeend", instA)
        document.getElementsByClassName("ib")[0].insertAdjacentElement("beforeend", instB)
    }
}
function calcCpi(inst, soma = 0, div = 0) {
    let p = document.querySelectorAll(".a")
    let cpi = document.querySelectorAll(".b")
    for (let z = 0; z < p.length; z++) {
        soma = (soma + (inst.value * (parseFloat(p[z].value) / 100) * parseFloat(cpi[z].value)))
        div = soma / inst.value
    }
    load(div)
}