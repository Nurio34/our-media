
    //** REGISTER FORM SUBMİT */

const form = document.querySelector("form")

    form.addEventListener("submit",async(e)=>{

            e.preventDefault()
            
        try {
            const userMailOrPhone = document.querySelector("#userMailOrPhoneInp").value
            const fullName = document.querySelector("#fullNameInp").value
            const userName = document.querySelector("#userNameInp").value
            const password = document.querySelector("#passwordInp").value

            const res = await axios.post("/auth/register",{
                userMailOrPhone : userMailOrPhone,
                fullName: fullName,
                userName : userName,
                password : password
            })
            
            const token = res.data
                localStorage.setItem("token", token)

                window.location.href = "/user"

        } catch (error) {
            console.log(error);
        }
    })
    
    //** KAYDOL BUTONU */

const loginAnchor = document.querySelector("#loginAnchor")

    loginAnchor.addEventListener("click",()=>{

        window.location.href="/"
    })