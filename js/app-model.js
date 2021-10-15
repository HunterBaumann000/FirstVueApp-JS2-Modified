function LocationCollection(){

    this.__proto__ = [];

    this.addItem = function(item){
        this.push(new ListItem(item));

        return this;
    }


    // this.deleteItem = function(item){
    //
    //
    //     return this;
    // }

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

LocationCollection.prototype = [];


function ListItem(location){

    return location;

}

function State(name, date, description, wasEnjoyable){
    this.name = name || 'State';
    this.date = date || '12/31/99';
    this.description = description || 'Description Example';
    this.wasEnjoyable = wasEnjoyable;
}

function City(name, date, description, wasEnjoyable, theCityState){
    this.name = name || 'City';
    this.date = date || '12/31/99';
    this.description = description || 'Description Example';
    this.wasEnjoyable = wasEnjoyable;
    this.theCityState = theCityState;
}