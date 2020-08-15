const face={
    maked:document.getElementById("think"),
    add:document.getElementById("modal_make"),
    list: document.getElementById("main_feed"),
    have:document.getElementById("main_center"),

};
let openmodal = document.getElementById("openmodal");

openmodal.addEventListener("click",()=> {
    var modal = document.getElementById("modal");
    modal.style.display = "flex";
});



face.add.addEventListener("click",() => {

    var str = document.getElementById("modal_feed").value;
    str = str.replace(/(?:\r\n|\r|\n)/g, '<br />');

    const faceTemplate = `<div>${str}</div>`;

    const listTemplate=`<li id="main_feed">
    <div id="main_feed-top">
        <div id="main_feed-name">
            <img id="main_feed-face" src="./main-profile.png" alt="">
                <div id="main_feed-time">
                <span>은빈</span>
            </div>
        </div>
        <img src="./modal-icon-more.png" alt="">
    </div>
    <span id="Text">
        ${str}</span>
    <hr class="bor">
    <div id="main_feed-bottom">
        <div id="item">
            <img src="./good.png" alt="">
            <span>좋아요</span>
        </div>
        <div id="item">
            <img src="./comment.png" alt="">
            <span>댓글 달기</span>
        </div>
        <div id="item">
            <img src="./share.png" alt="">
            <span>공유하기</span>
        </div>
    </div>
</li>`


face.have.insertAdjacentHTML("beforeend", listTemplate);
    
});

let Delate=document.getElementById("modal_img");
Delate.addEventListener("click", () => {
    modal.style.display="none";
});
