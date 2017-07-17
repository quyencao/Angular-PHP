<?php
    require_once ('../classes/Database.php');

    $categories = Database::selectAllCategories();

    echo json_encode($categories);