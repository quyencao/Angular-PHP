<?php
    require_once ('../classes/Database.php');

    $postDataJSON = file_get_contents("php://input");

    $postData = json_decode($postDataJSON);

    if($postData->productId) {
        $rowCount = Database::deleteProduct($postData->productId);
        if($rowCount == 1) {
            echo "Delete Success";
        } else {
            echo "Delete Fail";
        }
    } else {
        echo "Product Not Exist";
    }