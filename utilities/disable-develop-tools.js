// 개발자 모드 차단
(function() {
    // 우클릭, 드래그, 복사 차단
    var events = [ "contextmenu", "selectstart", "dragstart"];

    events.forEach(function(event) {
        window.addEventListener(event, blockEvent, true);
    })

    function blockEvent(e) {
        e.preventDefault();
    }
    //=================================================================================
    // 개발자 메뉴 (F12) 차단
    //=================================================================================
    window.addEventListener('keydown', blockDeveloperMenu, true);

    function blockDeveloperMenu(e) {
        if (e.keyCode === 123) { // F12
            blockEvent(e);
        }
        if (e.ctrlKey && e.shiftKey) {
            var code = e.keyCode;
            // 개발자 도구를 여는 Ctrl + Shift + 키 조합
            if (code === 67 || code === 69 || code === 73 || code === 74
                    || code === 75 || code === 77 || code === 83) {
                blockEvent(e);
            }
        }
    }

    setInterval(function() {
        debugger;
    }, 200);
})