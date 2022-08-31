const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors')
const mongoose =require('mongoose')

const app = express();

const invoiceRouter = require('./Routes/sampleinvoice')


// // const newpdf = require('./public/78627-001.pdf')
// const { AzureKeyCredential, DocumentAnalysisClient } = require("@azure/ai-form-recognizer");

// // using the PrebuiltModels object, rather than the raw model ID, adds strong typing to the model's output
// //const { PrebuiltModels } = require("@azure/ai-form-recognizer");

// // set `<your-key>` and `<your-endpoint>` variables with the values from the Azure portal.
//     const key = "ceb2fd3987774adc96275099f029917c";
//     const endpoint = "https://testformtest.cognitiveservices.azure.com/";

// // sample document
// const invoiceUrl = "https://raw.githubusercontent.com/Azure-Samples/cognitive-services-REST-api-samples/master/curl/form-recognizer/sample-invoice.pdf";

// const invoiceUrl = newpdf
const db = 'mongodb://localhost:27017/Data_analytics'


// middle ware
app.use(express.static('public')); //to access the files in public folder
app.use(cors()); // it enables all cors requests
app.use(fileUpload());


app.get('/',(req,res)=>{
    return res.status(200).send('Welcome to the server side')
})

app.use('/invoice',invoiceRouter)

// app.get('/sampleinvoice',(req,res)=>{
//     async function main() {

//         const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
    
//         const poller = await client.beginAnalyzeDocument("prebuilt-invoice", invoiceUrl);
    
//         const {
//             documents: [result]
//         } = await poller.pollUntilDone();
    
//         if (result) {
//             const invoice = result.fields;
//             const arrangedData = JSON.stringify(invoice)
//             res.send(arrangedData)
//             console.log("Vendor Name:", invoice.VendorName?.content );
//             console.log("Customer Name:", invoice.CustomerName?.content);
//             console.log("Invoice Date:", invoice.InvoiceDate?.content);
//             console.log("Due Date:", invoice.DueDate?.content);
    
//             console.log("Items:");
//             for (const {
//                     properties: item
//                 } of invoice.Items?.values ?? []) {
//                 console.log("-", item.ProductCode?.content ?? "<no product code>");
//                 console.log("  Description:", item.Description?.content);
//                 console.log("  Quantity:", item.Quantity?.content);
//                 console.log("  Date:", item.Date?.content);
//                 console.log("  Unit:", item.Unit?.content);
//                 console.log("  Unit Price:", item.UnitPrice?.content);
//                 console.log("  Tax:", item.Tax?.content);
//                 console.log("  Amount:", item.Amount?.content);
//             }
    
//             console.log("Subtotal:", invoice.SubTotal?.content);
//             console.log("Previous Unpaid Balance:", invoice.PreviousUnpaidBalance?.content);
//             console.log("Tax:", invoice.TotalTax?.content);
//             console.log("Amount Due:", invoice.AmountDue?.content);
//         } else {
//             throw new Error("Expected at least one receipt in the result.");
//         }
//     }
    
//     main().catch((error) => {
//         console.error("An error occurred:", error);
//         process.exit(1);
//     });
    
// })


// file upload api
app.post('/upload', (req, res) => {

    if (!req.files) {
        return res.status(500).send({ msg: "file is not found" })
    }
        // accessing the file
    const myFile = req.files.file;

    //  mv() method places the file inside public directory
    myFile.mv(`${__dirname}/public/${myFile.name}`, function (err) {
        if (err) {
            console.log(err)
            return res.status(500).send({ msg: "Error occured" });
        }
        // returing the response with file path and name
        return res.send({name: myFile.name, path: `/${myFile.name}`});
    });
})



app.listen(8000, () => {
    console.log('server is running at PORT 8000');
})

mongoose.connect(db,{ useNewUrlParser: true,useUnifiedTopology:true })
.then(()=>{
    console.log('Database is connected')
}).catch((e)=>{
    console.log('DateBase is not connected')
})