// Import Olwaste Components
import { SearchBar, CardUser } from "../components/components"

//Import React components 
import { useEffect, useState } from "react"

const CariPengrajin = () => {
    //preparing library needed
    const [dataShow, setDataShow] = useState([])
    const [query, setQuery] = useState()
    const [loading, setLoading] = useState(false)
    //fetching to get all data of pengrajin
    useEffect(()=>{
        fetch("https://olwastebe.affaalfiandy.my.id/getallpengrajin")
        .then(res=>res.json())
        .then(res=>{setDataShow(res)})
    },[])

    const queryHandler = (e) => {
        e.preventDefault()
        setQuery(e.target.value)
        //wait for 1 second to fetch
        setTimeout(()=>{
            setLoading(true)
            fetch("https://olwastebe.affaalfiandy.my.id/getquerypengrajin",{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({"search":e.target.value})
                })        
                .then(res=>res.json())
                .then(res=>{setDataShow(res);setLoading(false)})
        },1000)
    }
    return(
        <>
            <div className="container justify-content-between w-100 h-75 d-sm-none d-lg-inline-flex">
                <h3 className="vw-75">Cari Pengrajin</h3>
                <div className="vw-25">
                <SearchBar type="text" placeholder="Cari Pengrajin / Kota" value={query} onChange={queryHandler}/>
                </div>
            </div>
            <br/>
            <br/>
            {loading && <div class="spinner-border" role="status"></div>}
            <div className="container">
                <div className="row">
                {!loading && dataShow.map((val, id)=>{
                    return(
                        <div className="col-sm-3">
                            <CardUser name={val.nama} kota={val.kota}/>
                        </div>
                    )
                })}
                </div>
            </div>
        </>
    )
}

export default CariPengrajin