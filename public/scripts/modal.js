export default function Modal() {

    const modalWrapper = document.querySelector('.modalWrapper')
    const cancelButton = document.querySelector('.button.cancel')

    cancelButton.addEventListener("click", close)

    function open() {
        //Atribui a classe active
        modalWrapper.classList.add("active")
    }
    function close() {
        //Remove a classe active
        modalWrapper.classList.remove("active")
    }

    return {
        open,
        close
    }
}