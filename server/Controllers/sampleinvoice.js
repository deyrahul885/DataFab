// const newpdf = require('./public/78627-001.pdf')
const { AzureKeyCredential, DocumentAnalysisClient } = require("@azure/ai-form-recognizer");

// using the PrebuiltModels object, rather than the raw model ID, adds strong typing to the model's output
//const { PrebuiltModels } = require("@azure/ai-form-recognizer");

// set `<your-key>` and `<your-endpoint>` variables with the values from the Azure portal.
    const key = "ceb2fd3987774adc96275099f029917c";
    const endpoint = "https://testformtest.cognitiveservices.azure.com/";

// sample document
// const invoiceUrl = "https://raw.githubusercontent.com/Azure-Samples/cognitive-services-REST-api-samples/master/curl/form-recognizer/sample-invoice.pdf";

const  invoiceUrl = "https://cloudstorage7.blob.core.windows.net/testcontainer/sample-invoice.pdf"

exports.findOne = function(req,res){
    async function main() {

        const client = new DocumentAnalysisClient(endpoint, new AzureKeyCredential(key));
    
        const poller = await client.beginAnalyzeDocument("prebuilt-invoice", invoiceUrl);
    
        const {
            documents: [result]
        } = await poller.pollUntilDone();
    
        if (result) {
            const invoice = result.fields;
            res.send(invoice)
            console.log("Vendor Name:", invoice.VendorName?.content );
            console.log("Customer Name:", invoice.CustomerName?.content);
            console.log("Invoice Date:", invoice.InvoiceDate?.content);
            console.log("Due Date:", invoice.DueDate?.content);
    
            console.log("Items:");
            for (const {
                    properties: item
                } of invoice.Items?.values ?? []) {
                console.log("-", item.ProductCode?.content ?? "<no product code>");
                console.log("  Description:", item.Description?.content);
                console.log("  Quantity:", item.Quantity?.content);
                console.log("  Date:", item.Date?.content);
                console.log("  Unit:", item.Unit?.content);
                console.log("  Unit Price:", item.UnitPrice?.content);
                console.log("  Tax:", item.Tax?.content);
                console.log("  Amount:", item.Amount?.content);
            }
    
            console.log("Subtotal:", invoice.SubTotal?.content);
            console.log("Previous Unpaid Balance:", invoice.PreviousUnpaidBalance?.content);
            console.log("Tax:", invoice.TotalTax?.content);
            console.log("Amount Due:", invoice.AmountDue?.content);
        } else {
            throw new Error("Expected at least one receipt in the result.");
        }
    }
    
    main().catch((error) => {
        console.error("An error occurred:", error);
        process.exit(1);
    });
}