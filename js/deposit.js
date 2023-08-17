// step 1 deposit btn 
document.getElementById('btn-deposit').addEventListener('click',function(){
    // step 2 collect amount from input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // step 3 get the current total deposit
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    // step 4 total
    const currentDepositTotal = previousDepositTotal+newDepositAmount;
    // set the deposit total
    depositTotalElement.innerText=currentDepositTotal;
    // step 5 balance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step 6 current balance
    const currentBalanceTotal = previousBalanceTotal+newDepositAmount;
    // set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
    // step 7 clear deposit field
    depositField.value='';
})