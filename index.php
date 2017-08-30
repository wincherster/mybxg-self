<?php
  //路由，根据 URl的不同导航到不同的页面
  //
  // var_dump($_SERVER); //可以查看数据的结构
  // 
  // 为了在没有PATH_INFO 的时候 页面不报错，需要判断一下
  // 判断数组中是否包含指定属性  array_key_exists('PATH_INFO',   $_SERVER);
  
  //先声明一个变量$path = null;
  // $path = null;
  
  //定义默认路径（文件目录名称）main
  $dir = 'main'; //默认文件夹名称
  $filename = 'login'; //默认文件名称
  //使用if判断 路径是否存在
  if(array_key_exists('PATH_INFO', $_SERVER)){
  	//获取 获取URL中的路径，PATH_INFO
  	$path = $_SERVER['PATH_INFO'];  
  	// /main/index 路径结构
  	//去掉第一个斜杠
  	$str = substr($path,1);
  	// 按照斜杠分割目录名称和文件名称
  	$arr = explode('/',$str);
  	// 判断一下分割的长度是不是等于 2
  	if(count($arr)==2){
  		// 覆盖默认的目录名称
  		$dir = $arr[0];
  		// 覆盖默认的文件名称
  		$filename = $arr[1];
  	}else{ //如果不是 2个的情况
  		// 直接跳转到登录页面
  		$filename = 'login';
  	}
  
  	// echo $path;   //输出到页面
  	// 路径的格式
  	/* 路由分发的操作步骤
  	/main/index
  	/main/login
  	/teacher/list
  	 */
  	// 嵌入一个子页面
  	// include('./views'.$path.'.html');
  	
}
// 嵌入一个子页面(没有路径的话，进入默认路径)
include('./views/'.$dir.'/'.$filename.'.html');

//在当前页面，嵌入另外一个页面
// include('views/main/index.html');
// include('views/main/login.html');

?>