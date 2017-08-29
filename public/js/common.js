
	NProgress.start();
	NProgress.done();
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});


	//实现退出功能
	$('#logoutBtn').click(function(){
            $.ajax({
                type:'post',
                url:'/api/logout',   // 反代理路径，跨域
                dataType:'json',
                //成功回调函数
                success:function(data){  
                    //判断是否成功
                    if(data.code==200){
                        //退出成功  跳转到 login页面
                        location.href = '/main/login';
                    }
                }
            });
            //阻止按钮的  默认行为，因为有submit默认事件
            return false;
    });