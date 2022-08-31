import React, { useRef, useState } from 'react';
import axios from 'axios';
import {Box,Grid,Typography} from '@mui/material'
import DataTable from '../Components/DataTable';
import uploadFileToBlob, { isStorageConfigured } from '../Components/uploadFileToBlob';
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

const storageConfigured = isStorageConfigured();

const InvoiceUpload=()=> {

    // all blobs in container
  const [blobList, setBlobList] = useState([]);

  // current file to upload into container
  const [fileSelected, setFileSelected] = useState(null);

  // UI/form management
  const [uploading, setUploading] = useState(false);
  const [inputKey, setInputKey] = useState(Math.random().toString(36));


  const onFileChange = (event) => {
    // capture file into state
    setFileSelected(event.target.files[0]);
  };
    // const handleChange = (e) => {
    //     setProgess(0)
    //     const file = e.target.files[0]; // accessing file
    //     console.log(file);
    //     setFile(file); // storing file
    // }

    const onFileUpload = async () => {
        // prepare UI
        setUploading(true);
    
        // *** UPLOAD TO AZURE STORAGE ***
        const blobsInContainer = await uploadFileToBlob(fileSelected);
    
        // prepare UI for results
        console.log(blobsInContainer)
        setBlobList(blobsInContainer);
    
        // reset state/form
        setFileSelected(null);
        setUploading(false);
        setInputKey(Math.random().toString(36));
      };
    
    // const uploadFile = () => {
    //     const formData = new FormData();
    //     formData.append('file', file); // appending file
    //     axios.post('http://localhost:8000/upload', formData, {
    //         onUploadProgress: (ProgressEvent) => {
    //             let progress = Math.round(
    //             ProgressEvent.loaded / ProgressEvent.total * 100) + '%';
    //             setProgess(progress);
    //         }
    //     }).then(res => {
    //         console.log("response",res);
    //         getFile({ name: res.data.name,
    //                   path: 'http://localhost:8000' + res.data.path
    //                })
    //     }).catch(err => console.log(err))
    // }


     // display form
  const DisplayForm = () => (
    <div>
      <input type="file" onChange={onFileChange} key={inputKey || ''} />
      <button type="submit" onClick={onFileUpload}>
        Upload!
      </button>
    </div>
  );

  // display file name and image
  const DisplayImagesFromContainer = () => (
    <div>
      <h2>Container items</h2>
      <ul>
        {blobList.map((item) => {
          return (
            <li key={item}>
              <div>
                {/* {Path.basename(item)} */}
                <br />
                {/* <img src={item} alt={item} height="200" /> */}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );

  return (
    <div style={{marginTop: '100px'}}>
      <h1>Upload file to Azure Blob Storage</h1>
      {storageConfigured && !uploading && DisplayForm()}
      {storageConfigured && uploading && <div>Uploading</div>}
      <hr />
      {storageConfigured && blobList.length > 0 && DisplayImagesFromContainer()}
      {!storageConfigured && <div>Storage is not configured.</div>}
    </div>
  );
};
//     return (
//         <>
//         <Box sx={{ flexGrow: 1,marginTop:'90px',border:'1px solid #000000' }}>
//         <Grid container>
//         <Grid item xs={6} md={4} sx={{backgroundColor:'#191970'}}>
//             <Box>
//             <Typography sx={{color:'#fff',padding:'10px'}}>
//             Upload Your Invoice
//             </Typography>
//             <div className="file-upload">
//                     <input type="file" ref={el} onChange={handleChange} style={{color:'#fff'}}/>
//                     <div className="progessBar" style={{ width: progress }}>
//                     {progress}
//                     </div>
//                     <button onClick={uploadFile} className="upbutton">
//                     Upload
//                     </button>
//             <hr />
//             {data.path && <img src={data.path} alt={data.name} width='100%' />}
//             </div>
//             </Box>
//         </Grid>
//             <Grid item xs={6} md={8}>
//             <Box>
//                 <DataTable User={InvoiceUser} Title={Title}/>
//                 <h2>{data.name}</h2>
//             </Box> 
//             </Grid>
//         </Grid>   
//         </Box>
//         </>
//     );
// }

export default InvoiceUpload;
