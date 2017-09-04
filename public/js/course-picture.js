define(['jquery','template','util','uploadify'],function($,template,util){
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

			// 处理课程封面的上传
			$('#upfile').uploadify({
				width:80,
				lineHeight:'auto',
				buttonClass:'btn btn-success btn-sm line-two',
				buttonText: '选择图片',
				fileObjName: 'cs_cover_original',
				formData:{cs_id:csId},
				swf: '/public/assets/uploadify/uploadify.swf',
				itemTemplate: '<span></span>',
				uploader: '/api/uploader/cover',
				onUploadSuccess: function(f, data) {
					console.log(data);
					var data = JSON.parse(data);
					// // 修改图片url地址
					$('.preview img').attr('src', data.result.path);
				}
			});
		}
	})
});