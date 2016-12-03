<?php
// 判断参数是否都有
if(!$_POST['send_sex'] || !$_POST['send_birthday'] || !$_POST['send_high'] || !$_POST['send_weight'] || !$_POST['send_father_h'] || !$_POST['send_mother_h']){
	die(json_encode('缺少参数'));
}else{
	
	$d1=time();
	$d2=strtotime($_POST['send_birthday']);
	$date_time=time()-strtotime($_POST['send_birthday']);
    echo getMonthNum($d2,$d1);	

 
 
 exit;



require_once("app.conf.php");

$mysqliObj = new mysqli($dbhost,$dbuser,$dbpwd,$dbname);

if(mysqli_connect_errno()){
 echo "连接失败".mysqli_connect_error();
 exit();
}else{
	$query="SELECT p3,p25,p97 FROM health";
    $result=$mysqliObj->query($query);	
}

if ($result->num_rows > 0) {
    // 输出每行数据
    while($row = $result->fetch_assoc()) {
        echo "<br> p3: ". $row["p3"];
        echo "<br> p25: ". $row["p25"];
        echo "<br> p97: ". $row["p97"];
    }
} else {
    echo "0 个结果";
}
$result->free();
$mysqliObj->close();

}

function getMonthNum($date1_stamp,$date2_stamp){
//$date1_stamp=strtotime($date1);
//$date2_stamp=strtotime($date2);
list($date_1['y'],$date_1['m'])=explode("-",date('Y-m',$date1_stamp));
list($date_2['y'],$date_2['m'])=explode("-",date('Y-m',$date2_stamp));
return abs($date_1['y']-$date_2['y'])*12 +$date_2['m']-$date_1['m'];
}
 


?>