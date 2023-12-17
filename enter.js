let entersifretext = document.querySelector(".entersifretext")
let unlucky = document.querySelector(".ri-lock-fill")
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
let hiddeneys = document.querySelector(".ri-eye-off-fill")
let lighteys = document.querySelector(".ri-eye-off-line")
let lighteys1 = document.querySelector(".ri-eye-line")


let flag = true
let flag1 = true
let flag2 = true
let flag3 = true


hiddeneys.addEventListener("click",()=>{
    if(flag1 == true){
        hiddeneys.classList.remove("ri-eye-off-fill")
        hiddeneys.classList.add("ri-eye-fill")
        inputpassword.type = "text"
        flag1 = false
    } else if (flag1 == false){
        inputpassword.type = "password"
        hiddeneys.classList.remove("ri-eye-fill")
        hiddeneys.classList.add("ri-eye-off-fill")
        flag1 = true
    }
})

mood.addEventListener("click", () => {
    if (flag == true) {
        backboxs.forEach(item => {
            item.style.backgroundColor = "black"
        })
        enterinputs.style.backgroundColor = "#313131"
        backmood.style.backgroundColor = "#313131"
        backmood.style.color = "white"
        input.forEach(item => {
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
        input.forEach(item => {
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
    inputpassword.type = "text"
    entersifre.style.display = "block"
    entersifre.placeholder = "Isdifadeci Adi"
    hiddenemail.style.display = "block"
    hiddenpassword.style.display = "block"
    entersifretext.style.display = "none"
    enternote.innerHTML = "Daxil Ol"
    unlucky.style.display = "block"
    hiddeneys.style.display = "none"

    unlucky.addEventListener("click", ()=>{
        if(flag3 == true){
            unlucky.classList.remove("ri-lock-fill")
            unlucky.classList.add("ri-lock-unlock-fill")
            hiddenpassword.type = "text"
            flag3 = false
        }else {
            unlucky.classList.remove("ri-lock-unlock-fill")
            unlucky.classList.add("ri-lock-fill")
            hiddenpassword.type = "password"
            flag3 = true
        }
    })

    enterbtn.addEventListener("click", () => {
        let a = hiddenpassword.value.startsWith(" ")
        let b = hiddenpassword.value.startsWith(".")

        if ( a == false && b == false && enteremail.value != "" && enteremail.value != " " && inputpassword.value != ""
            && inputpassword.value != " " && entersifre.value != "" && entersifre.value != ""
            && hiddenemail.value != "" && hiddenemail.value != " " && hiddenpassword.value != ""
            && hiddenpassword.value != " " && hiddenpassword.value.length > 7) {
            alert("Qeydiyatdan Kecdiniz!")
        } else if (enteremail.value == "" || enteremail.value == " ") {
            alert("Adiniz daxil edin!")
        } else if (inputpassword.value == "" || inputpassword.value == " ") {
            alert("Soyadiniz daxil edin")
        } else if (entersifre.value == "" || entersifre.value == "") {
            alert("Isdifadici adinizi qeyd edin")
        } else if (hiddenemail.value == "" || hiddenemail.value == " ") {
            alert("Emailinizi daxil edin")
        } else if (hiddenpassword.value == ""){
            alert("sifrenizi daxil edin")
        } else if (hiddenpassword.value.length < 8) {
            alert("sifre azi 8 simvoldan ibaret olmalidir")
        } else if (a == true && b == true){
            alert("Sifre harf reqem ve heriflerden ibaret ola biler!")
        }
        else {
            alert("Deyerleri duzgun daxil edin")
        }
    })

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
        unlucky.style.display = "none"

        entersifretext.addEventListener("click", ()=>{
            entersifre.placeholder = "Sifrenizi texrar yazin"
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
            unlucky.style.display = "block"

            unlucky.addEventListener("click", ()=>{
                if(flag3 == true){
                    unlucky.classList.remove("ri-lock-fill")
                    unlucky.classList.add("ri-lock-unlock-fill")
                    hiddenpassword.type = "text"
                    flag3 = false
                }else {
                    unlucky.classList.remove("ri-lock-unlock-fill")
                    unlucky.classList.add("ri-lock-fill")
                    hiddenpassword.type = "password"
                    flag3 = true
                }
            })

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
                unlucky.style.display = "none"
            })
        })
    })
})

entersifretext.addEventListener("click", () => {
    entersifre.style.display = "block"
    entersifretext.style.display = "none"
    enteremail.placeholder = "Dogrulama Kodu"
    entersifre.type = "password"
    enteremail.type = "number"
    inputpassword.placeholder = "Yeni Şifre"
    enternote.innerHTML = "Geri Qayit!"
    enternote.style.fontWeight = "900"
    enterbtn.innerHTML = "Şifrəni Dəyiş"
    lighteys.style.display = "block"
    unlucky.style.display = "none"

    lighteys.addEventListener("click", ()=>{
        if(flag2 == true){
            lighteys.classList.remove("ri-eye-off-line")
            lighteys.classList.add("ri-eye-line")
            entersifre.type = "text"
            flag2 = false
        } else if (flag2 == false) {
            lighteys.classList.remove("ri-eye-line")
            lighteys.classList.add("ri-eye-off-line")
            entersifre.type = "password"
            flag2 = true
        }
    })

    enterbtn.addEventListener("click", () => {
        let enteremailtrim = enteremail.value.trim()
        let inputpasswordtrim = inputpassword.value.trim()
        let entersifretrim = entersifre.value.trim()
        if (enteremailtrim.length == 6 && inputpasswordtrim.length > 7 && entersifretrim.length > 7 && inputpasswordtrim == entersifretrim) {
            alert("Sifreniz Yenilendi")
        } else if (enteremailtrim.length != 6) {
            alert("Dogrulama kodu duzgun daxil edin!")
        } else if (inputpasswordtrim.length < 8) {
            alert("Sifre 8 simvoldn ibaret olamlidir")
        } else if (inputpasswordtrim != entersifretrim) {
            alert("Sifreden tekrar sifre eyni deyil")
        }
        else {
            alert("Deyerleri Duzgun daxil edin!")
        }
    })

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
        lighteys.style.display = "none"
        unlucky.style.display = "none"

        entersifretext.addEventListener("click", ()=>{
            entersifre.placeholder = "Sifrenizi texrar yazin"
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
            unlucky.style.display = "block"

            unlucky.addEventListener("click", ()=>{
                if(flag3 == true){
                    unlucky.classList.remove("ri-lock-fill")
                    unlucky.classList.add("ri-lock-unlock-fill")
                    hiddenpassword.type = "text"
                    flag3 = false
                }else {
                    unlucky.classList.remove("ri-lock-unlock-fill")
                    unlucky.classList.add("ri-lock-fill")
                    hiddenpassword.type = "password"
                    flag3 = true
                }
            })

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
                unlucky.style.display = "none"
            })
        })
    })
})

setInterval(function () {
    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    document.body.style.backgroundColor = getRandomColor();
}, 1000);