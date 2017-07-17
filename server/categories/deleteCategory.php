<?php
    require_once ('../classes/Database.php');

    $postDataJSON = file_get_contents("php://input");

    $postData = json_decode($postDataJSON);

    if(!empty($postData->categoryId)) {
        $rowCount = Database::deleteCategory($postData->categoryId);
        if($rowCount == 1) {
            echo "Delete Success";
        } else {
            echo "Delete Fail";
        }
    } else {
        echo "Category Not Exist";
    }