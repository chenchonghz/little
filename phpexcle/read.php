<?php
require('/Classes/PHPExcel.php');//����PHP EXCEL��
function format_excel2array($filePath='',$sheet=0){
        if(empty($filePath) or !file_exists($filePath)){die('file not exists');}
        $PHPReader = new PHPExcel_Reader_Excel2007();        //����reader����
        if(!$PHPReader->canRead($filePath)){
                $PHPReader = new PHPExcel_Reader_Excel5();
                if(!$PHPReader->canRead($filePath)){
                        echo 'no Excel';
                        return ;
                }
        }
        $PHPExcel = $PHPReader->load($filePath);        //����excel����
        $currentSheet = $PHPExcel->getSheet($sheet);        //**��ȡexcel�ļ��е�ָ��������*/
        $allColumn = $currentSheet->getHighestColumn();        //**ȡ�������к�*/
        $allRow = $currentSheet->getHighestRow();        //**ȡ��һ���ж�����*/
        $data = array();
        for($rowIndex=1;$rowIndex<=$allRow;$rowIndex++){        //ѭ����ȡÿ����Ԫ������ݡ�ע���д�1��ʼ���д�A��ʼ
                for($colIndex='A';$colIndex<=$allColumn;$colIndex++){
                        $addr = $colIndex.$rowIndex;
                        $cell = $currentSheet->getCell($addr)->getValue();
                        if($cell instanceof PHPExcel_RichText){ //���ı�ת���ַ���
                                $cell = $cell->__toString();
                        }
                        $data[$rowIndex][$colIndex] = $cell;
                }
        }
        return $data;
}
 
 
//ʹ�÷�����
                        $filePath = './height.xls';        //��ʯ����ļ�
                        $data = format_excel2array($filePath);
                   //   echo "<pre>";var_dump($data);exit;
				//		print_r($data);die;
						
/*�����ݿ�		
$con = mysql_connect("localhost","root","root");

mysql_select_db("test", $con);

for($i=1;$i<count($data);$i++){
	mysql_query("INSERT INTO health (year,month,age_moon,p3,p10,p25,p50,p75,p90,p97,kind,sex)  VALUES ('".$data[$i]["A"]."','".$data[$i]["B"]."','".$data[$i]["C"]."','".$data[$i]["D"]."','".$data[$i]["E"]."','".$data[$i]["F"]."','".$data[$i]["G"]."','".$data[$i]["H"]."','".$data[$i]["I"]."','".$data[$i]["J"]."','".$data[$i]["K"]."','".$data[$i]["L"]."')")or die (mysql_error());
}

mysql_close($con);			
						
*/						
						
?>