define(['jquery','cookie'],function($){
 // 实现登录功能
  $('#loginBtn').click(function(){
      $.ajax({
      type:'post',
      url:'/api/login',   // 反代理路径，跨域
      data: $('#loginForm').serialize(), //序列化表单
      dataType:'json',
      //成功回调函数
      success:function(data){  
        //判断是否成功
        if(data.code==200){
        	//存储用户信息cookie，将获取的数据result对象使用JSON.stringify（）
            //转换字符串，并设置根路径
        	$.cookie('loginInfo',JSON.stringify(data.result),{path:'/'});
            //登录成功  跳转到 index页面
            location.href = '/main/index';
        }else{
            //失败重新输入 
            alert('用户名或者密码错误');
        }
      }
    });
    //阻止按钮的  默认行为，因为有submit默认事件
    return false;
  });
});