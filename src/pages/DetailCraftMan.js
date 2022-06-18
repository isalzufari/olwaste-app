import React from 'react'
import { CardProduct } from '../components/components';

const DetailCraftMan = () => {
  let name='Doddy Rafendra', username='doddy', skill='Kerajinan Kayu';

  return (
    <div className='row'>
      <div className='col'>
        <div className='card'>
          <div className='card-body'>
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
            <div className='row my-3'>
              <div className='col'>
                <div class="d-grid">
                <button class="btn btn-success btn-brand" type="button">Chat</button>
                </div>
              </div>
              <div className='col'>
                <div class="d-grid">
                <button class="btn btn-success btn-brand" type="button">Sewa Jasa</button>
                </div>
              </div>
            </div>
            <p><b>Lokasi</b></p>
            <p>Depok</p>
            <p><b>Total Rating</b></p>
            <p>4.5/5 (153 Reviews)</p>
            <p><b>Ongoing Jobs</b></p>
            <p>Membuat Rak Buku</p>
          </div>
        </div>
      </div>
      <div className='col'>
        <div className='card'>
          <div className='card-body'>
            <p><b>Profil</b></p>
            <p>Saya berpengalaman di dunia pembuatan mebel sejak tahun 2014. Membuat barang di bidang kerajinan kayu.</p>
            <p><b>Produk</b></p>
            <CardProduct />
            <p className='mt-3'><b>Review</b></p>
            <div className='row'>
              <div className='col-2'>
                <img width="62" height="62" src='/img/pengrajin.jpg' alt='' className='rounded-circle' />
                <small><b>Jimmy</b> <small>24 May 2022</small></small>
              </div>
              <div className='col'>
                <h6><b>Membuat meja dari kayu bekas renov rumah</b></h6>
                <span>Rp 240.000</span>
                <p><b>Rating :</b></p>
                <ul>
                  <li>Communication (4)</li>
                  <li>On Time (4)</li>
                  <li>Quality of Work (4)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCraftMan;
