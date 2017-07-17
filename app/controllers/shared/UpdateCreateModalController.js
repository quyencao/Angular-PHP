(function () {

    angular.module('app')
        .controller('UpdateCreateModalController', ['$uibModal', '$log', 'dataService', UpdateCreateModalController]);

    function UpdateCreateModalController($uibModal, $log, dataService) {
        var updateCreateModal = this;

        updateCreateModal.animationsEnabled = true;
        updateCreateModal.product = {} ;

        updateCreateModal.open = function (size, product, parentSelector) {
            if(product) {
                updateCreateModal.product = product;
            }
            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.confirm-modal ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: updateCreateModal.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/templates/UpdateCreateModal.html',
                controller: 'UpdateCreateModalInstanceController',
                controllerAs: 'updateCreateModal',
                size: size,
                appendTo: parentElem,
                resolve: {
                    product: function () {
                        return updateCreateModal.product;
                    },
                    categories: function () {
                        return dataService.getAllCategories();
                    }
                }
            });

            modalInstance.result.then(function () {

            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };


    }

}());