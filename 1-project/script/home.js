
    //** LOGIN FORM SUBMİT */

const form = document.querySelector("form")

    form.addEventListener("submit",async(e)=>{

            e.preventDefault()
            
        try {
            
            const userInfo = document.querySelector("#userInfoInp").value
            const password = document.querySelector("#passwordInp").value

            const res = await axios.post("/auth/login",{
                userInfo : userInfo,
                password: password
            })

            const data = res.data
                localStorage.setItem("token", data.token)

                    console.log(data);

                window.location.href = "/user"

        } catch (error) {
            console.log(error);
        }
    })


    //** KAYDOL BUTONU */

const registerAnchor = document.querySelector("#registerAnchor")

    registerAnchor.addEventListener("click",async()=>{

        window.location.href="/register"
    })