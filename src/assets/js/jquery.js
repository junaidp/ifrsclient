$(document).ready(function() {

    var navListItems = $('div.setup-panel div a'),
        allWells = $('.setup-content'),
        allNextBtn = $('.nextBtn');

    allWells.hide();

    navListItems.click(function(e) {
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

    allNextBtn.click(function() {
        var curStep = $(this).closest(".setup-content"),
            curStepBtn = curStep.attr("id"),
            nextStepWizard = $('div.setup-panel div a[href="#' + curStepBtn + '"]').parent().next().children("a"),
            curInputs = curStep.find("input[type='text'],input[type='number'],input[type='url']"),
            isValid = true;

        $(".form-group").removeClass("has-error");

        for (var i = 0; i < curInputs.length; i++) {
            if (!curInputs[i].validity.valid) {
                isValid = false;
                $(curInputs[i]).closest(".form-group").addClass("has-error");

            }
        }
        if (!isValid) {
            alert('Fill all Fields');
        }

        if (isValid) {
            nextStepWizard.removeAttr('disabled').trigger('click');

            if (curStepBtn == "step-1") {
                $('.new_lease1').css('display', 'block');
                $('.new_lease').css('display', 'none');
                $('.new_lease2').css('display', 'none');
                $('.new_lease3').css('display', 'none');
                $('.new_lease4').css('display', 'none');
                $('.bolder').css('font-weight', 'normal');
                $('.bolder1').css('font-weight', 'bolder');
                $('.bolder2').css('font-weight', 'normal');
                $('.bolder3').css('font-weight', 'normal');
                $('.bolder4').css('font-weight', 'normal');
            }
            if (curStepBtn == "step-2") {
                $('.new_lease2').css('display', 'block');
                $('.new_lease').css('display', 'none');
                $('.new_lease1').css('display', 'none');
                $('.new_lease3').css('display', 'none');
                $('.new_lease4').css('display', 'none');
                $('.bolder').css('font-weight', 'normal');
                $('.bolder2').css('font-weight', 'bolder');
                $('.bolder1').css('font-weight', 'normal');
                $('.bolder3').css('font-weight', 'normal');
                $('.bolder4').css('font-weight', 'normal');
            }
            if (curStepBtn == "step-3") {
                $('.new_lease3').css('display', 'block');
                $('.new_lease').css('display', 'none');
                $('.new_lease1').css('display', 'none');
                $('.new_lease2').css('display', 'none');
                $('.new_lease4').css('display', 'none');
                $('.bolder').css('font-weight', 'normal');
                $('.bolder3').css('font-weight', 'bolder');
                $('.bolder1').css('font-weight', 'normal');
                $('.bolder2').css('font-weight', 'normal');
                $('.bolder4').css('font-weight', 'normal');
            }
            if (curStepBtn == "step-4") {
                $('.new_lease4').css('display', 'block');
                $('.new_lease').css('display', 'none');
                $('.new_lease1').css('display', 'none');
                $('.new_lease3').css('display', 'none');
                $('.new_lease2').css('display', 'none');
                $('.bolder').css('font-weight', 'normal');
                $('.bolder4').css('font-weight', 'bolder');
                $('.bolder1').css('font-weight', 'normal');
                $('.bolder3').css('font-weight', 'normal');
                $('.bolder2').css('font-weight', 'normal');
            }
        }
    });
    $('div.setup-panel div a.btn-primary').trigger('click');
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
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

$(document).ready(function() {
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("closes")[0];

    // When the user clicks the button, open the modal 


    // When the user clicks on <span> (x), close the modal


    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

function show(select_item) {
    if (select_item == 1) {
        hiddenDiv.style.visibility = 'visible';
        hiddenDiv.style.display = 'block';
        //lease_no.style.display = 'none';
        //lease_no.style.visibility = 'hidden';
        document.getElementById("lease_no").innerHTML = "---";
        $('#lease_no').css({ 'color': 'green', 'display': 'inline-block' });
    } else if (select_item == 0) {
        hiddenDiv.style.visibility = 'hidden';
        hiddenDiv.style.display = 'none';
        //lease_no.style.visibility = 'visible';
        //hiddenDiv1.style.visibility = 'hidden';
        document.getElementById("lease_no").innerHTML = "Does not contain a lease";
        $('#lease_no').css({ 'color': 'red', 'font-weight': 'bold', 'display': 'inline-block' });
        hiddenDiv1.style.display = 'none';
        hiddenDiv2.style.visibility = 'hidden';
        hiddenDiv2.style.display = 'none';
        hiddenDiv3.style.visibility = 'hidden';
        hiddenDiv3.style.display = 'none';
        hiddenDiv4.style.visibility = 'hidden';
        hiddenDiv4.style.display = 'none';
        hiddenDiv5.style.visibility = 'hidden';
        hiddenDiv5.style.display = 'none';
    }
}

function show1(select_item) {
    if (select_item == 1) {
        hiddenDiv1.style.visibility = 'visible';
        hiddenDiv1.style.display = 'block';
        // lease_no.style.display = 'none';
        // lease_no.style.visibility = 'hidden';
        document.getElementById("lease_no").innerHTML = "---";
        //document.getElementById("lease_no").css({ 'url': '../img/locding.gif' });
        $('#lease_no').css({ 'color': 'green', 'display': 'inline-block' });

    } else if (select_item == 0) {
        hiddenDiv1.style.visibility = 'hidden';
        hiddenDiv1.style.display = 'none';
        //lease_no.style.display = 'block'
        //lease_no.style.visibility = 'visible';
        document.getElementById("lease_no").innerHTML = "Does not contain a lease";
        $('#lease_no').css({ 'color': 'red', 'font-weight': 'bold', 'display': 'block' });
    }
}

function show2(select_item) {
    if (select_item == 0) {
        hiddenDiv2.style.visibility = 'visible';
        hiddenDiv2.style.display = 'block';
        // lease_no.style.display = 'none';
        // lease_no.style.visibility = 'hidden';
        document.getElementById("lease_no").innerHTML = "---";
        $('#lease_no').css({ 'color': 'green', 'display': 'block' });
    } else if (select_item == 1) {
        hiddenDiv2.style.visibility = 'hidden';
        hiddenDiv2.style.display = 'none';
        // lease_no.style.display = 'block'
        // lease_no.style.visibility = 'visible';
        document.getElementById("lease_no").innerHTML = "Does not contain a lease";
        $('#lease_no').css({ 'color': 'red', 'font-weight': 'bold', 'display': 'block' });
    }
}

function show3(select_item) {
    if (select_item == 1) {
        hiddenDiv3.style.visibility = 'visible';
        hiddenDiv3.style.display = 'block';
        // lease_no.style.display = 'none';
        // lease_no.style.visibility = 'hidden';
        document.getElementById("lease_no").innerHTML = "---";
        $('#lease_no').css({ 'color': 'green', 'display': 'block' });
    } else if (select_item == 0) {
        hiddenDiv3.style.visibility = 'hidden';
        hiddenDiv3.style.display = 'none';
        // lease_no.style.display = 'block'
        // lease_no.style.visibility = 'visible';
        document.getElementById("lease_no").innerHTML = "Does not contain a lease";
        $('#lease_no').css({ 'color': 'red', 'font-weight': 'bold', 'display': 'block' });
    }
}

function show4(select_item) {
    if (select_item == 1) {
        hiddenDiv4.style.visibility = 'visible';
        hiddenDiv4.style.display = 'block';
        // lease_no.style.display = 'none';
        // lease_no.style.visibility = 'hidden';
        document.getElementById("lease_no").innerHTML = "---";
        $('#lease_no').css({
            'color': 'green',
            'display': 'block'
        });
    } else {
        hiddenDiv4.style.visibility = 'hidden';
        hiddenDiv4.style.display = 'none';
        // lease_no.style.display = 'block'
        // lease_no.style.visibility = 'visible';
        document.getElementById("lease_no").innerHTML = "Does not contain a lease";
        $('#lease_no').css({ 'color': 'red', 'font-weight': 'bold', 'display': 'block' });
    }
}

function show5(select_item) {
    if (select_item == 1) {
        hiddenDiv4.style.visibility = 'visible';
        hiddenDiv4.style.display = 'block';
        // lease_no.style.display = 'none';
        // lease_no.style.visibility = 'hidden';
        document.getElementById("lease_no").innerHTML = "---";
        $('#lease_no').css({ 'color': 'green', 'display': 'block' });
    } else if (select_item == 0) {
        hiddenDiv5.style.visibility = 'hidden';
        hiddenDiv5.style.display = 'none';
        hiddenDiv4.style.visibility = 'hidden';
        hiddenDiv4.style.display = 'none';
        document.getElementById("lease_no").innerHTML = "Does not contain a lease";
        $('#lease_no').css({ 'color': 'red', 'font-weight': 'bold', 'display': 'block' });
        // lease_no.style.display = 'block'
        // lease_no.style.visibility = 'visible';
        // lease_yes.style.visibility = 'hidden';
        // lease_yes.style.display = 'none';
    } else if (select_item == 2) {
        hiddenDiv5.style.visibility = 'hidden';
        hiddenDiv5.style.display = 'none';
        hiddenDiv4.style.visibility = 'hidden';
        hiddenDiv4.style.display = 'none';
        // lease_yes.style.display = 'block'
        // lease_yes.style.visibility = 'visible';
        // lease_no.style.visibility = 'hidden';
        // lease_no.style.display = 'none';
        document.getElementById("lease_no").innerHTML = "Contains a lease";
        $('#lease_no').css({ 'color': 'green', 'display': 'block' });
    }
}

function show6(select_item) {
    if (select_item == 1) {
        hiddenDiv5.style.visibility = 'visible';
        hiddenDiv5.style.display = 'block';
        document.getElementById("lease_no").innerHTML = "---";
        $('#lease_no').css({ 'color': 'green', 'display': 'block' });
    } else if (select_item == 0) {
        //lease_yes.style.visibility = 'hidden';
        //lease_yes.style.display = 'visible';
        hiddenDiv5.style.visibility = 'hidden';
        hiddenDiv5.style.display = 'none';
        // lease_no.style.visibility = 'visible';
        // lease_no.style.display = 'block';
        document.getElementById("lease_no").innerHTML = "Does not contain a lease";
        $('#lease_no').css({ 'color': 'red', 'font-weight': 'bold', 'display': 'block' });
    }
}

function show7(select_item) {
    if (select_item == 1) {
        // lease_yes.style.visibility = 'visible';
        // lease_yes.style.display = 'block';
        // lease_no.style.visibility = 'hidden';
        // lease_no.style.display = 'none';
        document.getElementById("lease_no").innerHTML = "Contains a lease";
        $('#lease_no').css({ 'color': 'green', 'display': 'block' });
    } else if (select_item == 0) {
        // lease_no.style.visibility = 'visible';
        // lease_no.style.display = 'block'
        // lease_yes.style.visibility = 'hidden';
        // lease_yes.style.display = 'none';
        document.getElementById("lease_no").innerHTML = "Does not contain a lease";
        $('#lease_no').css({ 'color': 'red', 'font-weight': 'bold', 'display': 'block' });
    }
}

function getvalue() {
    var firstDivContent = $('#lease_no').text();
    //alert(firstDivContent);
    document.getElementById("showvalue").innerHTML = $('#lease_no').text();
    var q1 = $('.quest1_answer option:selected').text();
    var q2 = $('.quest2_answer option:selected').text();
    var q3 = $('.quest3_answer option:selected').text();
    var q4 = $('.quest4_answer option:selected').text();
    var q5 = $('.quest5_answer option:selected').text();
    var q6 = $('.quest6_answer option:selected').text();
    if (q1 == "Yes") {
        $('.quest2').hide();
        $('.quest3').hide();
        $('.quest4').hide();
        $('.quest5').hide();
        $('.quest6').hide();
        $('.quest7').hide();
    } else if (q1 == "No") {
        $('.quest2').show();
        $('.quest3').hide();
        $('.quest4').hide();
        $('.quest5').hide();
        $('.quest6').hide();
        $('.quest7').hide();
    }
    if (q2 == "Yes") {
        $('.quest3').show();
        $('.quest4').hide();
        $('.quest5').hide();
        $('.quest6').hide();
        $('.quest7').hide();
    } else if (q2 == "No") {
        $('.quest3').hide();
        $('.quest4').hide();
        $('.quest5').hide();
        $('.quest6').hide();
        $('.quest7').hide();
    }
    if (q3 == "Yes") {
        $('.quest4').hide();
        $('.quest5').hide();
        $('.quest6').hide();
        $('.quest7').hide();
    } else if (q3 == "No") {
        $('.quest4').show();
        $('.quest5').hide();
        $('.quest6').hide();
        $('.quest7').hide();
    }
    if (q4 == "Yes") {
        $('.quest5').show();
        $('.quest6').hide();
        $('.quest7').hide();
    } else if (q4 == "No") {
        $('.quest5').hide();
        $('.quest6').hide();
        $('.quest7').hide();
    }
    if (q5 == "Customer") {
        $('.quest6').hide();
        $('.quest7').hide();
    } else if (q5 == "Supplier") {
        $('.quest6').hide();
        $('.quest7').hide();
    } else if (q5 == "Neither Party") {
        $('.quest6').show();
        $('.quest7').hide();
    }
    if (q6 == "Yes") {
        $('.quest7').show();
    } else if (q6 == "No") {
        $('.quest7').hide();
    }
}

function showpopup(select_item) {
    if (select_item == 1) {
        myModal.style.visibility = 'visible';
        myModal.style.display = 'block';
    }
}

function closess() {
    myModal.style.display = 'none';
}

function showpopupq1() {
    question_popup1.style.visibility = 'visible';
    question_popup1.style.display = 'block';
}

function closes() {
    question_popup1.style.display = 'none';
}

function showpopupq2() {
    question_popup2.style.visibility = 'visible';
    question_popup2.style.display = 'block';
}

function showpopupq3() {
    question_popup3.style.visibility = 'visible';
    question_popup3.style.display = 'block';
}

function showpopupq4() {
    question_popup4.style.visibility = 'visible';
    question_popup4.style.display = 'block';
}

function showpopupq5() {
    question_popup5.style.visibility = 'visible';
    question_popup5.style.display = 'block';
}

function showpopupq6() {
    question_popup6.style.visibility = 'visible';
    question_popup6.style.display = 'block';
}

function showpopupq7() {
    question_popup7.style.visibility = 'visible';
    question_popup7.style.display = 'block';
}

function showpopuptermperiod() {
    question_popuptermperiod.style.visibility = 'visible';
    question_popuptermperiod.style.display = 'block';
}

function closestermpriod() {
    question_popuptermperiod.style.display = 'none';
}

function shownext() {
    $(".shownext1").toggle("slow");
}

function shownext1() {
    $(".shownextq5").toggle("slow");
}

function closes4() {
    question_popup4.style.display = 'none';
}

function closes1() {
    question_popup1.style.display = 'none';
}

function closes2() {
    question_popup2.style.display = 'none';
}

function closes3() {
    question_popup3.style.display = 'none';
}

function closes5() {
    question_popup5.style.display = 'none';
}

function closes6() {
    question_popup6.style.display = 'none';
}

function closes7() {
    question_popup7.style.display = 'none';
}

function journal_entry_dis() {
    $(".journal_display").togle("slow");
}
// $('select option').each(function() {
//     if ($.inArray(this.value, optionValues) > -1) {
//         $(this).remove()
//     } else {
//         optionValues.push(this.value);
//     }
// });
$("#color option").val(function(idx, val) {
    $(this).siblings("[value='" + val + "']").remove();
});