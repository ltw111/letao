define(["jquery","ckeditor","template", "./utils","uploadify"], function ($,CKEDITOR,template) {

    CKEDITOR.replace("ck");
   

    $("form").on("submit", function () {
        for (instance in CKEDITOR.instances) {
            CKEDITOR.instances[instance].updateElement();
        }
        var formData = $(this).serialize();
        $.ajax({
            url: "/api/product/addProduct",
            type: "post",
            data: formData,
            success: function (info) {
                if (info.success) {
                    location.href = "/goods_list.php";
                }
            }


        });
        return false;
    })
// // 使用falash上传图片
    $("#upfile").uploadify({
         // 修改上传按钮文字
         buttonText: '',
         // 修改上传按钮宽度
         width: 120,
         // 修改上传按钮高度
         height: 120,
         // 上传文件 name 属性
         fileObjName: 'pic1',
         // 自定义上传进度条样式
         itemTemplate: '<span></span>',
         // 使用 flash
         swf: '/public/assets/uploadify/uploadify.swf',
         // 文件上传地址
         uploader: '/api/product/addProductPic',
         onUploadSuccess: function (file, data) {
            //  console.log(1);
             console.log(data)
             var res = JSON.parse(data);
             // 实现预览效果
             $('.preview img').attr('src', 'http://localhost:3000' + res.picAddr);
 
             // 将图片上传地址放到表单中等待提交
             $('input[name="pic"]').val(res.picAddr);
         }
    })

    // 品牌列表

    $.ajax({
        url:"/api/category/querySecondCategoryPaging",
        type:"get",
        data:{page:1,pageSize:100},
        success:function (info){
            var  html=template("brands",info);
            $(".brand").append(html);

        }
    })
})



