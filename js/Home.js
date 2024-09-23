

const noakhaliBtn = document.getElementById("noakhali_btn");


noakhaliBtn.addEventListener("click", (e)=>{

    const mainAmount = document.getElementById("main_amount").innerText;
    const mainAmountNumber = parseFloat(mainAmount);

    let noakhaliAmount = document.getElementById("noakhali_amount").innerText;
    const noakhaliInput = document.getElementById("noakhali_input").value;

    let noakhaliAmountNumber = parseFloat(noakhaliAmount);
    let noakhaliInputNumber = parseFloat(noakhaliInput);
    
    if(noakhaliInputNumber < 0){
       alert("Plz add some positive amount;")
    }
    else if(isNaN(noakhaliInputNumber)){
        alert("Plz add some amount;")

    }
    else{
        let newAmountNoakhali = noakhaliAmountNumber + noakhaliInputNumber;
        let newMainAmount = mainAmountNumber - noakhaliInputNumber;
    
    
       
        document.getElementById("noakhali_amount").innerText = newAmountNoakhali
        document.getElementById("main_amount").innerText = newMainAmount;

    }
   

   

})