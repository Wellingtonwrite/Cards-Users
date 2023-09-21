import React, { useState } from 'react'
import axios from 'axios'

const useFetch = (baseUrl) => {
    const [infoApi, setInfoApi] = useState()
    


    //READ
    const getApi = (path) => {
        const url = `${baseUrl}${path}/`
        axios.get(url)
            .then(res => setInfoApi(res.data))
            .catch(err => console.log(err))
    }

    //create
    const postApi = (path, data) => {
        const { gender } = data
        const urlPhoto = `https://randomuser.me/api/?gender=${gender}`; 

        const url = `${baseUrl}${path}/`;

        axios.get(urlPhoto)
            .then((res) => {
                const image_url = res.data.results[0].picture.large;               
                data.image_url = image_url;
                axios.post(url, data)
                    .then((res) => setInfoApi([...infoApi, res.data]))
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    };

    //delete
    const deleteApi = (path, id) => {
        const url = `${baseUrl}${path}/${id}/`
        axios.delete(url)
            .then(res => {
                console.log(res.data)
                setInfoApi(infoApi.filter(e => e.id !== id))
            })
            .catch(err => console.log(err))
    }

    //update
    const updateApi = (path, id, data) => {
        const { gender } = data
        const urlPhoto = `https://randomuser.me/api/?gender=${gender}`; 

        const url = `${baseUrl}${path}/${id}/`
            axios.get(urlPhoto)
            .then((res) => {
                const image_url = res.data.results[0].picture.large;               
                data.image_url = image_url;
                axios.put(url, data)
                    .then((res) => setInfoApi(infoApi.map(e => e.id === id ? res.data : e)))
                    .catch((err) => console.log(err));
            })
            .catch((err) => console.log(err));
    }

    return [infoApi, getApi, postApi, deleteApi, updateApi]
}
export default useFetch
