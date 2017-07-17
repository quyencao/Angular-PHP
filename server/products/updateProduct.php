<?php
    require_once ('../classes/Database.php');

    $postDataJSON = file_get_contents("php://input");

    $postData = json_decode($postDataJSON);

    if(!empty($postData)) {
        $id = intval($postData->id);
        $name = $postData->name;
        $description = $postData->description;
        $price = floatval($postData->price);
        $image = $postData->image;
        $category_id = intval($postData->category_id);

        $product = array(
            'id' => $id,
            'name' => $name,
            'description' => $description,
            'price' => $price,
            'image' => $image,
            'category_id' => $category_id
        );

        $rowCount = Database::updateProduct($product);

        if ($rowCount == 1) {
            echo 'Update Success';
        } else {
            echo 'Update Fail';
        }
    }

