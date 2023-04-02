import axios from './config'

export default {
    
    getData: () => axios.get(`/testapi/user`),

    addEmployee :({name,address,gender,born_date})=>axios.post('/testapi/user',{
        name:name,
        address:address,
        gender:gender,
        born_date:born_date
    }),

    editEmployee :({name,address,gender,born_date,id})=>axios.put(`/testapi/user/${id}`,{
        name:name,
        address:address,
        gender:gender,
        born_date:born_date
    }),

    deleteEmployee :({id})=>axios.delete(`/testapi/user/${id}`),
    getEmployeeId :({id})=>axios.get(`/testapi/user/${id}`),
};

