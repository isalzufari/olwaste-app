// Import Olwaste Components
import { CardUser, CardProduct } from "../components/components"

//Import React components 
import { useEffect, useState } from "react"

const Home = () =>{
    //preparing library needed
    const [dataProduk, setDataProduk] = useState([])
    const [dataSampah, setDataSampah] = useState([])
    const [dataPengrajin, setDataPengrajin] = useState([])

    //fetching to get all data
    useEffect(()=>{
        //=================== fetch pengrajin ===============
        fetch("https://olwastebe.affaalfiandy.my.id/gettoppengrajin")
        .then(res=>res.json())
        .then(res=>{setDataPengrajin(res)})

        // =================== Fetch Produk ======================
        fetch("https://olwastebe.affaalfiandy.my.id/gettopproduk")
        .then(res=>res.json())
        .then(res=>{setDataProduk(res)})

        // ===================== fetch SAmpah ==============
        fetch("https://olwastebe.affaalfiandy.my.id/gettopsampah")
        .then(res=>res.json())
        .then(res=>{setDataSampah(res)})
    })
    return(
        <div className="d-block">
            <div className="container d-inline-flex justify-content-between">
                <div className="d-block w-50">
                    <h5>Best Quality Product</h5>
                    <h1>Waste Solution, Let's Collaborate</h1>
                    <br/>
                    <p>We produce limited and high quality waste products from waste!</p>
                </div>
                <div className="card" style={{ width: '16rem' }}>
                    <img src="/img/HomeImage.png" className="card-img-top" alt="..." />
                </div>
            </div>

            {/* Pengrajin Section */}
            <div className="container d-inline-flex mt-5 justify-content-between">
                <h3>Pengrajin</h3>
                <a style={{cursor:"pointer",textDecoration:"none"}} className="text-success" href="/caripengrajin"><h5 style={{cursor:"pointer"}} className="text-success cursor-pointer">Lihat Semua</h5></a>
            </div>
            <div className="container">
                <div className="row">
                {dataPengrajin.map((val, id)=>{
                    return(
                        <div className="col-sm-3">
                            <CardUser name={val.nama} kota={val.kota}/>
                        </div>
                    )
                })}
                </div>
            </div>


            {/* product Section */}
            <div className="container d-inline-flex mt-5 justify-content-between">
                <h3>Produk Populer</h3>
                <a style={{cursor:"pointer",textDecoration:"none"}} className="text-success" href="/cariproduk"><h5 style={{cursor:"pointer"}} className="text-success cursor-pointer">Lihat Semua</h5></a>
            </div>
            <div className="container">
                <div className="row">
                {dataProduk.map((val, id)=>{
                    return(
                        <div className="col-sm-3">
                            <CardProduct name={val.nama} penjual={val.penjual} harga={val.harga}/>
                        </div>
                    )
                })}
                </div>
            </div>

            <div className="container d-inline-flex mt-5 justify-content-between">
                <h3>Sampah</h3>
                <a style={{cursor:"pointer",textDecoration:"none"}} className="text-success" href="/carisampah"><h5 style={{cursor:"pointer"}} className="text-success cursor-pointer">Lihat Semua</h5></a>
            </div>
            <div className="container">
                <div className="row">
                {dataSampah.map((val, id)=>{
                    return(
                        <div className="col-sm-3">
                            <CardProduct name={val.nama} penjual={val.penjual} harga={val.harga}/>
                        </div>
                    )
                })}
                </div>
            </div>
        </div>
    )
}

export default Home