function test(){

    var nunberA = parseInt(document.getElementById("nunber1").value);
    var nunberB = parseInt(document.getElementById("nunber2").value);
    var nunberC=(nunberA%nunberB)


    if((nunberA%nunberB)==0)
        { var number = nunberA/nunberB;
        result = "一人あたり"+number.toLocaleString()+"円";}
        else{
            var numberE=Math.floor(nunberA/nunberB);
            var numberF=Math.floor((nunberA/nunberB)+nunberC);
            result=(nunberB-nunberC)+"人は"+numberE.toLocaleString()+"円"+"</br>"+nunberC+"人は"+
            (numberE+1).toLocaleString()+"円";
        };
    document.getElementById("result").innerHTML= result;
    };