function sentRequest() {
    var mark = document.getElementById('sent')
    var sent = document.getElementById('sentbutton')
    var request = document.getElementById('requestion')
    var requestion = document.getElementById("requestionitself")
    var name = document.getElementById('name');
    var phone = document.getElementById('phone');
    var checkbox1 = document.getElementById('checkbox1');
    const success = document.getElementById('submittext2');
    const danger = document.getElementById('submittext1');

    if(name.value === '' || phone.value === '' || checkbox1.checked == false){
        danger.style.display = 'block';
        success.style.display = 'none';
    }
    else {
        setTimeout(() => {
            name.value = '';
            phone.value = '';
            checkbox1.checked = false;
        }, 2000);

        success.style.display = 'block';
        danger.style.display = 'none';
        request.style.background = "transparent";
        request.style.zIndex = "-111";
        request.style.transition = "0s";
        requestion.style.transform = "scale(0)";
        requestion.style.zIndex = "-100";
        requestion.style.transition = "0s";
        mark.style.display = 'flex';

    }

    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = "none";
    }, 4000);

}





