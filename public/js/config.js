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
    form: 'jquery-form/jquery.form',
    uploadify: 'uploadify/jquery.uploadify.min',
    login:'../js/login',
    region : 'jquery-region/jquery.region',
    ckeditor : 'ckeditor/ckeditor',
  	nprogress : 'nprogress/nprogress',
    common:'../js/common',
    index:'../js/index',
    util:'../js/util',
    teacherlist : '../js/teacher-list',
    teacheradd : '../js/teacheradd',
    settings:'../js/settings',
    state:'../js/state'
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
    },
    ckeditor:{
      exports:'CKEDITOR'
    }

  }
});
