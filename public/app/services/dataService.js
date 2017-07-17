(function () {

    angular.module('app')
        .factory('dataService', ['$http', '$log', dataService]);

    function dataService($http, $log) {

        var baseProductUrl = '/server/products/';
        var baseCategoryUrl = '/server/categories/';

        return {
            getAllProducts: getAllProducts,
            removeProduct: removeProduct,
            createProduct: createProduct,
            updateProduct: updateProduct,
            getAllCategories: getAllCategories
        };

        function getAllProducts() {
            var url = baseProductUrl + 'getAllProducts.php';

            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
                .catch(handlesError);
        }

        function getAllCategories() {
            var url = baseCategoryUrl + 'getAllCategories.php';

            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
                .catch(handlesError);
        }
        
        function removeProduct(productId) {
            var url = baseProductUrl + 'deleteProduct.php';

            return $http.post(url, { productId: productId })
                    .then(function (response) {
                        return response.data;
                    })
                .catch(removeProductError);
        }

        function createProduct(product) {
            var url = baseProductUrl + 'createProduct.php';

            return $http.post(url, product)
                .then(function (response) {
                    return response.data;
                })
                .catch(handlesError);
        }

        function updateProduct(product) {
            var url = baseProductUrl + 'updateProduct.php';

            return $http.post(url, product)
                .then(function (response) {
                    return response.data;
                })
                .catch(handlesError);
        }

        function removeProductError(response) {
            console.log(response.status);
        }

        function handlesError(reason) {
            $log.error(reason);
        }

    }

}());