define(['jquery', 'template', 'util', 'validate', 'form'], function($, template, util) {
	// 设置导航菜单选中
	util.setMenu('/course/basic');
	// 获取课程id
	var csId = util.qs('cs_id');
	// 添加和编辑的标志位
	var flag = util.qs('flag');
	// console.log(csId);
	// 不论添加或者编辑都需要 发送 ajax请求数据
	$.ajax({
		type: 'get',
		url: '/api/course/basic',
		data: {
			cs_id: csId
		},
		dataType: 'json',
		success: function(data) {
			// console.log(data);
			// 在解析数据，渲染页面时【需要判断 是 添加 还是 编辑】
			if (flag != '1') {
				// 编辑操作（根据课程id查询课程详细信息，从而填充页面表单）
				data.result.operate = '课程编辑';
				var html = template('basicTpl', data.result);
				$('#basicInfo').html(html);
			} else {
				// 添加操作，添加的时候也有 cs_id
				data.result.operate = '课程添加';
				var html = template('basicTpl', data.result);
				$('#basicInfo').html(html);
			}
			// 处理二级分类的下拉联动
			$("#firstType").change(function() {
				// alert($(this).val()); //弹出cg_id
				$.ajax({
					type: 'get',
					url: '/api/category/child',
					data: {
						cg_id: $(this).val()
					},
					dataType: 'json',
					success: function(data) {
						// console.log(data);
						// 获取数据，渲染二级列表,字符串拼接数据
						var tpl = '<option value="0">请选择二级分类…</option>{{each list}}<option value="{{$value.cg_id}}">{{$value.cg_name}}</option>{{/each}}'

						var html = template.render(tpl, {
							list: data.result
						});
						$('#secondType').html(html);

					}
				});
			});

			// 处理表单提交
			$('#basicForm').validate({
				sendForm: false,
				valid: function() {
					// 使用ajax提交方式
					$(this).ajaxSubmit({
						type: 'post',
						url: '/api/course/update/basic',
						data: {
							cs_id: csId
						},
						dataType: 'json',
						success: function(data) {
							console.log(data);
							if(data.code == 200){
								location.href = '/course/picture?cs_id='+data.result.cs_id;
							}
						}
					});
				}
			});

		}

	});

});