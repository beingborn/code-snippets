/* 현재 포커스 요소 확인 */
document.addEventListener('focusin', (e) => {
    const target = e.target;

    console.log('focusEl', target);
    console.log('클래스명', target.className);
});