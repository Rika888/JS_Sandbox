var usr_uid = "admin";
var password = "fa4e7a76ad82c70f36853712ef09df7c";

function login() {
	var flag = false;
	var uid = loginmain.uid.value;
	var uid_pass = loginmain.pass.value;
	if((uid == "") || (uid == " ")) flag = "Введите свой uID";
	if((uid_pass == "") || (uid_pass == " ")) flag = "Введите свой пароль!";

	if(flag){
		alert(flag);
		return false;
	}

	if(uid == usr_uid){
		if(MD5(uid_pass) == password){
			alert("Успешно!");
		}
		else{
			alert("Неверный логин или пароль!");
			return false;
		}
	}else{
		alert("Неверный логин или пароль!");
		return false;
	}

	alert(uid + '\n' + uid_pass);
}


