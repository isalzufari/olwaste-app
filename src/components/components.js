const ButtonSucces = () => {
  return (
    <button type="button" className="btn btn-success btn-brand">Okee</button>
  )
}

const ButtonPrimary = (props) => {
  return (
    <button {...props} type="button" className="btn btn-success btn-brand w-100 h-50">{props.children}</button>
  )
}

const ButtonFail = () => {
  return (
    <button type="button" className="btn btn-warning">Okee</button>
  )
}

const Navbar = () => {
  const data = JSON.parse(localStorage.getItem("dataUser"))
  return (
      <>
        <header className="py-3 mb-3 border-bottom">
            <div className="container d-grid gap-3 align-items-center" style={{ gridTemplateColumns: "1fr 2fr"}}>
                <h4><b>OlWaste</b></h4>

                <div className="d-flex align-items-center">
                    <div className="p-2 w-100" role="search">
                        <a href="/" className="m-2 link-dark text-decoration-none">Home</a>
                    </div>
                    <div className="p-2">
                        <a href="/#" className="link-dark"><i className="bi bi-cart"></i></a>
                    </div>
                    {!!data && <div className="p-2 flex-shrink-0 dropdown">
                        <a href="#/" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/img/pengguna.jpg" alt="mdo" width="32" height="32" className="rounded-circle" />
                        </a>
                        <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                            <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="/" onClick={()=>{localStorage.removeItem("dataUser")}}>Sign out</a></li>
                        </ul>
                    </div>}
                    {!!data && <p className="m-2">{data[0].nama}</p>}
                    {!data && <p className="m-2"><a className="text-dark text-decoration-none" href="/login" style={{cursor:"pointer"}}>Login</a></p>}
                </div>
            </div>
        </header>
      </>
  )
}

const CardProduct = () => {
    const name = 'Produk Jadi'
    const creator = 'jimmy'
    const price = 18000;
    return (
        <a href="/#" className="text-decoration-none link-dark">
            <div className="card" style={{ width: '16rem' }}>
                <img src="/img/produkjadi.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <small>Creator @{creator}</small>
                    <p className="card-text">Rp: {price}</p>
                </div>
            </div>
        </a>
    )
}

const CardUser = () => {
    const name = 'Doddy Rafendra'
    const username = 'doddy'
    return (
        <a href="/#" className="text-decoration-none link-dark">
            <div className="card" style={{ width: '16rem' }}>
                <img src="/img/pengguna.jpg" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <small>@{username}</small>
                </div>
            </div>
        </a>
    )
}

const Footer = () => {
  return (
    <footer class="footer mt-auto py-3 bg-light">
      <div class="container text-center">
        <span class="text-muted">Copyright © 2022 | OiWaste</span>
      </div>
    </footer>
  )
}

export { 
    ButtonSucces, 
    ButtonFail, 
    ButtonPrimary,
    Navbar, 
    CardProduct, 
    CardUser, 
    Footer 
};