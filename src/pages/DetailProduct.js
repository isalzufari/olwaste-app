import React from 'react'

const DetailProduct = ({ price=120000, creator='doddy', desc='Rak yang dibuat dari kayu bekas berbahan kayu jati dengan dimensi 2 x 2 meter.'}) => {
  return (
    <>
      <div className='row align-items-center'>
        <div className='col-sm-6 d-flex justify-content-end'>
          <img width="320" height="320" src="/img/produkjadi.jpg" className="rounded img-fluid" alt="..." />
        </div>
        <div className='col-sm-6 mt-3'>
          <h3><b>Meja Buku</b></h3>
          <p>Rp {price}</p>
          <p><b>Creator:</b> @{creator}</p>
          <p>{desc}</p>
          <div className='row'>
            <div className='col-12 col-sm-2 mb-3'>
              <div class="d-grid">
                <button class="btn btn-outline-secondary" type="button">Chat</button>
              </div>
            </div>
            <div className='col col-sm-10'>
              <div class="d-grid">
                <button class="btn btn-success btn-brand" type="button">Tambah ke keranjang</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailProduct;
