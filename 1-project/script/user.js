
//** SAYFA YÜKLENDİĞİNDE TÜM DATAYI AL */

    window.addEventListener("DOMContentLoaded", async()=> {

        const token = localStorage.getItem("token")

        const res = await axios.get("/user/home",{
            
            headers : {
                Authorization : `Bearer ${token}`
            }
        })

            console.log(res.data);
    })


//** DENEME : SAYFA YÜKLENDİKTEN 1 SN SONRA DATA OLUŞTUR VE BUNLA BERABER TÜM DATAYI AL */

    setTimeout(async() => {
        
    //** DATA OLUŞTUR */

        const token = localStorage.getItem("token")

        const res = await axios.post("/user/home",{
            message : "message eight"
        },{
            
            headers : {
                Authorization : `Bearer ${token}`
            }
        })
            console.log(res);

    //** TÜM DATAYI AL */

        const resp = await axios.get("/user/home",{
            
            headers : {
                Authorization : `Bearer ${token}`
            }
        })

            console.log(resp.data);

    }, 1000);


//** LOG OUT */

const logOutBtn = document.querySelector("#logOutBtn")

    logOutBtn.addEventListener("click",()=>{

        localStorage.clear()
        window.location.href = "/"
    })

    console.log(logOutBtn);