import React from 'react'

const JobForCraft = () => {
  let name='Doddy Rafendra', username='doddy', skill='Kerajinan Kayu';
  
  return (
    <>
      <div className='row'>
        <div className='col'>
          <div className='card'>
            <div className='card-body'>
              <div class="mb-3">
                <label for="judulForm" class="form-label"><b>Judul Pekerjaan</b></label>
                <input type="text" class="form-control" id="judulForm" placeholder="Judul" />
              </div>
              <div class="mb-3">
                <label for="kategoriForm" class="form-label"><b>Kategori</b></label>
                <select class="form-select" aria-label="Default select example" id="kategoriForm">
                  <option selected>Pilih Kategori</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="deskForm" class="form-label"><b>Deskripsi</b></label>
                <textarea class="form-control" id="deskForm" rows="3"></textarea>
              </div>
              <div class="mb-3">
                <label for="offerForm" class="form-label"><b>Penawaran Anda</b></label>
                <input type="number" class="form-control" id="offerForm" placeholder="Penawaran anda" />
              </div>
              <div class="mb-3">
                <label for="reasonOfferForm" class="form-label"><b>Alasan Penawaran</b></label>
                <textarea class="form-control" id="reasonOfferForm" rows="3"></textarea>
              </div>
              <div className='row'>
                <div className='col'>
                  <div class="d-grid">
                    <button class="btn btn-outline-secondary" type="button">Batalkan</button>
                  </div>
                </div>
                <div className='col'>
                  <div class="d-grid">
                    <button class="btn btn-success btn-brand" type="button">Ajukan Penawaran</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col'>
         <div className='card'>
          <div className='card-body'>
            <p><b>Ditujukan oleh</b></p>
            <div className='d-flex align-items-center'>
              <div className='flex-shrink-0'>
                <img width="62" height="62" src='/img/pengrajin.jpg' alt='' className='rounded-circle' />
              </div>
              <div className='flex-grow-1 ms-3'>
                <h6><b>{name}</b></h6>
                <small className='text-muted'>@{username}</small>
              </div>
            </div>
            <small><b>{skill}</b></small>
          </div>
         </div>


         <div className='card mt-3'>
          <div className='card-body'>
            <div className='d-flex'>
              <div className='p-2 flex-grow-1'>
                <p>Nilai Pekerjaan</p>
                <p>Komisi 10%</p>
                <p>Anda bayar</p>
              </div>
              <div class="p-2">
                <p>100.000 IDR</p>
                <p>110.000 IDR</p>
                <p>110.000 IDR</p>
              </div>
            </div>
          </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default JobForCraft;
