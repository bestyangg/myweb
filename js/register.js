function checkemail(abc){
  var username = $(abc).val();
 if(username=='abc')
    $("#gradeInfo").html("<font color='#D43F3A'>已存在用户名</font>");
   else
   {
	$("#gradeInfo").html("<font color='#419641'>用户名可以注册</font>");
    }
}
function checksamepw(abc,bbc){
  var username = $(abc).val();
  var username1 = $(bbc).val();
 if(username == username1)
    $("#sameinfo").html("");
   else
   {
	$("#sameinfo").html("<font color='#419641'>两次输入的密码不同</font>");
    }
}

/* $(document).ready(function(){
    $("#InputEmail1").blur(function(){
    var username = $(this).val();
     if(username=='abc')
    $("#gradeInfo").html("可以注册");
   else
   {
	$("#gradeInfo").html("不能");
    }
    });
}); */