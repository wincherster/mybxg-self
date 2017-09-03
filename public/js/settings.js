define(['jquery','template','util','datepicker','language','uploadify','region'],function($,template,util){
	// 设置菜单导航选中
	util.setMenu('/main/index');
	// 调用后台接口获取所有的个人信息
	$.ajax({
		type:'get',
		url:'/api/teacher/profile',
		dataType:'json',
		success:function(data){
			// console.log(data);
			// 解析数据渲染页面
			var html = template('settingsTpl',data.result);
			$('#settingsInfo').html(html);
			// 处理头像上传
			$('#upfile').uploadify({
				width:120,
				height:120,
				buttonText:'',
				fileObjName:'tc_avatar',
				swf:'/public/assets/uploadify/uploadify.swf',
				itemTemplate:'<span></span>',
				uploader:'/api/uploader/avatar',
				onUploadSuccess:function(f,data){
					console.log(data);
					var data = JSON.parse(data);
					// 修改图片url地址
					$('.preview img').attr('src',data.result.path);
					console.log(data.result.path);
				}
			});
			// 省市县三级联动
			$('#pcd').region({
				url:'/public/assets/jquery-region/region.json'
			})
		}
	})

});