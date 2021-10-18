function LocationCollection(){

    this.__proto__ = [];

    this.addItem = function(item){
        this.push(new ListItem(item));

        return this;
    }

    // //filter states (Not added yet)
    // this.cityItems = function(){
    //     return this.filter(function(item){
    //         return item.isState();
    //     })
    // }

    // //filter cities (Not added yet)
    // this.stateItems = function(){
    //     return this.filter(function(item){
    //         return item.isCity();
    //     })
    // }

}


function ListItem(item){

    return item;

}

function State(name, date, description, wasEnjoyable){
    this.name = name || "State";
    this.date = date;
    this.description = description;
    this.wasEnjoyable = wasEnjoyable;
}

function Country(name, date, description, wasEnjoyable, biggestDifference){
    this.name = name || "Country";
    this.date = date;
    this.description = description;
    this.biggestDifference = biggestDifference;
    this.wasEnjoyable = wasEnjoyable;
}

function City(name, date, description, wasEnjoyable, theCityState){
    this.name = name || "City";
    this.date = date;
    this.description = description;
    this.theCityState = theCityState || "State";
    this.wasEnjoyable = wasEnjoyable;
}