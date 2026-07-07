popup = window.open('main__popup.html', '메인용 팝업', 'width=600, status=no, toolbar=no, menubar=no, resizable=1, height=600')
popup.onload = function(){
    let contentHeight = popup.document.querySelector('.popupBox').scrollHeight;
    let browserUiHeight = popup.outerHeight - popup.innerHeight;
    let resizeHeight = contentHeight + browserUiHeight;
    popup.resizeTo(600, resizeHeight)
}