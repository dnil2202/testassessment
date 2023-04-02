import React, { useEffect, useState } from 'react'
import api from '../api'
import Modal from './Modal'
import Loading from './Loading'
import { format } from 'date-fns'


const TableEmploye = () => {

    const [dataEmployee, setDataEmployee]=useState([]);
    const [openModal,setOpenModal]=useState(false);
    const [idEdit,setIdEdit]=useState(null);
    const [onView,setOnView]=useState(false);
    const [isLoading, setIsLoading]=useState(false)
    const [popUp,setPopUp]=useState({
        show:false,
        id:0
    })
    const [fetchStatus,setFetchStatus]=useState(false)

    const getData = async () =>{
        setIsLoading(true)
        try {
            let res = await api.getData()
            if(res){
                setDataEmployee(res.data.data)
                setTimeout(() => setIsLoading(false), 1000)
            }
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    };

        useEffect(()=>{
            getData()
    },[fetchStatus]);

    const onDelete = async ()=>{
        let id =popUp.id
            try {
                let res = await api.deleteEmployee({id})
                if(res){
                    setPopUp({
                        show:false
                    })
                    setFetchStatus(true)
                }
            } catch (error) {
                console.log(error)
            }
    };

    const onEdit = (id)=>{
        setOpenModal(true)
        setIdEdit(id)
    };



    const viewData = (id)=>{
        setOpenModal(true)
        setOnView(true)
        setIdEdit(id)
    };

    const openPopUp = (id)=>{
        setPopUp({
            show:true,
            id
        })
    }

    const cancelPopUp=()=>{
        setPopUp({
            show:false
        })
    }

    const printDataTable = () =>{
        return dataEmployee.map((data,i)=>{
            return(
                <tr key={data.id} className={`${i%2 === 0 ?'bg-white':'bg-slate-100'} `}> 
                    <td className='w-10 text-center'>{i+1}</td>
                    <td>{data.name}</td>
                    <td>{data.address}</td>
                    <td>{data.gender === 'l'? "Pria" :"Wanita"}</td>
                    <td>{format(new Date(data.born_date), 'dd-MMM-yyyy')}</td>
                    <td>{format(new Date(data.created_at), 'dd-MMM-yyyy HH:mm')}</td>
                    <td className=' flex gap-2'>
                        <button className='bg-emerald-600 text-white px-4 py-1' onClick={()=>{viewData(data.id)}}>View</button>
                        <button className='bg-sky-600 text-white px-4 py-1' onClick={()=>{onEdit(data.id)}}>Edit</button>
                        <button className='bg-red-600 text-white px-4 py-1' onClick={()=>{openPopUp(data.id)}}>Delete</button>
                    </td>
                </tr>
        )
        })
    };

    const printPopUp = ()=>{
        return (
            <div className='bg-white shadow-xl w-3/12'>
                <div className='bg-slate-300 w-full'>
                    <p className='text-center text-2xl'>Delete confirmation</p>
                </div>
                <div className='my-4'>
                    <p className='text-center '> are you sure to delete ?</p>
                </div>
                <div className='flex justify-center gap-5 pb-4'>
                    <button className='bg-sky-600 text-white px-4 py-1' onClick={onDelete}>Yes</button>
                    <button className='bg-red-600 text-white px-4 py-1' onClick={cancelPopUp}>No</button>
                </div>
            </div>
        )
    }

return (
    <div className='pt-3 mx-auto px-20 bg-slate-100 h-screen'>
        <div className=' bg-white w-full mt-4 shadow-md px-4'>
            {
                !openModal ?
                <>
                    <button className='bg-sky-400 text-white px-2 py-1 my-4' onClick={()=>setOpenModal(true)}>Tambah Pekerja</button>
                    <div className='py-5'>
                        <table className='w-full bg-slate-100'>
                            <thead>
                            <tr className='h-12 text-center'>
                                <th>#</th>
                                <th className='text-start'>Nama</th>
                                <th className='text-start'>Alamat</th>
                                <th className='text-start'>Gender</th>
                                <th className='text-start'>TTL</th>
                                <th className='text-start'>Tanggal Input</th>
                                <th className='text-start'>Action</th>
                            </tr>
                        </thead>
                        <tbody className='w-full'>
                            {printDataTable()}
                        </tbody>
                        </table>
                    </div>
                
                </>
                :
                <Modal 
                setOpenModal={setOpenModal} 
                id={idEdit} 
                setIdEdit={setIdEdit}
                onView={onView}
                setOnView={setOnView}
                />
            }
        </div>
        {isLoading && <Loading/>}
        {
                popUp.show && 
            <div className='relative -top-10 left-96 z-30'>
                {printPopUp()}
            </div>
        }
    </div>
  )
}

export default TableEmploye