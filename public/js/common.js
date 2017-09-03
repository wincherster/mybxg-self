//定义封装成模块, 传入$ 符号
define(['jquery','template','nprogress','cookie'],function($,template,NProgress){
  // 控制页面的进度条显示
  NProgress.start();
  NProgress.done();
  //控制左侧导航菜单的折叠展开
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

  //获取cookie,验证是否登录，跳转页面
  var seesionId = $.cookie('PHPSESSID');
  // console.log($.cookie('PHPSESSID'));
  if(!seesionId && location.pathname != '/main/login'){
    location.href= '/main/login';
  }

  // 获取用户登录信息 (转换成对象格式)
  var cookie = $.cookie('loginInfo');
  
  var loginInfo = cookie?JSON.parse(cookie):{};
  // console.log(loginInfo);
  // $('.profile img').attr('src',loginInfo.tc_avatar);
  // $('.profile h4').html(loginInfo.tc_name);
 
  var tpl = '<div class="avatar img-circle">'
            +'<img src="{{tc_avatar}}">'
            +'</div>'
            +'<h4>{{tc_name}}</h4>'
  var html = template.render(tpl,loginInfo);
  $('#profileId').html(html);
});
	
	


	