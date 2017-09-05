define(['jquery','template','util'],function($,template,util){
	// 导航菜单选中效果
	util.setMenu('/course/list');
	// 获取课程id
	var csId = util.qs('cs_id');
	// 根据课程id获取课时信息
	$.ajax({
		type:'get',
		url:'/api/course/lesson',
		data:{cs_id:csId},
		dataType:'json',
		success:function(data){
			// 获取数据渲染页面
			var html = template('lessonTpl',data.result);
			$('#lessonInfo').html(html);
		}
	})
});