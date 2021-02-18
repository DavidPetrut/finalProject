<?php
    $executionStartTime = microtime(true) / 1000;
    $url = 'http://api.geonames.org/neighbourhoodJSON?formatted=true&lat=' . $_REQUEST['lat'] . '&lng=' . $_REQUEST['lng'] . '&username=David112&style=full';
    include 'main.php';
    $output['data'] = $decode['neighbourhood'];

    include 'header.php';
?>