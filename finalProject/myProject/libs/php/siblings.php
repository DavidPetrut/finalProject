<?php
    $executionStartTime = microtime(true) / 1000;
    $url = 'http://api.geonames.org/neighboursJSON?formatted=true&&geonameId=' . $_REQUEST['geonameId'] .  '&username=David112&style=full';
    include 'main.php';  
    $output['data'] = $decode['geonames'];
    
    include 'header.php';
?>


