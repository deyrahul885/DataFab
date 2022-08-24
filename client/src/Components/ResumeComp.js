import React,{useState} from 'react'
import { Container,Box,Grid, Typography } from '@mui/material';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
//import default plugin
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles for default plugin
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import DataTable from '../Components/DataTable';

const ResumeComp = () => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    const[pdfFile,setPdfFile] = useState(null); //onChange state
    const[pdfError,setPdfError] = useState("")  //on error state


    const allowedFiles = ['application/pdf']
    const handleFile=(e)=>{
        let selectedFile = e.target.files[0]
        console.log(selectedFile)
        if(selectedFile){
            if(selectedFile&&allowedFiles.includes(selectedFile.type)){
                let reader = new FileReader();
                reader.readAsDataURL(selectedFile);
                reader.onloadend=(e)=>{
                    setPdfError('');
                    setPdfFile(e.target.result);
                    console.log(e.target.result)
                }
            }
            else{
                setPdfError('Not a valid pdf: Please selectonly Pdf')
            }
        }
        else{
            console.log('Please select a pdf')
        }
    }


  return (
    <>
    <Box>
        <Typography sx={{color:'#fff',padding:'10px'}}>
            Upload Your Resume
        </Typography>
        <div className='file_card'>
            <div className='file_inputs' style={{padding:'20px'}}>
            <input type='file' onChange={handleFile} style={{color:'#fff'}}/> 

            {pdfError && <span className='text-design'>{pdfError}</span>}
            </div>
            <div className='viewer' style={{marginTop:'20px',paddingRight:'2px'}}>
            {pdfFile&&(
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                        <div
                        style={{
                            border: '1px solid rgba(0, 0, 0, 0.3)',
                            height: '600px',
                        }}
                        >
                        <Viewer
                        fileUrl={pdfFile}
                        plugins={[defaultLayoutPluginInstance]}
                        >
                        </Viewer>
                        </div>
                </Worker>
            )}

            {!pdfFile&&<div className='pdf-_box' style={{border:'1px solid rgba(0, 0, 0, 0.3)',height:'600px',marginBottom:'20px'}}>No file is selected yet</div>}
        </div>
        </div>
    
    </Box>
    </>
  )
}

export default ResumeComp