function sentRequests() {
    var mark = document.getElementById('sent')
    var marks = document.getElementById('sents')
    var sent = document.getElementById('sentbutton')
    var request = document.getElementById('requestion')
    var names = document.getElementById('names');
    var phones = document.getElementById('phones');
    var checkbox2 = document.getElementById('checkbox2');
    const successs = document.getElementById('submittext5');
    const dangers = document.getElementById('submittext4');

    if(names.value === '' || phones.value === '' || checkbox2.checked == false){
        dangers.style.display = 'block';
        successs.style.display = 'none';
    }
    else {
        setTimeout(() => {
            names.value = '';
            phones.value = '';
            checkbox2.checked = false;
        }, 2000);

        successs.style.display = 'block';
        dangers.style.display = 'none';
        request.style.background = "transparent";
        request.style.zIndex = "-111";
        request.style.transition = "0s";
        requestion.style.transform = "scale(0)";
        requestion.style.zIndex = "-100";
        requestion.style.transition = "0s";
        marks.style.display = 'flex';

    }

    setTimeout(() => {
        dangers.style.display = 'none';
        successs.style.display = "none";
    }, 4000);

}