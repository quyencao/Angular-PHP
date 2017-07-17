(function () {

    angular.module('app')
        .controller('UpdateCreateModalInstanceController', ['$uibModalInstance', 'product', 'categories', 'dataService', '$route', UpdateCreateModalController]);

    function UpdateCreateModalController($uibModalInstance, product, categories, dataService, $route) {
        var updateCreateModal = this;

        if(jQuery.isEmptyObject(product)) {
            updateCreateModal.header = 'Create Product';
            updateCreateModal.product = { category_id : categories[0].id };
        } else {
            updateCreateModal.header = 'Update Product';
            updateCreateModal.product = product;
        }
        updateCreateModal.categories = categories;

        updateCreateModal.ok = function () {
            $uibModalInstance.close();
        };

        updateCreateModal.cancel = function () {
            $uibModalInstance.dismiss();
        };

        updateCreateModal.submitForm = function (isValid) {
            if(isValid) {
                if(jQuery.isEmptyObject(product)) {
                    // Create
                    dataService.createProduct(updateCreateModal.product)
                        .then(function (message) {
                            $uibModalInstance.close(message);
                            $route.reload();
                        })
                        .catch(handleError);
                } else {
                    // Update
                    dataService.updateProduct(updateCreateModal.product)
                        .then(function (message) {
                            $uibModalInstance.close(message);
                        })
                        .catch(handleError);
                }
            }
            // updateCreateModal.ok();
        };

        function handleError() {
        }
    }

}());