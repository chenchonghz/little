<?php
header('Content-Type:text/html;Charset=utf-8;');
//$dir = dirname(__FILE__);  //找出当前脚本所在路径
 require '\Classes\PHPExcel.php'; //添加读取excel所需的类文件

 $objPHPExcel = new PHPExcel();                     //实例化一个PHPExcel()对象
 $objSheet = $objPHPExcel->getActiveSheet();        //选取当前的sheet对象
 $objSheet->setTitle('helen');                      //对当前sheet对象命名
 //常规方式：利用setCellValue()填充数据
// $objSheet->setCellValue("A1","eee快快快")->setCellValue("B1",iconv('utf-8','gb2312','ID号'));   //利用setCellValues()填充数据
 //取巧模式：利用fromArray()填充数据

 $array = array(
     array("11","A1",'哈哈'),
     array("22","B1","fff"),
     array("33","B2","李四")
 ); 
 $objSheet->fromArray($array);  //利用fromArray()直接一次性填充数据
 $objWriter = PHPExcel_IOFactory::createWriter($objPHPExcel,'Excel2007');   //设定写入excel的类型
 $objWriter->save('./test.xlsx');       //保存文件
 ?>