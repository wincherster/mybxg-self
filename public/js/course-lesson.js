define(['jquery','template','util','bootstrap','form'],function($,template,util){
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

			// 完成课时表单提交（创建公共方法）
			function submitForm(url,ctCsId,ctId){
				$('#modalBtn').click(function(){
					var param = {ct_cs_id:ctCsId};
					if(ctId){
						// 编辑的时候需要提供课时ID
						param.ct_id = 'ctId';
					}
					$('#modalForm').ajaxSubmit({
						type:'post',
						url:url,
						data:param,
						datType:'json',
						success:function(data){
							if(data.code == 200){
								// 提交成功，刷新页面
								location.reload();
							}
						}
					});
				})
			}


			// 实现添加课时功能
			$('#addBtn').click(function(){
				// 添加课时，显示空的数据模态框（传空对象）
				
				var html = template('modalTpl',{operate:data.result.operate = '添加课时'});
				$('#modalInfo').html(html);	
				$('#chapterModal').modal();
				// 提交表单方法调用
				submitForm('/api/course/chapter/add',csId);
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
						// 提交表单方法调用
						submitForm('/api/course/chapter/modify',csId,ctId);
						
					}
				});
				// 显示弹窗
				$('#chapterModal').modal();
			});
		}
	});
});