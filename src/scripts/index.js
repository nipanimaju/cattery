// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
// Import any additional modules you want to include below \/


// \/ All of your javascript should go here \/

let copyEmail = () => {
    const button = document.querySelector(".button-copy")
    const copyText = document.getElementById("staticEmail");
    const modal = document.querySelector(".modal-hide")
    button.addEventListener("click", (e) => {
        copyText.select();
        copyText.setSelectionRange(0, 99999)
        document.execCommand("copy");
        modal.classList.add('modal-show')
        modal.classList.remove('modal-hide')
        setTimeout(function () {
            modal.classList.add('modal-hide')
            modal.classList.remove('modal-show')
        }, 1200);
    })
}
copyEmail()
