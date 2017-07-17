<?php
    require_once ('../classes/Database.php');

    if(!empty($_GET['productId'])) {
        $productId = intval($_GET['productId']);

        $product = Database::selectProductById($productId);

        echo json_encode($product);
    }