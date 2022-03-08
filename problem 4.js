let sandwitch_calculator1 = function(bread){
    if(bread % 2 == 0 ){
        return bread / 2;
    }
    else{
        return "bread is not enough";
    }
    }
    console.log("Amount of entered bread: 10 and sandwitch mades: ",sandwitch_calculator1(12));
    function sandwitch_calculator(bread,cheese){
        if(bread % 2 == 0 && cheese > 1 ){
            return bread / 2;
        }
        else if(bread % 2 == 0 && cheese == 1){
            return 1;
        }
        else{
            return "bread is not enough to make sandwitch";
        }
    }
    console.log("Amount of entered bread: 15 and 1 cheese so sandwitch mades: ",sandwitch_calculator(10,1))