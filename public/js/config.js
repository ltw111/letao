// 格式化模块


require.config({
    baseUrl:"/public",
    paths:{
        jquery:"assets/jquery/jquery.min",
        template:"assets/artTemplate/template-web",
        ckeditor:"assets/ckeditor/ckeditor",
        uploadify:"assets/uploadify/jquery.uploadify.min",
        nprogress:"assets/nprogress/nprogress",
        echarts:"assets/echarts/echarts.min"
    },

    shim:{
        // 富文本编辑器
        ckeditor:{
            exports:"CKEDITOR"
        },
        // 通过flash上传图片
        uploadify:{
            // 通过deps可以实现其以来的模块
            deps:["jquery"]
        }
         
    }
})


require(["jquery","nprogress"],function ($,Nprogress){
    Nprogress.start();
    Nprogress.done();
    $(document).ajaxStart(function (){
        Nprogress.start();
    }).ajaxStop(function (){
        Nprogress.done();
    })
})