$(document).ready(function () {

    var navListItems = $('div.setup-panel div a'),
            allWells = $('.setup-content'),
            allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function (e) {
        e.preventDefault();
        var $target = $($(this).attr('href')),
                $item = $(this);

        if (!$item.hasClass('disabled')) {
            navListItems.removeClass('btn-primary').addClass('btn-default');
            $item.addClass('btn-primary');
            allWells.hide();
            $target.show();
            $target.find('input:eq(0)').focus();
        }
    });

    allNextBtn.click(function(){
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='url']"),
            isValid = true;
            debugger
            if(curStepBtn == "step-1"){
                $('.new_lease1').css('display','block');
                $('.new_lease').css('display','none');
                $('.new_lease2').css('display','none');
                $('.new_lease3').css('display','none');
                $('.new_lease4').css('display','none');
            }
            if(curStepBtn == "step-2"){
                $('.new_lease2').css('display','block');
                $('.new_lease').css('display','none');
                $('.new_lease1').css('display','none');
                $('.new_lease3').css('display','none');
                $('.new_lease4').css('display','none');
            }
            if(curStepBtn == "step-3"){
                $('.new_lease3').css('display','block');
                $('.new_lease').css('display','none');
                $('.new_lease1').css('display','none');
                $('.new_lease2').css('display','none');
                $('.new_lease4').css('display','none');
            }
            if(curStepBtn == "step-4"){
                $('.new_lease4').css('display','block');
                $('.new_lease').css('display','none');
                $('.new_lease1').css('display','none');
                $('.new_lease3').css('display','none');
                $('.new_lease2').css('display','none');
            }
        $(".form-group").removeClass("has-error");
        for(var i=0; i<curInputs.length; i++){
            if (!curInputs[i].validity.valid){
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");
            }
        }

        if (isValid)
        debugger;
            nextStepWizard.removeAttr('disabled').trigger('click');
            
            
            
    });
    $('div.setup-panel div a.btn-primary').trigger('click');
});
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#blah')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
function Validate() {
    var password = document.getElementById("txtPassword").value;
    var confirmPassword = document.getElementById("txtConfirmPassword").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;
}