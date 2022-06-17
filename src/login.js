//import for OlWaste components
import { Navbar, Footer, ButtonPrimary } from "./components/components"

//import library components
import { sha256 } from "js-sha256"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const Login = () => {
    //preparing library
    let navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const [errShow, setErrShow] = useState(false)
    //function for login handler
    const loginHandler = async (e) => {
        e.preventDefault()
        //set loading
        setLoading(true)
        setErrShow(false)
        //get data from form
        const username = document.getElementById("username").value
        const password = document.getElementById("password").value
        //fetch to API
        const response = await fetch("https://olwastebe.affaalfiandy.my.id/login",{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({"username":username, "password":sha256(password)})
            })
        const data = await response.json()
        console.log(data[0])
        if(data[0]!=undefined){
            localStorage.setItem("dataUser",JSON.stringify(data))
            //redirect to home page
            setLoading(false)
            navigate("/")
        }else{
            setLoading(false)
            setErrShow(true)
        }
        //save data to local storage

    }
    return(
        <div style={{height:"100vh"}}>
        <Navbar/>
            <div class="container mx-auto d-block div-center text-center h-75">
                <div class="row mx-auto p-5 align-items-center">
                <h2>Log In</h2>
                <form>
                    <div class="form-group w-100 p-1">
                        <input id="username" class="w-25 p-1 rounded border border-black" placeholder="Username or Password" type="text"/>
                    </div>
                    <div class="form-group">
                        <input id="password" class="w-25 p-1 rounded border border-black" placeholder="Password" type="password"/>
                    </div>
                </form>
                <div class="container w-25 p-1">
                    {errShow && <p style={{color:"red"}}>Username atau Password Salah</p>}
                    {!loading && <ButtonPrimary onClick={loginHandler}><h5>Login</h5></ButtonPrimary>}
                    {loading && <ButtonPrimary><h5>Sedang Masuk...</h5></ButtonPrimary>}
                </div>
                <p class="text-muted">Belum punya akun? <a href="/signup">Daftar Sekarang</a></p>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default Login