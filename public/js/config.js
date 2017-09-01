require.config({
  baseUrl:'/public/assets',
  paths:{
  	jquery:'jquery/jquery.min',
  	cookie:'jquery-cookie/jquery.cookie',
  	template : 'artTemplate/template-web',
  	bootstrap : 'bootstrap/js/bootstrap.min',
  	login:'../js/login',
  	index:'../js/index',
  	util:'../js/util',
  	common:'../js/common',
  	teacherlist : '../js/teacher-list',
  	teacheradd : '../js/teacheradd'
  },
  //把非标准模块转换成标准模块
  shim:{  
  	bootstrap : {
  		deps : ['jquery']
  	}
  }
});
