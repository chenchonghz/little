<?php
    //用于对图片进行缩放
	
    function thumb($filename,$width=600,$filename_out){
		if($width<600){exit;}
		$filetype=getimagesize($filename);		
        //获取原图像$filename的宽度$width_orig和高度$height_orig
        list($width_orig,$height_orig) = getimagesize($filename);
        //根据参数$width和$height值，换算出等比例缩放的高度和宽度
        $width = 600;
		$height = ($width/$width_orig)*$height_orig;
		
        //将原图缩放到这个新创建的图片资源中
        $image_p = imagecreatetruecolor($width, $height);
		//GIF不压缩
		if($filetype['mime']=='image/gif'){exit;}
        //获取原图的图像资源
		if($filetype['mime']=='image/jpeg')
		{
		    $image = imagecreatefromjpeg($filename);		
			//使用imagecopyresampled()函数进行缩放设置
			imagecopyresampled($image_p,$image,0,0,0,0,$width,$height,$width_orig,$height_orig);
			//将缩放后的图片$image_p保存，100(质量最佳，文件最大)
			imagejpeg($image_p,$filename_out);
		}elseif($filetype['mime']=='image/png'){
			$image = imagecreatefrompng($filename);		
			//使用imagecopyresampled()函数进行缩放设置
			imagecopyresampled($image_p,$image,0,0,0,0,$width,$height,$width_orig,$height_orig);
			//将缩放后的图片$image_p保存，100(质量最佳，文件最大)
			imagepng($image_p,$filename_out);
			
		}elseif($filetype['mime']=='image/wbmp'){
			$image = imagecreatefromwbmp($filename);		
			//使用imagecopyresampled()函数进行缩放设置
			imagecopyresampled($image_p,$image,0,0,0,0,$width,$height,$width_orig,$height_orig);
			//将缩放后的图片$image_p保存，100(质量最佳，文件最大)
			imagewbmp($image_p,$filename_out);			
		}else{
			$image = imagecreatefromstring($filename);		
			//使用imagecopyresampled()函数进行缩放设置
			imagecopyresampled($image_p,$image,0,0,0,0,$width,$height,$width_orig,$height_orig);
			//将缩放后的图片$image_p保存，100(质量最佳，文件最大)
			imagejpeg($image_p,$filename_out);
		}	
        imagedestroy($image_p);
        imagedestroy($image);
    }
 
    thumb("./img/1.gif",1600,"./img/333.gif");
	
	//$filename,      文件名路径
	//$width=100,      最大宽度	
	//$filename_out,   输出路径
	
?>