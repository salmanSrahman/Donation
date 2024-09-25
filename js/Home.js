const noakhaliBtn = document.getElementById("noakhali_btn");
const feniBtn = document.getElementById("feni_btn");
const quotaBtn = document.getElementById("quota_btn");

window.addEventListener("scroll", function() {
    const header = document.getElementById("header");
  
    if (window.scrollY > 30) { 
      header.classList.add("bg-white/90");  
      header.classList.remove("bg-[#F9F7F3]");
    } else {
      header.classList.add("bg-[#F9F7F3]");  
      header.classList.remove("bg-white/90"); 
    }
  });
//   bg change with scroll function


  document.getElementById("blog_btn").addEventListener("click", ()=>{
    window.location.href = "/blog.html"
  });
// routing from home page to blog page
  
  


const donationPart = document.getElementById("donation_part");
const transactionPart = document.getElementById("transaction_part");

const donationBtn = document.getElementById("donation_btn");
const historyBtn = document.getElementById("history_btn");

donationBtn.addEventListener("click", ()=>{
    donationPart.classList.add("hidden");
    transactionPart.classList.add("hidden");

    // button design toggle
    historyBtn.classList.remove("bg-[#B4F461]", "border-[#b4F461]");
    historyBtn.classList.add("border-[#1111]/30");
    
    // donation part shown
    donationPart.classList.remove("hidden");
    donationBtn.classList.add("bg-[#B4F461]", "border-[#b4F461]");
})
historyBtn.addEventListener("click", ()=>{
    donationPart.classList.add("hidden");
    transactionPart.classList.add("hidden");

    // button design toggle
    donationBtn.classList.remove("bg-[#B4F461]", "border-[#b4F461]");
    donationBtn.classList.add("border-[#1111]/30");
    
    // transaction part shown
    transactionPart.classList.remove("hidden");
    historyBtn.classList.add("bg-[#B4F461]", "border-[#b4F461]");
})

// routing & active button between donate & history



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
        let newAmountNoakhali = (noakhaliAmountNumber + noakhaliInputNumber).toFixed(2);
        let newMainAmount = (mainAmountNumber - noakhaliInputNumber).toFixed(2);

        document.getElementById("noakhali_amount").innerText = newAmountNoakhali
        document.getElementById("main_amount").innerText = newMainAmount;

        
        document.getElementById("noakhali_input").value = "";

        // modal close function
        openModal("noakhali_modal");

        // transaction history function
        transaction(noakhaliInputNumber, "Flood Relief in Noakhali, Bangladesh");
       
    }

})
// donation fuinction for noakhali



feniBtn.addEventListener("click", (e)=>{

    const mainAmountNumber = amountText("main_amount")
    const feniAmountNumber = amountText("feni_amount");
    const feniInputNumber = amountInputValue("feni_input");
    
    
    if(feniInputNumber < 0){
       alert("Plz add some positive amount;")
    }
    else if(isNaN(feniInputNumber)){
        alert("Plz add some amount;")
        
    }
    else if(mainAmountNumber == 0 || feniInputNumber > mainAmountNumber){
        alert("You dont have enough balance.")
    }
    else{
        let newAmountFeni = (feniAmountNumber + feniInputNumber).toFixed(2);
        let newMainAmount = (mainAmountNumber - feniInputNumber).toFixed(2);

        document.getElementById("feni_amount").innerText = newAmountFeni
        document.getElementById("main_amount").innerText = newMainAmount;

    
        document.getElementById("feni_input").value = "";

        // modal close function
        openModal("feni_modal");

        // transaction history function
        transaction(feniInputNumber, "Flood Relief in Feni, Bangladesh");
    }

})
// donation fuinction for feni



quotaBtn.addEventListener("click", (e)=>{

    const mainAmountNumber = amountText("main_amount")
    const quotaAmountNumber = amountText("quota_amount");
    const quotaInputNumber = amountInputValue("quota_input");
    
    
    if(quotaInputNumber < 0){
       alert("Plz add some positive amount;")
    }
    else if(isNaN(quotaInputNumber)){
        alert("Plz add some amount;")
        
    }
    else if(mainAmountNumber == 0 || quotaInputNumber > mainAmountNumber){
        alert("You dont have enough balance.")
    }
    else{
        let newAmountQuota = (quotaAmountNumber + quotaInputNumber).toFixed(2);
        let newMainAmount = (mainAmountNumber - quotaInputNumber).toFixed(2);

        document.getElementById("quota_amount").innerText = newAmountQuota
        document.getElementById("main_amount").innerText = newMainAmount;

    
        document.getElementById("quota_input").value = "";

        //modal close function 
        openModal("quota_modal");

        // transaction history function
        transaction(quotaInputNumber, "Injured in the Quota Movement");
    }

})
// donation fuinction for quota movement



document.getElementById("noakhali_modal_close").addEventListener("click", (e)=>{
    modalClose("noakhali_modal")

});

document.getElementById("feni_modal_close").addEventListener("click", (e)=>{
    modalClose("feni_modal")

});

document.getElementById("quota_modal_close").addEventListener("click", (e)=>{
    modalClose("quota_modal")

});
// all three modal close



