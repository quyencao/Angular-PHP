(function () {

    angular.module('app')
        .factory('dataService', ['$http', '$log', dataService]);

    function dataService($http, $log) {

        var baseProductUrl = '/server/products/';

        return {
            getAllProducts: getAllProducts,
            removeProduct: removeProduct
        };

        function getAllProducts() {
            var url = baseProductUrl + 'getAllProducts.php';

            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
                .catch(getAllProductsError);
        }
        
        function removeProduct(productId) {
            var url = baseProductUrl + 'deleteProduct.php';

            return $http.post(url, { productId: productId })
                    .then(function (response) {
                        return response.data;
                    })
                .catch(removeProductError);
        }

        function removeProductError(response) {
            console.log(response.status);
        }

        function getAllProductsError(reason) {
            $log.error(reason);
        }

    }

}());