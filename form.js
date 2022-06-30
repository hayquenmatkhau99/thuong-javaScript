function check_step_one() {
    var a = document.getElementById('first_name')
    if (a.value == '') {
        a.classList.add('request');
        document.getElementsByClassName('sup_first_name')[0].style.display = 'block';
    }

    var b = document.getElementById('last_name')
    if (b.value == '') {
        b.classList.add('request');
        document.getElementsByClassName('pix_first_name')[0].style.display = 'block';
    }


    var dropdownele = document.getElementById("dropdown");
    if (dropdownele.value == '') {
        dropdownele.classList.add('request');
        document.getElementsByClassName('first_dropdown')[0].classList.add('showerror');
    }

    var birth_date = document.getElementById(' birth_date');
    if (birth_date.value == '') {
        birth_date.classList.add('request');
        document.getElementsByClassName('first_date')[0].classList.add('showerror');
    }
    if (document.querySelector('input[name="input_radio"]:checked') == null) {
        document.getElementsByClassName('radio')[0].classList.add('showerror');
        // get_child_text()
    }
    var email = document.getElementById('ff_50_email');
    if (email.value == "") {
        var email_lable = document.getElementById('email');
        get_child_text(email_lable)
    }
    var phone = document.getElementById('ff_50_numeric-field');
    if (phone.value == "") {
        var phone_error = document.getElementById('phone');
        get_child_text(phone_error)
    }
}
function get_child_text(parrentNode) {
    if (parrentNode) {
        textNode = document.createTextNode(
            'This field is required'
        );
        pTag = document.createElement("p");
        pTag.appendChild(textNode);
        pTag.classList.add('showerror');
        parrentNode.appendChild(pTag);

    }
}