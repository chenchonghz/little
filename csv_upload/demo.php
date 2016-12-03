 public function auto_answer_action(){

        echo '<form action="/format/auto_answer_send/" method="post" enctype ="multipart/form-data" runat="server"> ';
        echo '<input id="File1"  name="answer" type="file" />';
        echo '<input id="File2"  name="qid" type="text" />';
        echo '<input type="submit" name="Button1" value="Button" id="Button1" />';
        echo '</form>';
    }
	
	
	
    public function auto_answer_send_action(){

        $file=fopen($_FILES["answer"]['tmp_name'],'r');
       //echo "<pre>";
       //var_dump($_FILES["answer"]['tmp_name']);
      //  var_dump($_POST['qid']);
     //  exit;
        $i=0;
        while(! feof($file)) {
            $array[$i]=fgetcsv($file)[0];
            $i++;
        }
        var_dump($array);
        fclose($file);
        exit;
	}