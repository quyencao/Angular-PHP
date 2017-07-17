(function () {

    angular.module('app')
        .controller('ConfirmModalInstanceController', ['$uibModalInstance', 'deleteId', 'dataService', '$route', ConfirmModalInstanceController]);

    function ConfirmModalInstanceController($uibModalInstance, deleteId, dataService, $route) {
        var confirmModal = this;

        confirmModal.deleteId = deleteId;

        confirmModal.ok = function () {
            dataService.removeProduct(confirmModal.deleteId)
                .then(function (response) {
                    $uibModalInstance.close('Delete Success');
                    $route.reload();
                })
                .catch(handleError);

        };

        function handleError(reason) {}

        confirmModal.cancel = function () {
            $uibModalInstance.dismiss();
        };
    }

}());