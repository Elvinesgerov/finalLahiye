let entersifretext = document.querySelector(".entersifretext")
let entersifre = document.querySelector(".entersifre")
let enteremail = document.querySelector(".enteremail")
let inputpassword = document.querySelector(".inputpassword")
let enternote = document.querySelector(".enternote")
let enterbtn = document.querySelector(".enterbtn")
let hiddenemail = document.querySelector(".hiddenemail")
let hiddenpassword = document.querySelector(".hiddenpassword")
let mood = document.querySelector(".mood")
let backboxs = document.querySelectorAll(".back-boxs")
let enterinputs = document.querySelector(".enterinputs")
let backmood = document.querySelector(".backmood")
let input = document.querySelectorAll("input")
let flag = true


mood.addEventListener("click", () => {
    if (flag == true) {
        backboxs.forEach(item => {
            item.style.backgroundColor = "black"
        })
        enterinputs.style.backgroundColor = "#313131"
        backmood.style.backgroundColor = "#313131"
        backmood.style.color = "white"
        input.forEach(item =>{
            item.style.backgroundColor = "#313131"
            item.style.color = "white"
        })
        flag = false
    } else {
        backboxs.forEach(item => {
            item.style.backgroundColor = "#f5f5f5"
        })
        enterinputs.style.backgroundColor = "#f5f5f5"
        backmood.style.backgroundColor = "white"
        backmood.style.color = "black"
        input.forEach(item =>{
            item.style.backgroundColor = "white"
            item.style.color = "black"
        })
        flag = true
    }
})

enternote.addEventListener("click", () => {
    enteremail.placeholder = "Ad"
    enteremail.type = "text"
    inputpassword.placeholder = "SoyAd"
    entersifre.style.display = "block"
    entersifre.placeholder = "Isdifadeci Adi"
    hiddenemail.style.display = "block"
    hiddenpassword.style.display = "block"
    entersifretext.style.display = "none"
    enternote.innerHTML = "Daxil Ol"

    enternote.addEventListener("click", () => {
        entersifre.style.display = "none"
        entersifretext.style.display = "block"
        enteremail.placeholder = "Email"
        enteremail.type = "email"
        inputpassword.placeholder = "Password"
        enternote.innerHTML = "Qeydiyyatdan Kecin!"
        enternote.style.fontWeight = "900"
        enterbtn.innerHTML = "Daxil Ol"
        hiddenemail.style.display = "none"
        hiddenpassword.style.display = "none"
    })
})

entersifretext.addEventListener("click", () => {
    entersifre.style.display = "block"
    entersifretext.style.display = "none"
    enteremail.placeholder = "Dogrulama Kodu"
    enteremail.type = "text"
    inputpassword.placeholder = "Yeni Şifre"
    enternote.innerHTML = "Geri Qayit!"
    enternote.style.fontWeight = "900"
    enterbtn.innerHTML = "Şifrəni Dəyiş"

    enternote.addEventListener("click", () => {
        entersifre.style.display = "none"
        entersifretext.style.display = "block"
        enteremail.placeholder = "Email"
        enteremail.type = "email"
        inputpassword.placeholder = "Password"
        enternote.innerHTML = "Qeydiyyatdan Kecin!"
        enternote.style.fontWeight = "900"
        enterbtn.innerHTML = "Daxil Ol"
        hiddenemail.style.display = "none"
        hiddenpassword.style.display = "none"

        enternote.addEventListener("click", () => {
            enteremail.placeholder = "Ad"
            enteremail.type = "text"
            inputpassword.placeholder = "SoyAd"
            entersifre.style.display = "block"
            entersifre.placeholder = "Isdifadeci Adi"
            hiddenemail.style.display = "block"
            hiddenpassword.style.display = "block"
            entersifretext.style.display = "none"
            enternote.innerHTML = "Daxil Ol"

            enternote.addEventListener("click", () => {
                entersifre.style.display = "none"
                entersifretext.style.display = "block"
                enteremail.placeholder = "Email"
                enteremail.type = "email"
                inputpassword.placeholder = "Password"
                enternote.innerHTML = "Qeydiyyatdan Kecin!"
                enternote.style.fontWeight = "900"
                enterbtn.innerHTML = "Daxil Ol"
                hiddenemail.style.display = "none"
                hiddenpassword.style.display = "none"
            })
        })
    })
})

setInterval(function () {
    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    document.body.style.backgroundColor = getRandomColor();
}, 1000);