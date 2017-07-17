(function () {

    angular.module('app')
        .controller('ProductController', ['dataService', '$log', '$route', ProductController]);
    
    
    function ProductController(dataService, $log, $route) {
        var vm = this;

        vm.search = '';
        vm.currentDeleteProductId = null;

        dataService.getAllProducts()
            .then(function (products) {
                vm.allProducts = products;
            })
            .catch(handleError);

        function handleError(reason) {
            $log.error(reason);
        }
    }

}());