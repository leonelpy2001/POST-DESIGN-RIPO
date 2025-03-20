
let btn = document.querySelector("button")

let btnChat = document.querySelector(".btn-chat")
let chatPopUp = document.querySelector(".btn-chat-popup")
let iChat = document.querySelector("#i-chat")
let iLike = document.querySelector("#i-like")
let spanLike = document.querySelector(".span-like")
let userPost = document.querySelector(".user-post")
let btnSalvar = document.querySelector(".btn-salvar")
let spanSalvo = document.querySelector("#id-salvar")
let contador = 12

function fnome() {

    setTimeout(() => {
        userPost.removeAttribute("id")
    }, 2000);


    btnSalvar.addEventListener("click", () => {
        spanSalvo.removeAttribute("id")

    });
    btn.addEventListener("click", () => {

        contador++
        spanLike.textContent = contador
        spanLike.style.color = "blue"
        spanLike.style.fontWeight = "bold"
        btn.style.opacity = "0.7"
        iLike.style.fontWeight = "bold"
        iLike.style.color = "blue"

        if (spanLike.textContent >= 13) {

            return spanLike.textContent = "13 Gostou"

        }
    })

    btnChat.addEventListener("click", () => {
        chatPopUp.removeAttribute("id")
        btn.style.opacity = "0.7"
        iChat.style.color = "blue"

        console.log("clicou chat")

    })

    btnChat.addEventListener("dblclick", () => {
        chatPopUp.setAttribute("id", "hidden")
        iChat.style.color = "black"
        btn.style.opacity = "0.7"
    })

}
fnome()




