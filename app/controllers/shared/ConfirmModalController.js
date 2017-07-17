(function () {

    angular.module('app')
        .controller('ConfirmModalController', ['$uibModal', '$log', '$document', ConfirmModalController]);

    function ConfirmModalController($uibModal, $log, $document) {
        var confirmModal = this;

        confirmModal.animationsEnabled = true;
        confirmModal.message = null;

        confirmModal.open = function (size, deleteId, type, parentSelector) {
            var parentElem = parentSelector ?
                angular.element($document[0].querySelector('.confirm-modal ' + parentSelector)) : undefined;
            var modalInstance = $uibModal.open({
                animation: confirmModal.animationsEnabled,
                ariaLabelledBy: 'modal-title',
                ariaDescribedBy: 'modal-body',
                templateUrl: 'app/templates/ConfirmModal.html',
                controller: 'ConfirmModalInstanceController',
                controllerAs: 'confirmModal',
                size: size,
                appendTo: parentElem,
                resolve: {
                    deleteId: function () {
                        return deleteId;
                    },
                    type: function () {
                        return type;
                    }
                }
            });

            modalInstance.result.then(function (message) {
                confirmModal.message = message;
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        };


    }

}());