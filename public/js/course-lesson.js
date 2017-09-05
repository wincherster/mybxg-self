define(['jquery','template','util','bootstrap'],function($,template,util){
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
			// 实现添加课时功能
			$('#addBtn').click(function(){
				// 添加课时，显示空的数据模态框（传空对象）
				
				var html = template('modalTpl',{operate:data.result.operate = '添加课时'});
				$('#modalInfo').html(html);	
				$('#chapterModal').modal();
			});
			$('.editLesson').click(function(){
				var ctId = $(this).attr('data-ctId');
				// 获取最新的课时数据
				$.ajax({
					type:'get',
					url:'/api/course/chapter/edit',
					data:{ct_id:ctId},
					dataType:'json',
					success:function(data){
						console.log(data);
						data.result.operate = '编辑课时';
						var html = template('modalTpl',data.result);
						$('#modalInfo').html(html);	
					}
				});
				// 显示弹窗
				$('#chapterModal').modal();
			});
		}
	});
});