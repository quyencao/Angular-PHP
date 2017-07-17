<?php
    require_once('../classes/Database.php');

    $products = Database::selectAllProducts();

    $productsJSON = json_encode($products);

    echo $productsJSON;