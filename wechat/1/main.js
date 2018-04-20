window.onload = function () {
    var arrIcon = ['http://www.xttblog.com/icons/favicon.ico', 'https://www.baidu.com/img/baidu_85beaf5496f291521eb75ba38eacbd87.svg'];
    var num = 0;
    var iNow = -1;
    var icon = this.document.getElementById('user_face_icon').getElementsByTagName('img');
    var btn = this.document.getElementById('btn');
    var text = this.document.getElementById('text');
    var content = this.document.getElementsByTagName('ul')[0];
    var img = content.getElementsByTagName('img');
    var span = content.getElementsByTagName('span');

    icon[0].onclick = function() {
        if (num == 0) {
            this.src = arrIcon[1];
            num = 1;
        } else if (num == 1) {
            this.src = arrIcon[0];
            num = 0;
        }
    }

    btn.onclick = function() {
        if (text.value == '') {
            alert('不能发送空消息');
        } else {
            content.innerHTML += '<li><img src="' + arrIcon[num] + '"/><span>' + text.value + '</span></li>';
            iNow ++;
            if (num == 0) {
                img[iNow].className += 'imgright';
                span[iNow].className += 'spanright';
            } else {
                img[iNow].className += 'imgleft';
                span[iNow].className += 'spanleft';
            }
            text.value = '';
            content.scrollTop = content.scrollHeight;
        }

    }
}