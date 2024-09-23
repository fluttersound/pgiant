const express = require('express');
const B2 = require('backblaze-b2');
const cors = require('cors'); // Add CORS support

const app = express();
const port = process.env.PORT || 3000; 

const b2 = new B2({
    applicationKeyId: process.env.000cffadfd9f4c80000000003, 
    applicationKey: process.env.K000Awnr4AiqKkvMBv6kFTeBpt+2ujM
});

app.use(cors()); // Enable CORS

// Authorize at startup 
b2.authorize()
    .then(() => {
        console.log('B2 authorized successfully');
    })
    .catch(error => {
        console.error('Error authorizing B2:', error);
    });

app.get('/get-b2-images', async (req, res) => {
    try {
        const folderName = req.query.folderName || 'default-folder'; 

        const fileList = await b2.listFileNames({
            bucketId: '5c5f7f8a5d3f1df99f240c18',
            startFileName: `${folderName}/`, 
            maxFileCount: 100 
        });

        const imageUrls = fileList.files
            .filter(file => file.fileName.endsWith('.jpg') || file.fileName.endsWith('.png')) 
            .map(file => `https://f002.backblazeb2.com/file/PropertyGiant/${file.fileName}`);

        res.json(imageUrls);
    } catch (error) {
        console.error('Error fetching B2 images:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
