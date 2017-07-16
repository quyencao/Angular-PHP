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
        $query = "SELECT p.id, p.name, p.description, p.price, p.image, c.name AS categoryName 
            FROM products AS p INNER JOIN categories AS c ON p.category_id = c.id";

        return self::fetchAll($query);
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