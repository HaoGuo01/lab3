var tip_percent = document.querySelector("#tip_percent");
var tp_input = document.querySelector("#tp_input");
var bill = document.querySelector("#bill");
var tip_percentage = document.querySelector("#tip_percentage");
var tip_amount = document.querySelector("#tip_amount");
var total_bill = document.querySelector("#total_bill");
let isNum = /^[0-9]*\.?[0-9]*$/;
tip_percent.textContent = tp_input.value + "%";
// tip_percentage.value = tp_input.value + "%";
bill.addEventListener("input", (event) => {
    if(isNum.test(event.target.value)) {
        document.getElementById("warn").style.visibility="hidden";
        tip_amount.value = (Number(event.target.value) * Number(tp_input.value)/100).toFixed(2);
        total_bill.value = (Number(event.target.value) + Number(tip_amount.value)).toFixed(2);
    }else {
        // console.log("Only numbers are allowed");
        document.getElementById("warn").style.visibility="visible";
        tip_amount.value = "";
        total_bill.value = "";
    }
    
});

tp_input.addEventListener("input", (event) => {
    tip_percent.textContent = event.target.value + "%";
    tip_percentage.value = event.target.value + "%";
    tip_amount.value = (Number(bill.value) * Number(event.target.value)/100).toFixed(2);
    total_bill.value = (Number(bill.value) + Number(tip_amount.value)).toFixed(2);
});
