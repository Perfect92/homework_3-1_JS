// 1 Задача
const emailInput = document.querySelector(".emailInput")
const emailClick = document.querySelector(".emailClick")
const emailResult = document.querySelector(".emailResult")

const emailRegExp = /\w@gmail.com$/

emailClick.addEventListener("click", () => {
    const newEmailValue = emailInput.value.split(" ")
    if(emailRegExp.test(newEmailValue.join(""))){
        emailResult.innerHTML = "Отличчно"
        emailResult.style.color = "limegreen"
    }else {
        emailResult.innerHTML = " Неверно"
        emailResult.style.color = "red"
    }
})

// 2 Задача
let position = 0
function blockRecursion(){
    position++;
    if (position > 1250) return;
    document.querySelector(".block").style.left = position + 'px';
    blockRecursion()
}
blockRecursion()
