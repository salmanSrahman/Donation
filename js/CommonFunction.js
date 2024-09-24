

const amountText = (id) =>{
    const amount = document.getElementById(id).innerText;
    const amountNumber = parseFloat(amount);
    return amountNumber;

}

const amountInputValue = (id) =>{
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;

}


function openModal(id) {
    document.getElementById(id).classList.add("modal-show");
    document.getElementById(id).classList.remove("hidden", "modal-hide");

}

function modalClose(id){
    document.getElementById(id).classList.add("hidden","modal-hide");
    document.getElementById(id).classList.remove("modal-show");
}




