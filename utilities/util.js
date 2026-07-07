// 카운터 애니메이션
$('.counter').each(function () {
    var $this = $(this),
        countTo = +$this.attr('data-target');
        displayNum = 0;
        delay = Number($(this).attr('data-delay')) || 0;

    setTimeout(() => {
        $({ countNum: $this.text() }).animate(
            {
                countNum: countTo,
            },
            {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    // step size
                    let remain = countTo - displayNum;
                    let stepSize;

                    if (displayNum < countTo * 0.7) {
                        stepSize = 1;
                    } else if (displayNum < countTo * 0.9) {
                        stepSize = 1;
                    } else {
                        stepSize = 1; // 마지막 10%
                    }

                    displayNum = Math.min(countTo, displayNum + stepSize);

                    $this.text(displayNum);

                    if (remain <= 0) return;
                },
                complete: function () {
                    console.log('애니메이션 완료');
                    // $this.text(this.countNum);
                },
            }
        );
    }, delay);
});