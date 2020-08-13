var str = document.getElementById("textarea").value;

str = str.replace(/(?:\r\n|\r|\n)/g, '<br />');

document.getElementById("text").innerHTML = str;

