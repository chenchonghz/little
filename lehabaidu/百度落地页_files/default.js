!function(W,D,undefined){
W.df = {
	temporary:null, //公用临时数据存储;
	$id:$('.wrap'), //ID节点;
	pg:[0,0], //存放页面宽高数值;
	offtop:[], //BOX盒子MOVE值;
	offset:0, //顶部占位空间;
	len:0, //长度;
	em:0, //基础值;
	wide:!1, //宽屏状态;
	mob:/Mobile|Browser/i.test(navigator.userAgent), //判断是否为移动浏览器;
	hdapp:/HAODOU|RECIPE/i.test(navigator.userAgent), //是否在好豆菜谱原生APP应用中;
	ready:function(fn){$(W).load(function(){setTimeout(function(){$.type(fn) === 'function' && fn()},350)})},
	size:function(){ //尺寸初始化或重构;
		setTimeout(function(){
			df.pg[0] = W.innerWidth; //获取窗口宽度;
			if(df.pg[0] > 640) df.pg[0] = 640; //640以上的宽度处理;
			df.pg[1] = W.innerHeight; //获取窗口高度;
			var rem = df.em = df.pg[0]/32; //初始化REM值;
			if (em_basic != rem) {
				$('html').css({'font-size':rem+'px'}); // 字体大小初始化;
				em_basic = rem;
			}
			(Math.abs(W.orientation) == 90 || df.pg[0] > df.pg[1])?$('.wrap').css({'height':'auto',"min-height":df.pg[0]+'px'}):df.$id.css({'height':'auto','min-height':df.pg[1]+'px'}); //主容器高度初始化;
			return;
		},100);
	},
	init:function(){ //初始化;
		df.size(); //初始化数值;
		W.addEventListener("resize",function(){df.size();/*location.replace(location.href),'height':df.pg[1]-id.height()-$('header').height()+'px'*/},!0);
		return;
	},
	tabnav:function(){
		var id=$('.tab_ledu');
	    var node = [id.find('a'),id.next('#m_iframe')];
	    $.ajaxSetup({cache: false});
		$('#my_ajax').load('one.html',function(){});
		node[0].on('click',function(){
			var m = $(this).data("index"),tmp = $(this).data('url');
			node[0].removeClass('now');
			$(this).addClass('now');
			id.children('b').css('left',m*(df.pg[0]/3)+'px');
			$('#my_ajax').load(tmp,function(){});
			//node[1].attr('data-id',m);
			//node[1].attr('src',$(this).data('url'));
			//node[1].on('load',function(){df.myiframe();});
		})
	}/*,
	myiframe:function(){
        var ifm = document.getElementById("m_iframe");
        var subWeb = document.frames ? document.frames["m_iframe"].document:ifm.contentDocument;
        if(ifm != null && subWeb != null) { ifm.height=ifm.contentDocument.firstElementChild.offsetHeight;}
	}*/
};
W.onload = function(){df.init();};
}(window,document);