function LocationCollection(){

    this.__proto__ = [];

    this.addItem = function(item){
        this.push(new ListItem(item));

        return this;
    }

    // //filter states
    // this.cityItems = function(){
    //     return this.filter(function(item){
    //         return !item.isAvailable();
    //     })
    // }

    // //filter cities
    // this.stateItems = function(){
    //     return this.filter(function(item){
    //         return !item.isAvailable();
    //     })
    // }

}

LocationCollection.prototype = [];


function ListItem(location){

    return location;

}

function State(name, date, description, wasEnjoyable){
    this.name = name || 'NAME';
    this.date = date || '12/31/99';
    this.description = description;
    this.wasEnjoyable = wasEnjoyable;
}

function City(name, date, description, wasEnjoyable, theCityState){
    this.name = name || 'NAME';
    this.date = date || '12/31/99';
    this.description = description;
    this.wasEnjoyable = wasEnjoyable;
    this.theCityState = theCityState;
}