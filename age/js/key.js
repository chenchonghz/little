var key =
{send: function ()
	{	
     send_sex=$('#ifrom').find('.mytxt').eq(0).val();
     if(send_sex=="男"){send_sex=1;}else{send_sex=2;}	 
    // send_birthday=$('#ifrom').find('.mytxt').eq(1).val();
     if($('#ifrom').find('.mytxt').eq(1).attr('data-date')<10){
		 birthday_date=0+$('#ifrom').find('.mytxt').eq(1).attr('data-date');
	 }else{
		  birthday_date=$('#ifrom').find('.mytxt').eq(1).attr('data-date');
	 }	
     send_birthday=$('#ifrom').find('.mytxt').eq(1).attr('data-year')+
				   $('#ifrom').find('.mytxt').eq(1).attr('data-month')+birthday_date			   	
     send_high=$('#ifrom').find('.mytxt').eq(2).val();	
     send_weight=$('#ifrom').find('.mytxt').eq(3).val();	
     send_father_h=$('#ifrom').find('.mytxt').eq(4).val();	
     send_mother_h=$('#ifrom').find('.mytxt').eq(5).val();
  console.info(send_sex);	 
  console.info(send_birthday);	 
  console.info(send_high);	 
  console.info(send_father_h);	 
  console.info(send_mother_h);
		$.ajax({
		//提交数据的类型 POST GET
		type:"POST",
		//提交的网址
		url:"/app.php",
		//提交的数据
		data:{
			 send_sex:send_sex,
			 send_birthday:send_birthday,
			 send_high:send_high,
			 send_weight:send_weight,
			 send_father_h:send_father_h,
			 send_mother_h:send_mother_h,	
			  },           
		//成功返回之后调用的函数             
		success:function(data){      
            console.info(data);
			return false;
		}   ,                    
	 });	 		
	},
}