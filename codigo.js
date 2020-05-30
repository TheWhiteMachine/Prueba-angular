var app = angular.module("appa", []);

app.controller("controlador", function($scope){
 $scope.nombre="";
 $scope.datos="";
 var opciones =[{raza:"Chiguagua"},{raza:"Barbilla"},{raza:"Doberman"},{raza:"Salchicha"},{raza:"Labrador"}];
 $scope.razas=opciones;
var extremidades =[1,2,4,5];
$scope.patasSeleccionadas=[];
 $scope.patas= extremidades;
 $scope.razaSeleccionada={};
console.log($scope.razas);
$scope.boton= {
    "background-color":"green",
    "color":"white",
    "margin-left":"20px",
    "margin-top":"15px",
    "marging-down":"15px",
    "margin-right":"20px"
}
var quitar =function(){
    seve=true;
}


});