function Tab(selector) {
}
Tab.prototype.activate = function (hash) {
}

var travel = new Tab('.tabs');
// travel.activate('#germany'); 하면 독일 텝으로 이동
// 각 텝을 클릭시 텝 콘텐츠에 해당 내용 표시

document.getElementById('ul').addEventListener('click', function(evt){
    var aTag = evt.target;
    if(aTag.className.indexOf() === -1) {
        return;
    }


})