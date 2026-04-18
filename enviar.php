<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

$servername = "localhost";
$username = "root";
$password = "";
$database = "nextwave";

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
    die("ERRO CONEXÃO: " . $conn->connect_error);
}

$nome = $_POST['nome'] ?? '';
$email = $_POST['email'] ?? '';
$telefone = $_POST['telefone'] ?? '';
$objetivo = $_POST['objetivo'] ?? '';

$sql = "INSERT INTO contatos (nome, email, telefone, objetivo)
VALUES ('$nome', '$email', '$telefone', '$objetivo')";

if ($conn->query($sql) === TRUE) {
    echo "SUCESSO";
} else {
    echo "ERRO SQL: " . $conn->error;
}

$conn->close();
?>