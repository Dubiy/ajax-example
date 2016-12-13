<?php

//sleep(3);
    if (isset($_GET['mode']) && $_GET['mode'] == 'give me json') {
        echo json_encode([
            'simple' => 'hello',
            'user' => @$_GET['user'] ?: ['empty']
        ]);
        return;

    }
    echo date('Y-m-d H:i:s');
    print_r($_SERVER);
    print_r($_POST);
    print_r($_GET);