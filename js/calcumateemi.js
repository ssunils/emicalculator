function calcumateemi(tenure,amount,interest,month){
    var monthlyInterestRatio = (interest/100)/12;
    var top = Math.pow((1+monthlyInterestRatio),tenure);
    var bottom = top -1;
    var sp = top / bottom;
    var emi = ((amount * monthlyInterestRatio) * sp);
    return Math.floor(emi);
}
function getInterest(tenure,amount,interest,month){
    var inte = (interest/100)
}