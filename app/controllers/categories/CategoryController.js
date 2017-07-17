(function () {

    angular.module('app')
        .controller('CategoryController', ['dataService', CategoryController]);

    function CategoryController(dataService) {
        var vm = this;

        dataService.getAllCategories()
            .then(function (categories) {
                vm.allCategories = categories;
            })
            .catch(handleError);

        function handleError() {}
    }

}());