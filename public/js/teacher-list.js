define(['jquery','template','bootstrap'],function($,template){
	//请求后台结构，获取列表数据
	$.ajax({
		type:'get',
		url:'/api/teacher',
		dataType:'json',
		success:function(data){
			// console.log(data);
			// 解析数据，渲染页面
			var html = template('teacherTpl',{list:data.result})
			$('#teacherInfo').html(html);

			//绑定预览点击事件
			$('.preveiw').click(function(){
				
				//通过调取后台接口获取数据
				var tcId = $(this).closest('td').attr('data-tcId');
				console.log(tcId);
				$.ajax({
					type:'get',
					url:'/api/teacher/view',
					data : {tc_id:tcId},
					dataType:'json',
					success:function(data){
						// console.log(888);
						//解析数据，渲染页面
						var html = template('modalTpl',data.result);
						$('#modalInfo').html(html);
						//显示弹窗
						$('#teacherModal').modal();
					}

				})
			})
		}
	});

	
});