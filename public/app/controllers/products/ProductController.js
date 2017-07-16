(function () {

    angular.module('app')
        .controller('ProductController', ['dataService', '$log', '$route', ProductController]);
    
    
    function ProductController(dataService, $log, $route) {
        var vm = this;

        vm.search = '';
        vm.currentDeleteProductId = null;

        vm.deleteProduct = function () {
            // vm.currentDeleteProductId = null;
            jQuery('#deleteConfirmModal').modal('hide');
            jQuery('.modal-backdrop').remove();
            dataService.removeProduct(vm.currentDeleteProductId)
                .then(function (response) {
                    console.log(response);
                    $route.reload();
                })
                .catch(handleError);
        };

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