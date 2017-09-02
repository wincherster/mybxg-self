define(['jquery','template','util','bootstrap'],function($,template,util){
	// var pathname = location.pathname;
	// $('.navs a[href="'+pathname+'"').addClass('active');
	// 
	// 设置导航菜单选中
	util.setMenu(location.pathname);
	
	var ret = util.qs('abc');
	// console.log(ret);

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
				// console.log(tcId);
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
			//启用注销功能
			$('.eod').click(function(){
				//在获取一次 tcId
				var td = $(this).closest('td');
				var tcId = td.attr('data-tcId');
				var tcStatus = td.attr('data-status');
				// 当前点击的按钮
				var that = this; //原生js的方法
				$.ajax({
					type:'post',
					url:'/api/teacher/handle',
					data: { tc_id : tcId , tc_status : tcStatus },
					dataType:'json',
					success : function(data){
						// console.log(data);
						// 使用获取的状态值，修改页面
						td.attr('data-status',data.result.tc_status);
						// 修改按钮 文字
						if(data.result.tc_status ==0){
							$(that).html('注 销'); //$包住 转成jquery 方法
						}else{
							$(that).html('启 用');
						}
					}
				});
			});
		}
	});

	
});