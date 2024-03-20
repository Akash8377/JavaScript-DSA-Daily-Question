function bonAppetit(bill, k, b) {
    let billSum = 0;
    bill.splice(k, 1);
    for(let i = 0 ; i<bill.length;i++){
        billSum=billSum+bill[i]
    }
    billSum= billSum/2
    if(billSum==b){
        console.log("Bon Appetit")
    }else{
        console.log(b-billSum)
    }
   
}
bonAppetit([3,10,2,9],1,7)