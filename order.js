function orderArrayByAttribute(arr,att,order){
    var newArr = [];
    for (i = 0;i < arr.length;i++){
        var item = arr[i][att];
        var index = newArr.length;
        for (j=0;j < newArr.length;j++){
            if(order == "desc"){
                if(item > newArr[j][att]){
                    index = j;
                    break;
                }
            }
            if(order == "asc"){
                if(item < newArr[j][att]){
                    index = j;
                    break;
                }
            }
        }
        newArr.splice(index,0,arr[i]);
    }
    return newArr;
}
