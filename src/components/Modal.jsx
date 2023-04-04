import React, { useEffect, useState } from 'react'
import api from '../api'
import { format } from 'date-fns'
import { BiArrowBack } from 'react-icons/bi';


const Modal = ({setOpenModal,id,setIdEdit, onView, setOnView,setFetchStatus}) => {
    const [inputDataEmployee, setInputDataEmployee]=useState({
        name:'',
        address:'',
        gender:'',
        born_date:''
    });
    

    const getDataId= async ()=>{
        try {
            let res = await api.getEmployeeId({id})
            setInputDataEmployee({
                name:res.data.data.name,
                address:res.data.data.address,
                gender:res.data.data.gender,
                born_date:res.data.data.born_date,
            })
            console.log(res.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        if(id){
            getDataId()
        }
    },[])

    const onChange = (e) => {
        const { value, name } = e.target
        setInputDataEmployee({ ...inputDataEmployee, [name]: value })
    }

    const onCancel = ()=>{
        setIdEdit(null)
        setOpenModal(false)
        setInputDataEmployee({
            name:'',
            address:'',
            gender:'',
            born_date:''
        })
        setOnView(false)
    }

    const onSubmit= async()=>{
        const {name ,address,gender,born_date}=inputDataEmployee;
        try {
            if(!id){
                let res = await api.addEmployee({name,address,gender,born_date});
                if(res){
                    setInputDataEmployee({
                        name:'',
                        address:'',
                        gender:'',
                        born_date:''
                    })
                    setOpenModal(false)
                    setFetchStatus(true)
                }
            }else{
                let res = await api.editEmployee({name,address,gender,born_date,id})
                if(res){
                    setInputDataEmployee({
                        name:'',
                        address:'',
                        gender:'',
                        born_date:''
                    })
                    setOpenModal(false)
                    setFetchStatus(true)
                    setIdEdit(null)
                }
                
            }
        } catch (error) {
            console.log(error)
        }
    }

    const printAddModal = ()=>{
        return(
            <div>
                <form className='mt-3'>
                <label className='block mb-3'>
                    <span className='block text-sm'>Nama Pekerja</span>
                    <input 
                    className='border border-slate-200 w-full mt-2' 
                    name='name' 
                    onChange={onChange}
                    value={inputDataEmployee.name}
                    disabled={onView?true:false}
                    required
                    />
                </label>
                <label className='block mb-3'>
                    <span className='block text-sm'>Alamat</span>
                    <textarea 
                    className='border border-slate-200 w-full mt-2 h-28'
                    name='address' 
                    onChange={onChange}
                    value={inputDataEmployee.address}
                    disabled={onView?true:false}
                    />
                </label>
                <div className='flex gap-2 my-2'>
                    <p className='text-sm'>Select Gender</p>
                        <input 
                        type='radio' 
                        value='l'
                        name='gender' 
                        onChange={onChange}
                        checked={inputDataEmployee.gender === 'l'}
                        disabled={onView?true:false}
                        />
                        <label>Male</label>
                        <input 
                        type='radio' 
                        value='p'
                        name='gender' 
                        onChange={onChange}
                        checked={inputDataEmployee.gender === 'p'}
                        disabled={onView?true:false}
                        />
                        <label>Female</label>
                </div>
                <label className='block mb-3'>
                    <span className='block text-sm'>Tanggal Lahir</span>
                    <input 
                    className='border border-slate-200 w-25 mt-2' 
                    type='date'
                    name='born_date' 
                    onChange={onChange}
                    value={inputDataEmployee.born_date}
                    disabled={onView?true:false}
                    />
                </label>
            </form>
                <div className='flex justify-end mt-10 gap-3'>
                    <button className='bg-red-600 text-white px-4 py-1' onClick={onCancel}>Cancel</button>
                    <button className={`bg-teal-600 text-white px-4 py-1 ${onView && 'hidden'}`} onClick={onSubmit}>Simpan</button>
                </div>
            </div>
        )
    }

    const printDataDetail = ()=>{
        const {name ,address,gender,born_date}=inputDataEmployee;
        return(
            <div className='mt-3 cursor-pointer' onClick={onCancel} >
                <div className='flex gap-2'>
                    <BiArrowBack size={25} className='fill-red-500'/>
                    <p className='text-red-500'>Kembali</p>
                </div>
                <div className='mx-auto px-20 mt-6 flex gap-10 '>
                    <img 
                    src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    className='h-32 shadow-lg my-3 '
                    alt='avatar'
                    />
                    <div>
                        <h2 className='text-2xl my-3'>DATA KARYAWAN</h2>
                        <div className='flex gap-3'>
                            <div className='w-32'>
                                <p>Nama</p>
                            </div>
                            <div className=''>
                                <p>: {name}</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='w-32'>
                                <p>Alamat</p>
                            </div>
                            <div>
                                <p>: {address}</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='w-32'>
                                <p>Jenis Kelamin</p>
                            </div>
                            <div>
                                <p>: {gender === 'l'?'Laki-Laki':'Perempuan'}</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='w-32'>
                                <p>Tanggal Lahir</p>
                            </div>
                            <div>
                                <p>: {born_date && format(new Date(born_date), 'dd-MM-yyy') }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className='py-4'>
        <p className='bg-sky-400 text-white px-2 py-1'>{id &&!onView?'Edit Pekerja':id && onView ?'Detail Pekerja':'Tambah Pekerja'}</p>
        {
            id && onView ? printDataDetail() : printAddModal()
        }
        
    </div>
  )
}

export default Modal