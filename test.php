
<?php
/**
 * Created by PhpStorm.
 * User: zvorskyi
 * Date: 21.12.2015
 * Time: 10:03
 */
phpinfo(INFO_MODULES);
/*
$conn = oci_connect('TESTDTA', 'TESTDTA', '192.168.0.124/JDE91DB');
if (!$conn) {
    $e = oci_error();
    trigger_error(htmlentities($e['message'], ENT_QUOTES), E_USER_ERROR);
}

$stid = oci_parse($conn, 'SELECT * FROM F0101');
oci_execute($stid);

if ($stid){

    print_r (oci_fetch_array($stid, OCI_ASSOC+OCI_RETURN_NULLS));
}*/