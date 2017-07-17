(function () {

    angular.module('app')
        .controller('SingleProductController', ['$routeParams', 'dataService', SingleProductController]);
    
    function SingleProductController($routeParams, dataService) {

        var vm = this;

        vm.productId = $routeParams.id;

        dataService.getSingleProduct(vm.productId)
            .then(function (product) {
               vm.product = product;
            });

    }

}());