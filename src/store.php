<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

date_default_timezone_set('Africa/Casablanca');

require __DIR__ . '/../vendor/autoload.php';

// Dotenv
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();


$client = new Google_Client();
$client->setApplicationName('Google Sheets API PHP Quickstart');
$client->setScopes([\Google_Service_Sheets::SPREADSHEETS]);
$client->setAccessType('offline');
$client->setAuthConfig(__DIR__ . '/credentials.json');

$service = new Google_Service_Sheets($client);

$spreadsheetId = "1ubJxP8Xc7DJQW4705No-k3RTf8PK8UjoUrE1LDRHCAI";

$options = array('valueInputOption' => 'RAW');

$values = [
    [
        $_POST['full_name'],
        $_POST['phone'],
        $_POST['address'],
        $_POST['count'],
        date("Y/m/d , h:i:sa")
    ]
];

$body   = new Google_Service_Sheets_ValueRange(['values' => $values]);

$result = $service->spreadsheets_values->append($spreadsheetId, 'A1:C1', $body, $options);

echo json_encode([
    'success' => true
]);

exit;
