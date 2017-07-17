(function () {

    angular.module('app')
        .controller('ConfirmModalInstanceController', ['$uibModalInstance', 'deleteId', 'type', 'dataService', '$route', ConfirmModalInstanceController]);

    function ConfirmModalInstanceController($uibModalInstance, deleteId, type, dataService, $route) {
        var confirmModal = this;

        confirmModal.deleteId = deleteId;

        confirmModal.ok = function () {
            if(type == "product") {
                dataService.removeProduct(confirmModal.deleteId)
                    .then(function (response) {
                        $uibModalInstance.close('Delete Success');
                        $route.reload();
                    })
                    .catch(handleError);
            } else if (type == 'category') {
                dataService.removeCategory(confirmModal.deleteId)
                    .then(function () {
                        $uibModalInstance.close('Delete Success');
                        $route.reload();
                    })
                    .catch(handleError);
            }
        };

        function handleError(reason) {}

        confirmModal.cancel = function () {
            $uibModalInstance.dismiss();
        };
    }

}());