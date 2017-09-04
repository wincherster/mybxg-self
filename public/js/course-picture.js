define(['jquery','template','util'],function($,template,util){
	// 设置导航菜单选中
	util.setMenu('/course/add');
	// 获取课程id
	var csId = util.qs('cs_id');
	// 调用接口，查询数据(封面和信息)，渲染页面
	$.ajax({
		type:'get',
		url:'/api/course/picture',
		data:{cs_id:csId},
		dataType:'json',
		success:function(data){
			// console.log(data);
			// 渲染页面
			var html = template('pictureTpl',data.result);
			$('#pictureInfo').html(html);
		}
	})
});