var app = angular.module("shoppingcart", []);

app.controller("shoppingCtrl", function($scope){
  $scope.products = [
    {
      name: "Apple Pie",
      desc: "Decadent apple pie", 
      price: 30,
      quantity: 1,
      subTotal: 0,
      image: "http://i.imgur.com/z8DpWnN.jpg"
    },
    {
      name: "Blackberry Smoothie",
      desc: "Luscious Blackberry Smoothie", 
      price: 50,
      quantity: 1,
      subTotal: 0,
      image: "http://i.imgur.com/Mk8377O.jpg"
    },
    {
      name: "Jungle Juice",
      desc: "Healthy Jungle Juice", 
      price: 80,
      quantity: 1,
      subTotal: 0,
      image: "http://i.imgur.com/xp7qAAR.jpg"
    },
    {
      name: "Tequila",
      desc: "Mexican Tequila", 
      price: 60,
      quantity: 1,
      subTotal: 0,
      image: "http://i.imgur.com/DnMXFex.jpg"
    }
  ];

   $scope.cart = [];

   $scope.addItem = function(product){
    $scope.cart.push({
      name: product.name,
      quantity: product.quantity,
      price: product.price,
      subTotal: product.price * product.quantity
    });
   };

   $scope.removeItem = function(index){
    $scope.cart.splice(index, 1);
   };

   $scope.totalPrice = function () {
        var total = 0;
        $scope.cart.forEach(function (item) {
            total += item.subTotal;
        });
        return total;
    };
});