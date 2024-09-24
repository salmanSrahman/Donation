const noakhaliBtn = document.getElementById("noakhali_btn");

const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal_close");

modalCloseBtn.addEventListener("click", (e)=>{
    closeModal();
})


function closeModal(){
    modal.classList.add("hidden","modal-hide");
    modal.classList.remove("modal-show");
    
}


function openModal() {
    modal.classList.add("modal-show");
    modal.classList.remove("hidden", "modal-hide");

}



noakhaliBtn.addEventListener("click", (e)=>{

    const mainAmountNumber = amountText("main_amount")
    const noakhaliAmountNumber = amountText("noakhali_amount");
    const noakhaliInputNumber = amountInputValue("noakhali_input");
    
    
    if(noakhaliInputNumber < 0){
       alert("Plz add some positive amount;")
    }
    else if(isNaN(noakhaliInputNumber)){
        alert("Plz add some amount;")
        
    }
    else if(mainAmountNumber == 0 || noakhaliInputNumber > mainAmountNumber){
        alert("You dont have enough balance.")
    }
    else{
        let newAmountNoakhali = noakhaliAmountNumber + noakhaliInputNumber;
        let newMainAmount = mainAmountNumber - noakhaliInputNumber;

        document.getElementById("noakhali_amount").innerText = newAmountNoakhali
        document.getElementById("main_amount").innerText = newMainAmount;

    
        document.getElementById("noakhali_input").value = "";
        openModal();

    }


})



