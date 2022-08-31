import React, { useRef, useState } from 'react';
import axios from 'axios';
import {Box,Grid,Typography} from '@mui/material'
import DataTable from '../Components/DataTable';
import './invoice.css'


const InvoiceUser = [
    {
        name:'Max',
        skills:'Html,css,javaScript',
        contact:7846235632
    },
    {
        name:'Sam',
        skills:'React,Javascript,Node Js',
        contact:7845525205
    }
]

const Title = 'Required Data from the Invoice'

const InvoiceProcessingPage=()=> {

    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the recived file from backend
    const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element

    const handleChange = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accessing file
        console.log(file);
        setFile(file); // storing file
    }

    const uploadFile = () => {
        const formData = new FormData();
        formData.append('file', file); // appending file
        axios.post('http://localhost:8000/upload', formData, {
            onUploadProgress: (ProgressEvent) => {
                let progress = Math.round(
                ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
                setProgess(progress);
            }
        }).then(res => {
            console.log("response",res);
            getFile({ name: res.data.name,
                      path: 'http://localhost:8000' + res.data.path
                   })
        }).catch(err => console.log(err))
    }

    return (
        <>
        <Box sx={{ flexGrow: 1,marginTop:'90px',border:'1px solid #000000' }}>
        <Grid container>
        <Grid item xs={6} md={4} sx={{backgroundColor:'#191970'}}>
            <Box>
            <Typography sx={{color:'#fff',padding:'10px'}}>
            Upload Your Invoice
            </Typography>
            <div className="file-upload">
                    <input type="file" ref={el} onChange={handleChange} style={{color:'#fff'}}/>
                    <div className="progessBar" style={{ width: progress }}>
                    {progress}
                    </div>
                    <button onClick={uploadFile} className="upbutton">
                    Upload
                    </button>
            <hr />
            {data.path && <img src={data.path} alt={data.name} width='100%' />}
            </div>
            </Box>
        </Grid>
            <Grid item xs={6} md={8}>
            <Box>
                <DataTable User={InvoiceUser} Title={Title}/>
                <h2>{data.name}</h2>
            </Box> 
            </Grid>
        </Grid>   
        </Box>
        </>
    );
}

export default InvoiceProcessingPage;
