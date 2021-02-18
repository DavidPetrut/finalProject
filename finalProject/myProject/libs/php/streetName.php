<?php

    $executionStartTime = microtime(true) / 1000;
    $url ='http://api.geonames.org/streetNameLookupJSON?formatted=true&q=' . $_REQUEST['q'] . '&username=David112&style=full';
    include 'main.php';
    $output['data'] = $decode['address'];

    include 'header.php';
?>