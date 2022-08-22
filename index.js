console.log('hello');
// let button = document.getElementsByTagName('button');
var e = document.querySelectorAll('button');
var pre = document.getElementById('pre-display');
var out = document.getElementById('out-display');
var point = '';
var text = [];
var text2 = [];
var textans = [];
var op = '';
var val = false;
var equal = false;
process();
function process() {
    e.forEach(function (e) {
        e.addEventListener('click', function () {
            // console.log(e.id);
            var id = e.id;
            var n = '';
            switch (id) {
                case "0":
                    n = '0';
                    break;
                case "1":
                    n = '1';
                    break;
                case "2":
                    n = '2';
                    break;
                case "3":
                    n = '3';
                    break;
                case "4":
                    n = '4';
                    break;
                case "5":
                    n = '5';
                    break;
                case "6":
                    n = '6';
                    break;
                case "7":
                    n = '7';
                    break;
                case "8":
                    n = '8';
                    break;
                case "9":
                    n = '9';
                    break;
                case "dot":
                    n = '.';
                    break;
                case "add":
                    op = ' + ';
                    val = true;
                    break;
                case "minus":
                    op = ' - ';
                    val = true;
                    break;
                case "times":
                    op = ' * ';
                    val = true;
                    break;
                case "divide":
                    op = ' / ';
                    val = true;
                    break;
                case "percent":
                    op = ' % ';
                    val = true;
                    break;
                case "sum":
                    equal = true;
                    break;
                case "del":
                    if (equal == false) {
                        if (val == false) {
                            text.pop();
                        }
                        else if (val == true) {
                            text2.pop();
                        }
                    }
                    else if (equal == true) {
                        textans.pop();
                    }
                    break;
                case "clear":
                    window.location.reload();
                    break;
            }
            if (equal == true) {
                if (val != false) {
                    textans.push(n);
                }
            }
            else {
                val == false ? text.push(n) : text2.push(n);
            }
            histoy();
        });
    });
}
function histoy() {
    var txt = '';
    var txt2 = '';
    var txtans = '';
    text = text.filter(function (item) { return item !== ""; });
    text2 = text2.filter(function (item) { return item !== ""; });
    textans = textans.filter(function (item) { return item !== ""; });
    for (var i = 0; i < text.length; i++) {
        txt += text[i];
    }
    for (var j = 0; j < text2.length; j++) {
        txt2 += text2[j];
    }
    for (var k = 0; k < textans.length; k++) {
        txtans += textans[k];
    }
    operator(txt, txt2, txtans);
}
function operator(txt, txt2, txtans) {
    var ans = 0;
    var num1 = parseFloat(txt);
    var num2 = parseFloat(txt2);
    var numans = parseFloat(txtans);
    var x = 0;
    if (equal == false) {
        if (op == ' + ') {
            ans = num1 + num2;
        }
        else if (op == ' - ') {
            ans = num1 - num2;
        }
        else if (op == ' * ') {
            ans = num1 * num2;
        }
        else if (op == ' / ') {
            ans = num1 / num2;
        }
        else if (op == ' % ') {
            ans = num1 / num2;
        }
        point = String(ans);
        pre.textContent = txt + op + txt2;
    }
    else if (equal == true) {
        ans = parseFloat(point);
        if (op == ' + ') {
            ans = ans + numans;
        }
        else if (op == ' - ') {
            ans = ans - numans;
        }
        else if (op == ' * ') {
            ans = ans * numans;
        }
        else if (op == ' / ') {
            ans = ans / numans;
        }
        else if (op == ' % ') {
            ans = ans / numans;
        }
        pre.textContent = point + op + txtans;
    }
    var outans = String(ans);
    out.innerHTML = outans;
    // console.log(txt + op + txt2);
    // console.log(outans + op + txtans);
    // console.log(ans);
    // console.log(answer);
    // console.log(ans1);
    // console.log(x);
}
