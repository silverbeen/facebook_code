const face={
    maked:document.getElementById("think"),
    add:document.getElementById("modal_make"),
};

var openmodal = document.getElementById("openmodal");
openmodal.addEventListener("click",()=> {
    var modal = document.getElementById("modal");
    modal.style.display = "flex";
});

face.add.addEventListener("click",() => {

    var str = document.getElementById("modal_feed").value;
    str = str.replace(/(?:\r\n|\r|\n)/g, '<br />');
    const facetemplate = `<div>${str}</div>`;
    
});

var Delate=document.getElementById("modal_img");
Delate.addEventListener("click", () => {
    modal.style.display="none";
});

var change=document.getElementById("modal_make");
change.d