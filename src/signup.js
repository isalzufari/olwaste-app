import { Navbar, Footer, ButtonPrimary } from "./components/components"

//Import from library
import { useState } from "react"
import { sha256 } from "js-sha256"
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    let navigate = useNavigate();
    const [classRole,setClassRole] = useState(0)
    const [errShow, setErrShow] = useState(false)
    const [emailTaken, setEmailTaken] = useState(false)
    //Logic for role Choose
    const chooseRole = (e) => {
        e.preventDefault()
        console.log(e.target.id)
        Number(e.target.id)==2 ? setClassRole(2) : setClassRole(1)
    }
    const signUpHandler = async (e) => {
        e.preventDefault()
        setErrShow(false)
        setEmailTaken(false)
        const nama = document.getElementById("nama").value
        const password = sha256(document.getElementById("password").value)
        const email = document.getElementById("email").value
        const kota = document.getElementById("kota").value
        if(nama==undefined || password==undefined || email==undefined || kota==undefined || classRole==0){
            setErrShow(true)
        }else{
            const ket = classRole == 1 ? "pengguna" : "pengrajin"
            const response = await fetch("https://olwastebe.affaalfiandy.my.id/checkemail",{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({"email":email})
                })
            const data = await response.json()
            if(data[0]==undefined){
                if(ket=="pengguna"){
                    console.log("Pengguna")
                    const regist = await fetch("https://olwastebe.affaalfiandy.my.id/registkonsumen",{
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({"nama":nama,"password":password,"kota":kota,"ket":ket,"email":email})
                        })
                }else{
                    console.log("pengrajin")
                    const regist = await fetch("https://olwastebe.affaalfiandy.my.id/registpengrajin",{
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({"nama":nama,"password":password,"kota":kota,"ket":ket,"email":email})
                        })
                }
            }else{
                setEmailTaken(true)
            }
        }
        navigate("/login")
    }
    return(
        <div style={{height:"100vh"}}>
        <Navbar/>
            <div class="container mx-auto d-block div-center text-center h-75 w-100">
                <div class="row mx-auto p-5 align-items-center">
                <h2>Sign Up</h2>
                <form>
                    <div class="form-group p-1">
                        <input id="nama" class="w-50 p-1 rounded border border-black" placeholder="Nama" type="text"/>
                    </div>
                    <div class="form-group">
                        <input id="email" class="w-50 p-1 rounded border border-black" placeholder="Email" type="email"/>
                    </div>
                    <div class="form-group p-1">
                        <input id="password" class="w-50 p-1 rounded border border-black" placeholder="Password" type="password"/>
                    </div>
                    <div class="form-group p-1">
                        <input id="kota" class="w-50 p-1 rounded border border-black" placeholder="Kota" type="text"/>
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
                    {errShow && <p style={{color:"red"}}>Data Tidak Lengkap!</p>}
                    {emailTaken && <p style={{color:"red"}}>Email Sudah Terdaftar!</p>}
                    <ButtonPrimary onClick={signUpHandler}><h6>Buat Akun</h6></ButtonPrimary>
                </div>
                <p class="text-muted">Sudah punya akun? <a href="/login">Log In</a></p>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default SignUp