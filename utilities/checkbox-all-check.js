// 아이디가 chkAll인 요소 클릭 시 
// input중 name이 chk인 요소들의 checked 속성을 true 변경

const allCheckBtn = $('#chkAll');
const total = $(input[name='chk']).length;
const chkChecked = $(input[name='chk'].checked).length;

$(function(){

	// All Check Btn
	allCheckBtn.on('click',function(){

		if(allcheckBtn.is(":checked")){
			$('input[name=chk]').prop('checked', true);
		else {
			$('input[name=chk]').prop('checked', false);
		}
	}
	
  // 개별 체크 확인
  $('input[name="chk"]').on('click', function() {
      if ( total === checkedTotal ) {
          allCheckBtn.prop('checked', true)
      } else {
          allCheckBtn.prop('checked', false)
      }
  }
})