<?php
$frm_action=$_GET['action'];
if ($frm_action == 'check') {
	$gradeName = $_GET['username'];
	$mysql = new SaeMysql();
	$sql = "SELECT 邮箱 FROM lt_user where 邮箱='$gradeName'";

	$result = $mysql -> getline($sql);
	if ($result) {
		echo '1';
	} else {
		echo '0';
	}
	exit();
}
?>