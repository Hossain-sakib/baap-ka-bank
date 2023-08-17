// add event handler
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // get amount from input field
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // clear the input field
    withdrawField.value='';
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a number');
        return;
    }
    // get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    // get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    previousBalanceTotal = parseFloat(previousBalanceTotalString);

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Insufficient Balance')
        return;
    }
    // calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal+newWithdrawAmount;
    // set total withdraw amount
    withdrawTotalElement.innerText = currentWithdrawTotal;
    
    // calculate new balance total
    const newBalanceTotal = previousBalanceTotal-newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;
   

})
