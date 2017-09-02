define(['jquery', 'template', 'util','datepicker','language','validate','form'], function($, template, util) {
	// 设置导航菜单选中
	util.setMenu('/teacher/list');
	// 获取编辑讲师的id
	var tcId = util.qs('tc_id');
	// 判断 要不要发送请求，
	if (tcId) {
		// console.log(tc_id);
		// 根据id查询对应的讲师详细信息
		$.ajax({
			type: 'post',
			url: '/api/teacher/edit',
			data: {
				tc_id: tcId
			},
			dataType: 'json',
			success: function(data) {
				// console.log(data);
				// 面包屑显示  讲师编辑
				data.result.operate = '讲师编辑';
				// 解析数据渲染页面
				var html = template('templateTpl', data.result);
				$('#teacherInfo').html(html);

				// 绑定编辑的提交事件
				submitForm('/api/teacher/update');
			}
		})
	} else {
		// 添加讲师
		var html = template('templateTpl', {
			operate: '讲师添加',
			tc_gender: 1
		});
		$('#teacherInfo').html(html);
		// 绑定添加的提交事件
		submitForm('/api/teacher/add');
	}

	// 实现表单提交功能
	// function submitForm(url) {
	// 	$('#formBtn').click(function() {
	// 		console.log(url);
	// 		$.ajax({
	// 			type: 'post',
	// 			url: url,
	// 			data: $('#formId').serialize(),
	// 			datatype: 'json',
	// 			success: function(data) {
	// 				console.log(data);
	// 				if(data.code == 200){
	// 					location.href = '/teacher/list';
	// 				}
	// 			}


	// 		})
			
	// 	});

	// }
	
	// 表单验证  提交功能
	function submitForm(url){
		$('#formId').validate({
			sendForm:false,
			valid:function(){
				// 提交表单
				// console.log(123);
				$(this).ajaxSubmit({
					type:'post',
					url:url,
					success:function(data){
						// console.log(data);
						// 成功后，跳转到 讲师列表页
						location.href = '/teacher/list';
					},
					error:function(){
						console.log('错了')
					}

				});
			},
			description:{
				tc_name:{
					required:'用户名不能为空',
					valid:'用户名可以使用'

				},
				tc_pass:{
					required:'密码不能为空',
					pattern:'必须6位数字',
					valid:'密码有效'

				},
				tc_join_date:{
					required:'入职日期不能为空',
					valid:'日期有效'
				}
			}
		})
	}

})