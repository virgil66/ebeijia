$(function(){
	// alert($(window).width())
	var width = $(window).width();  //获取屏幕的宽度
	var long_width = width-(200+43.3);   
	var middle_left = (width-711)/2;  //获取中间图片的居左距离
	var graph_left = 0;
	var frame_content_left = 0;
	if(width <= 1150){
		graph_left =(1150 - 850)/2;   //获取con-graph和con-transparent的居左距离
		frame_content_left = (1150 - 845)/2;    //获取frame-content的居左距离
	}else{
		graph_left = (width-850)/2;
		frame_content_left = (width-845)/2;
	}
	var circle_right = frame_content_left;  //获取circle的居右距离
	var email_width = ($('.service-li .service-li-right').width())/4;  //获取电子邮件模块首行缩进的宽度
	var line_width = graph_left;  //获取line的宽度
	var tell_con_left = ($('.tell-ul .tell-li-bg').width()-180)/2;  //获取tell-con的居左宽度
	var switch_main_width = $('.switch .tell-li-bg').width();  //获取tell-li-bg的宽度
	var move_width = switch_main_width/3;
	var switch_main_ul_width = (switch_main_width/3)*5;
	var tell_li_bg_width = $('.tell-ul .tell-li-bg').width();  //获取tell-li-bg的宽度
	var switch_left = (move_width/2)-70;
	var switch_left_two = (move_width/2)-75;
	// alert(switch_left)
	// alert(switch_main_width)
	//定义中间图片的居左距离
	//$('.con-graph .banner-img-middle').css({'left':middle_left});

	//定义con-graph和con-transparent的居左距离
	$('.con-graph').css({'left':graph_left});
	$('.con-transparent').css({'left':graph_left});
	
	//定义frame-content的居左距离
	$('.frame .frame-content').css({'left':frame_content_left});
	
	//定义circle的居右距离
	$('.frame .circle').css({'right':circle_right});

	//定义电子邮件模块首行缩进的宽度
	$('.service-li .service-li-right .email-con p').css({'text-indent':email_width});

	//定义line的宽度
	$('.more-content .line-left').css({'width':line_width});
	$('.more-content .line-right').css({'width':line_width});

	//定义tell-con的居左宽度
	$('.tell-ul .tell-li-bg .tell-con').css({'left':tell_con_left});

	//定义switch-main和switch-main-ul的宽度
	$('#bodymain .switch-main').css({'width':switch_main_width});
	$('#bodymain .switch-main .switch-main-ul').css({'width':switch_main_ul_width});


	//定义四张图片的居左距离
	$('.switch-main .switch-li-right-copy').find('img').last().css({'left':switch_left_two});
	$('.switch-main .switch-li-left').find('img').last().css({'left':switch_left});
	$('.switch-main .switch-li-middle').find('img').last().css({'left':switch_left});
	$('.switch-main .switch-li-right').find('img').last().css({'left':switch_left_two});
	$('.switch-main .switch-li-left-copy').find('img').last().css({'left':switch_left});

	//定义switch-main-ul的居左宽度
	$('.switch-main .switch-main-ul').css({'left':-move_width});

	//图片轮播效果
	var i = 0;
	// var clone = $('.switch-main .switch-main-ul li').first().clone();   //复制第一张图片
	// $('.switch-main .switch-main-ul').append(clone);  //将复制的图片张贴到最后一个li后面
	var size = $('.switch-main .switch-main-ul li').size();   //获取需要轮播图片的个数
	//给复制所得的li下的第二张图片增加类on
	// $('.switch-main .switch-main-ul li').last().find('img').last().removeClass('on-left').addClass('on');


	//向右按钮点击
	$('.tell-ul .go').bind('click',function(){
		move_right();
	})

	//向左按钮点击
	$('.tell-ul .back').bind('click',function(){
		move_left();
	})
	// alert(size)
	// 
	//向左点击自定义函数
	function move_left(){
		i++;
		// alert(i)
		// 向左滑动时对应的文字说明做相应的改变
		switch(i){
			case 1:{
				$('.switch .icon-content').text('Social media marketing');
				$('.switch .icon-ul').find('li').first().text('运营');
				$('.switch .prim-left').text('设计DESIGN')
				$('.switch .prim-right').text('软件开发APPLICATION');
				//对应图片的样式展示
				$('.switch .three-copy').removeClass('three-copy').addClass('line-three');
				$('.switch .add').removeClass('add').addClass('row');
				$('.switch .tell-con > img:nth-of-type(11)').css({'display':'block'});
				$('.switch .line-four').css({'display':'block'});
				//显示tell-con > img:nth-of-type(10)
				$('.switch .tell-con > img:nth-of-type(7)').css({'display':'block'});
				break;
			}
			case 2:{
				//定义图片文字的说明
				$('.switch .icon-content').text('APPLICATION');
				$('.switch .icon-ul').find('li').first().text('开发');
				$('.switch .prim-left').text('互联网运营Social media marketing')
				$('.switch .prim-right').text('设计DESIGN')
				//对应图片的样式展示
				$('.switch .line-three').removeClass('line-three').addClass('three-copy');
				$('.switch .row').removeClass('row').addClass('add');
				$('.switch .tell-con > img:nth-of-type(11)').css({'display':'none'});
				$('.switch .line-four').css({'display':'none'});
				//隐藏tell-con > img:nth-of-type(10)
				$('.switch .tell-con > img:nth-of-type(7)').css({'display':'none'});
				break;
			}
			default:{
				$('.switch .icon-content').text('DESIGN');
				$('.switch .icon-ul').find('li').first().text('设计');
				$('.switch .prim-left').text('软件开发APPLICATION')
				$('.switch .prim-right').text('互联网运营OPERATION PRODUCTS');
				//对应图片的样式展示
				$('.switch .three-copy').removeClass('three-copy').addClass('line-three');
				$('.switch .add').removeClass('add').addClass('row');
				$('.switch .tell-con > img:nth-of-type(11)').css({'display':'block'});
				$('.switch .line-four').css({'display':'block'});
				//显示tell-con > img:nth-of-type(10)
				$('.switch .tell-con > img:nth-of-type(7)').css({'display':'block'});
				break;
			}
		}
		if(i == 2){
			$('.switch-main .switch-main-ul').css({'left':move_width});
			i=-1;
		 }
		// $('.switch-main .switch-main-ul').stop().animate({'left':-(i*move_width+move_width)},500);
		$('.switch-main .switch-main-ul').stop().animate({'left':-(i+1)*move_width},500);
	}


	//向右点击自定义函数
	function move_right(){
		// i++;
		i--;
		// alert(i)
		switch(i){
			case -1:{
				//对应图片的文字说明
				$('.switch .icon-content').text('APPLICATION');
				$('.switch .icon-ul').find('li').first().text('开发');
				$('.switch .prim-left').text('互联网运营Social media marketing')
				$('.switch .prim-right').text('设计DESIGN')
				//对应图片的样式展示
				$('.switch .line-three').removeClass('line-three').addClass('three-copy');
				$('.switch .row').removeClass('row').addClass('add');
				$('.switch .tell-con > img:nth-of-type(11)').css({'display':'none'});
				$('.switch .line-four').css({'display':'none'});
				//隐藏tell-con > img:nth-of-type(10)
				$('.switch .tell-con > img:nth-of-type(7)').css({'display':'none'});
				break;
			}
			case -2:{
				$('.switch .icon-content').text('Social media marketing');
				$('.switch .icon-ul').find('li').first().text('运营');
				$('.switch .prim-left').text('设计DESIGN');
				$('.switch .prim-right').text('软件开发APPLICATION');
				//对应图片的样式展示
				$('.switch .three-copy').removeClass('three-copy').addClass('line-three');
				$('.switch .add').removeClass('add').addClass('row');
				$('.switch .tell-con > img:nth-of-type(11)').css({'display':'block'});
				$('.switch .line-four').css({'display':'block'});
				//显示tell-con > img:nth-of-type(10)
				$('.switch .tell-con > img:nth-of-type(7)').css({'display':'block'});
				break;
			}
			default:{
				$('.switch .icon-content').text('DESIGN');
				$('.switch .icon-ul').find('li').first().text('设计');
				$('.switch .prim-left').text('软件开发APPLICATION');
				$('.switch .prim-right').text('互联网运营OPERATION PRODUCTS');
				//对应图片的样式展示
				$('.switch .three-copy').removeClass('three-copy').addClass('line-three');
				$('.switch .add').removeClass('add').addClass('row');
				$('.switch .tell-con > img:nth-of-type(11)').css({'display':'block'});
				$('.switch .line-four').css({'display':'block'});
				//显示tell-con > img:nth-of-type(10)
				$('.switch .tell-con > img:nth-of-type(7)').css({'display':'block'});
				break;
			}
		}
		if(i == -2){
			$('.switch-main .switch-main-ul').css({'left':-(size-2)*move_width});
			i=1;
		}
		// $('.switch-main .switch-main-ul').stop().animate({'left':i*move_width-move_width},500);
		$('.switch-main .switch-main-ul').stop().animate({'left':-(i+1)*move_width},500);
	}


})