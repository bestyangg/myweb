function checkemail(abc) {
	var username = $(abc).val();
	var changeUrl = "http://baikejk.sinaapp.com/GradeAdmin.php?action=check&username=" + username;
	$.get(changeUrl, function(str) {
		if (str == '1') {
			$("#gradeInfo").html("<font color=\"red\">您输入的用户名存在！请重新输入!</font>");
		} else {
			$("#gradeInfo").html("");
		}
	})

}

function checksamepw(abc, bbc) {
	var username = $(abc).val();
	var username1 = $(bbc).val();
	if (username == username1)
		$("#sameinfo").html("");
	else {
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