var app = angular.module("appa", []);

app.controller("controlador", function($scope){
 $scope.nombre="";
 $scope.datos="";
 var opciones =[{raza:"chiguagua"},{raza:"beduino"}];
 $scope.razas=opciones;
 $scope.razaSeleccionada={};
console.log($scope.razas);


});