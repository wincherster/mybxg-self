define(['jquery','template','util'],function($,template,util){
	// 设置导航菜单选中
	util.setMenu('/course/basic');
	// 获取课程id
	var csId = util.qs('cs_id');
	// 添加和编辑的标志位
	var flag = util.qs('flag');
	// console.log(csId);
	// 不论添加或者编辑都需要 发送 ajax请求数据
	$.ajax({
		type:'get',
		url:'/api/course/basic',
		data:{cs_id:csId},
		dataType:'json',
		success:function(data){
			// console.log(data);
			// 在解析数据，渲染页面时【需要判断 是 添加 还是 编辑】
			if(flag != '1'){
				// 编辑操作（根据课程id查询课程详细信息，从而填充页面表单）
				data.result.operate='课程编辑';
				var html = template('basicTpl',data.result);
				$('#basicInfo').html(html);
			}else{
				// 添加操作，添加的时候也有 cs_id
				data.result.operate='课程添加';
				var html = template('basicTpl',data.result);
				$('#basicInfo').html(html);
			}
			
		}

	});
	
});