

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


function transaction(input, place){
    const transDev = document.createElement("div");
        transDev.classList.add("px-5", "py-6", "border", "border-solid", "border-[#111111]/50", "rounded-md", "my-2");
        transactionPart.appendChild(transDev);


        const h4 = document.createElement("h4");
        const p = document.createElement("p");
        
        h4.innerText = `${input} Taka is Donated for ${place}.`;
        h4.classList.add("text-[#111111]", "text-lg", "font-semibold")
        
        p.innerText = `Date: ${new Date()}`
        p.classList.add("text-[#111111]/70", "text-base", "font-medium")


        transDev.appendChild(h4);
        transDev.appendChild(p);
}

