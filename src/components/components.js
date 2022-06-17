const ButtonSucces = () => {
  return (
    <button type="button" className="btn btn-success btn-brand">Okee</button>
  )
}

const ButtonFail = () => {
  return (
    <button type="button" className="btn btn-warning">Okee</button>
  )
}

const Navbar = () => {
  return (
      <>
        <header class="py-3 mb-3 border-bottom">
            <div class="container d-grid gap-3 align-items-center" style={{ gridTemplateColumns: "1fr 2fr"}}>
                <h4><b>OlWaste</b></h4>

                <div class="d-flex align-items-center">
                    <div class="p-2 w-100" role="search">
                        <a href="/" className="m-2 link-dark text-decoration-none">Home</a>
                    </div>
                    <div class="p-2">
                        <a href="/#" className="link-dark"><i class="bi bi-cart"></i></a>
                    </div>
                    <div class="p-2 flex-shrink-0 dropdown">
                        <a href="#/" class="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="/img/pengguna.jpg" alt="mdo" width="32" height="32" class="rounded-circle" />
                        </a>
                        <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdownUser2">
                            <li><a class="dropdown-item" href="#">New project...</a></li>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                    <p className="m-2">Jimmy</p>
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
            <div class="card" style={{ width: '16rem' }}>
                <img src="/img/produkjadi.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <small>Creator @{creator}</small>
                    <p>Rp: {price}</p>
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
            <div class="card" style={{ width: '16rem' }}>
                <img src="/img/pengguna.jpg" class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <small>@{username}</small>
                </div>
            </div>
        </a>
    )
}

export { ButtonSucces, ButtonFail, Navbar, CardProduct, CardUser };