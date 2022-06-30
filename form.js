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
} 
