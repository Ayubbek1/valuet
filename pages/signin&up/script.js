
import {
    getData,
    postData
} from "../../modules/http";
let inputs = document.querySelectorAll('input')
let signin = document.querySelector("#signin")
console.log(signin);
signin.onclick = () =>{
    console.log(1);
    let error = false;

    inputs.forEach((inp) => {
        if (inp.value.length === 0) {
            error = true;
            inp.classList.add("error");
        } else {
            inp.classList.remove("error");
        }
    })
    if (error) {
        return error
    } else {
        submit()
    }
}


function submit() {
    let user = {
        email:inputs[0].value,
        password:inputs[1].value,
    };
    localStorage.setItem("user",JSON.stringify(user))
    console.log(user);
    getData('/users?email=' + user.email)
        .then(res => {
            console.log(res);
            if (res.length > 0) {
                alert('Уже занято!')
                return
            }
            postData('/users', user)
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        location.assign('/')
                    }
                })
        })
}