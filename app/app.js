(function () {

    var app = angular.module('app', ['ngRoute', 'ui.bootstrap']);

    app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider
            .when('/', {
               redirectTo: '/products'
            })
            .when('/products', {
               templateUrl: '/app/templates/Products.html',
               controller: 'ProductController',
               controllerAs: 'products'
            })
            .when('/products/:id', {
               templateUrl: '/app/templates/SingleProduct.html',
               controller: 'SingleProductController',
               controllerAs: 'product'
            })
            .when('/categories', {
               templateUrl: '/app/templates/Categories.html',
               controller: 'CategoryController',
               controllerAs: 'categories'
            })
            .otherwise('/products');

    }]);

}());