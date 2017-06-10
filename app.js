(function(){

angular.module('ShoppingListCheckOff',[])
.controller('AlreadyBoughtController',AlreadyBoughtController)
.controller('ToBuyController',ToBuyController )
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
var tobuy=this;
tobuy.toBuyItems=ShoppingListCheckOffService.getToBuyItems();

tobuy.moveItem=function(index,itemName,quantity){
  ShoppingListCheckOffService.moveItem(index,itemName,quantity);
}

}
AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
var bought=this;
bought.boughtItems=ShoppingListCheckOffService.getBoughtItems();

}

function ShoppingListCheckOffService(){
var service=this;
var tobuyItems=[
    {
         name: "cookies",
         value: 10
    },
    {
         name: "Biscuits",
         value: 20
    },
    {
         name: "headphones",
         value:1
    },
    {
         name: "Iphone 7",
         value:2
    },
    {
         name: "charger",
         value:4
    }
];
var boughtItems=[];

service.moveItem=function(index,itemName,quantity){
    tobuyItems.splice(index,1);
    var item={
        name:itemName,
        value:quantity
    }

    boughtItems.push(item);
}

service.getBoughtItems=function(){
  return boughtItems;
}

service.getToBuyItems=function(){
  return tobuyItems;
}

}

})();
