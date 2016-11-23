<?php
require('/Classes/PHPExcel.php');//引入PHP EXCEL类
function format_excel2array($filePath='',$sheet=0){
        if(empty($filePath) or !file_exists($filePath)){die('file not exists');}
        $PHPReader = new PHPExcel_Reader_Excel2007();        //建立reader对象
        if(!$PHPReader->canRead($filePath)){
                $PHPReader = new PHPExcel_Reader_Excel5();
                if(!$PHPReader->canRead($filePath)){
                        echo 'no Excel';
                        return ;
                }
        }
        $PHPExcel = $PHPReader->load($filePath);        //建立excel对象
        $currentSheet = $PHPExcel->getSheet($sheet);        //**读取excel文件中的指定工作表*/
        $allColumn = $currentSheet->getHighestColumn();        //**取得最大的列号*/
        $allRow = $currentSheet->getHighestRow();        //**取得一共有多少行*/
        $data = array();
        for($rowIndex=1;$rowIndex<=$allRow;$rowIndex++){        //循环读取每个单元格的内容。注意行从1开始，列从A开始
                for($colIndex='A';$colIndex<=$allColumn;$colIndex++){
                        $addr = $colIndex.$rowIndex;
                        $cell = $currentSheet->getCell($addr)->getValue();
                        if($cell instanceof PHPExcel_RichText){ //富文本转换字符串
                                $cell = $cell->__toString();
                        }
                        $data[$rowIndex][$colIndex] = $cell;
                }
        }
        return $data;
}
 
 
//使用方法：
                        $filePath = './height.xls';        //钻石库存文件
                        $data = format_excel2array($filePath);
                   //   echo "<pre>";var_dump($data);exit;
				//		print_r($data);die;
						
/*存数据库		
$con = mysql_connect("localhost","root","root");

mysql_select_db("test", $con);

for($i=1;$i<count($data);$i++){
	mysql_query("INSERT INTO health (year,month,age_moon,p3,p10,p25,p50,p75,p90,p97,kind,sex)  VALUES ('".$data[$i]["A"]."','".$data[$i]["B"]."','".$data[$i]["C"]."','".$data[$i]["D"]."','".$data[$i]["E"]."','".$data[$i]["F"]."','".$data[$i]["G"]."','".$data[$i]["H"]."','".$data[$i]["I"]."','".$data[$i]["J"]."','".$data[$i]["K"]."','".$data[$i]["L"]."')")or die (mysql_error());
}

mysql_close($con);			
						
*/						
						
?>