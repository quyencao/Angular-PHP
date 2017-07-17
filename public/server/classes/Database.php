<?php

class Database
{
    private static $conn;

    public static function getConnection() {
        if(is_null(self::$conn)) {
            self::$conn = new PDO("mysql:host=localhost;dbname=sample", 'root', '');
            self::$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }

        return self::$conn;
    }

    public static function fetchAll($query) {
        $connection = self::getConnection();
        $stmt = $connection->prepare($query);
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        return $stmt->fetchAll();
    }

    public static function selectById($table, $id) {
        $query = "SELECT * FROM " . $table . " WHERE id = :id";

        $connection = self::getConnection();
        $stmt = $connection->prepare($query);
        $stmt->bindParam(':id', $id);
        $stmt->execute();
        $stmt->setFetchMode(PDO::FETCH_ASSOC);

        return $stmt->fetch();
    }

    public static function selectAllProducts() {
        $query = "SELECT p.id, p.name, p.description, p.price, p.image, p.category_id, c.name AS categoryName 
            FROM products AS p INNER JOIN categories AS c ON p.category_id = c.id";

        return self::fetchAll($query);
    }

    public static function selectAllCategories() {
        $query = "SELECT * FROM categories";

        return self::fetchAll($query);
    }

    public static function updateProduct($data) {
        $query = "UPDATE products SET name = :name, price = :price, image = :image, 
            description = :description, category_id = :category_id WHERE id = :id";

        $connection = self::getConnection();
        $update = $connection->prepare($query);
        $update->bindParam(':name', $data['name']);
        $update->bindParam(':price', $data['price']);
        $update->bindParam(':image', $data['image']);
        $update->bindParam(':description', $data['description']);
        $update->bindParam(':category_id', $data['category_id']);
        $update->bindParam(':id', $data['id']);

        $update->execute();
        return $update->rowCount();
    }

    public static function createProduct($data) {
        $query = "INSERT INTO products(name, description, price, category_id, image) 
                VALUES(:name, :description, :price, :category_id, :image)";

        $connection = self::getConnection();
        $insert = $connection->prepare($query);
        $insert->execute(array(
            ':name' => $data['name'],
            ':description' => $data['description'],
            ':price' => $data['price'],
            ':category_id' => $data['category_id'],
            ':image' => $data['image']
        ));

        return 1;

//        $connection->exec($insert);
//        return $insert->rowCount();
    }

    public static function deleteProduct($id) {
        $query = "DELETE FROM products WHERE id = :id";

        $connection = self::getConnection();
        $delete = $connection->prepare($query);
        $delete->bindParam(':id', $id);
        $delete->execute();

        return $delete->rowCount();
    }
}