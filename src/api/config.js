import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cms-admin.ihsansolusi.co.id',
  // timeout: 50000,
  headers:{
    'Authorization': `Bearer ${localStorage.getItem('employee')}`
}
})

export default instance;
