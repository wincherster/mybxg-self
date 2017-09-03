require.config({
  baseUrl:'/public/assets',
  paths:{
  	jquery:'jquery/jquery.min',
  	cookie:'jquery-cookie/jquery.cookie',
  	template : 'artTemplate/template-web',
    bootstrap : 'bootstrap/js/bootstrap.min',
    datepicker : 'bootstrap-datepicker/js/bootstrap-datepicker.min',
  	language : 'bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min',
    validate: 'validate/jquery-validate.min',
    uploadify: 'uploadify/jquery.uploadify.min',
    form: 'jquery-form/jquery.form',
    login:'../js/login',
  	settings:'../js/settings',
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
  	},
    language:{
      deps:['jquery','datepicker']
    },
    validate:{
      deps:['jquery']
    },
    uploadify:{
      deps:['jquery']
    }

  }
});
