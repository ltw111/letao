define(["jquery"],function ($){
    $("form").on("submit",function (){
        var  FormData=$(this).serialize();
        $.ajax({
            url:"/api/employee/employeeLogin",
            type:"post",
            data:FormData,
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