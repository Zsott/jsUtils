function checkRounding(value, prec){
    var rValue = value.toFixed(prec).split(".");
    if(rValue[0] == 0 && rValue[1] == 0){
        return 0;
    }
    else if(rValue[1] == 0){
        return value;
    }
    else{
        return value.toFixed(prec).replace(".",",");
    }
}
