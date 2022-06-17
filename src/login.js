import { Navbar, Footer, ButtonPrimary } from "./components/components"

const Login = () => {
    return(
        <div style={{height:"100vh"}}>
        <Navbar/>
            <div class="container mx-auto d-block div-center text-center h-75">
                <div class="row mx-auto p-5 align-items-center">
                <h2>Log In</h2>
                <form>
                    <div class="form-group w-100 p-1">
                        <input class="w-25 p-1 rounded border border-black" placeholder="Username" type="text"/>
                    </div>
                    <div class="form-group">
                        <input class="w-25 p-1 rounded border border-black" placeholder="Password" type="password"/>
                    </div>
                </form>
                <div class="container w-25 p-1">
                    <ButtonPrimary><h5>Login</h5></ButtonPrimary>
                </div>
                <p class="text-muted">Belum punya akun? <a href="/signup">Daftar Sekarang</a></p>
                </div>
            </div>
        <Footer/>
        </div>
    )
}

export default Login