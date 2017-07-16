(function () {

    angular.module('app')
        .filter('ShortDescriptionFilter', ShortDescriptionFilter);

    function ShortDescriptionFilter() {
        return function (description, length) {
            return description.substr(0, length) + '...';
        }
    }
}());