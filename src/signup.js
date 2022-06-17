import { Navbar, Footer, ButtonPrimary } from "./components/components"

//Import React Components
import { useState } from "react"

const SignUp = () => {
    //Logic for role Choose
    const [classRole,setClassRole] = useState(0)
    const chooseRole = (e) => {
        e.preventDefault()
        console.log(e.target.id)
        Number(e.target.id)==2 ? setClassRole(2) : setClassRole(1)
    }
    return(
        <div style={{height:"100vh"}}>
        <Navbar/>
            <div class="container mx-auto d-block div-center text-center h-75 w-100">
                <div class="row mx-auto p-5 align-items-center">
                <h2>Sign Up</h2>
                <form>
                    <div class="form-group p-1">
                        <input class="w-50 p-1 rounded border border-black" placeholder="Nama" type="text"/>
                    </div>
                    <div class="form-group">
                        <input class="w-50 p-1 rounded border border-black" placeholder="Email" type="email"/>
                    </div>
                    <div class="form-group p-1">
                        <input class="w-50 p-1 rounded border border-black" placeholder="Password" type="password"/>
                    </div>
                    <div class="d-flex justify-content-center align-items-center">
                        <div style={{cursor:"pointer"}} class={classRole == 1 ? "rounded border border-success w-25" :"rounded border border-black w-25"} onClick={chooseRole} id="1">
                            <h6 id="!">Pengguna</h6>
                        </div>
                        <div style={{cursor:"pointer"}} class={classRole == 2 ? "rounded border border-success w-25" :"rounded border border-black w-25"} onClick={chooseRole} id="2">
                            <h6 id="2">Pengrajin</h6>
                        </div>
                    </div>
                </form>
                <div class="container w-25 p-2">
                    <ButtonPrimary><h6>Buat Akun</h6></ButtonPrimary>
                </div>
                <p class="text-muted">Sudah punya akun? <a href="/login">Log In</a></p>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default SignUp