
const icon = document.getElementById("icon");
const password = document.getElementById("password")
const username = document.getElementById("username")
const form = document.getElementById("inputForm")
const userError = document.querySelector(".userError")
const passwordError = document.querySelector(".passwordError")



icon.addEventListener("click", () => {


    if (password.type === "password") {
        icon.classList.remove("fa-eye")
        icon.classList.add("fa-eye-slash")
        password.type = "text"
    }
    else {
        icon.classList.replace("fa-eye-slash", "fa-eye")
        password.type = "password"
    }
})



form.addEventListener("submit", (event) => {
    event.preventDefault()

    if (username.value === "") {
        userError.innerText = "Kullanıcı adı boş bırakılamaz...!"
        userError.style.visibility = "visible"
        username.focus();
        return
    }

    const emailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    const isValidEmail = username.value.match(emailFormat)

    if (isValidEmail === null) {
        userError.innerText = "Email formatı yanlış"
        userError.style.visibility = "visible"
        username.focus();
        return
    }

    if (password.value.length < 6) {
        passwordError.innerText = "Hatalı şifre..!"
        passwordError.style.visibility = "visible"
        password.focus();
        return
    }

    window.location="profile.html"

})

username.addEventListener("focusout", () => {
    userError.style.visibility = "hidden"
})

password.addEventListener("focusout", () => {
    passwordError.style.visibility = "hidden"
})
