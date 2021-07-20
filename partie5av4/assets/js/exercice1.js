function passverif() {
    var pass = document.getElementById('pass').value;
    var vpass = document.getElementById('vpass').value;
    if( pass != vpass ) { 
        document.getElementById('passs').style.color = "#f00";
    } else { 
        document.getElementById('passs').style.color = "#0f0"; 
    } 
} 