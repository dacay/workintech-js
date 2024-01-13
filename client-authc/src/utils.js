import axios from 'axios';

export const axiosWithAuth = () => {

    const token = localStorage.getItem('token');
  
    return axios.create({
      headers: {
        // API token, Bearer token vb gonderme sekilleri var, biz simdilik basit bir sekilde dumduz gonderiyoruz
        // Authorization: `Bearer ${token}`
        Authorization: token
      }
    })
  }