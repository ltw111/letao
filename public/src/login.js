define(["jquery"],function ($){
    $("form").on("submit",function (){
        var  formData=$(this).serialize();
        $.ajax({
            url:"/api/employee/employeeLogin",
            type:"post",
            data:formData,
            success:function (info){
                if(info.error){
                   return alert(info.message);
                }

                location.href="/";
            }
        })
        return false;


        
    })
})