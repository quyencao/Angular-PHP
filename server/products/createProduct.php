<?php
    require_once ('../classes/Database.php');

    $postDataJSON = file_get_contents("php://input");

    $postData = json_decode($postDataJSON);

    if(!empty($postData)) {
        $name = $postData->name;
        $description = $postData->description;
        $price = floatval($postData->price);
        $image = $postData->image;
        $category_id = intval($postData->category_id);

        $product = array(
            'name' => $name,
            'description' => $description,
            'price' => $price,
            'image' => $image,
            'category_id' => $category_id
        );

        $rowCount = Database::createProduct($product);

        if ($rowCount == 1) {
            echo 'Create Success';
        } else {
            echo 'Create Fail';
        }
    }