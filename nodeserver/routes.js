const fs = require('fs');

let here = (req, res) => {
    console.log(req.url);

    if (req.url === '/message') {
        /// HERE AFTER SUBMITTING THE FORM , DATA WILL COME IN CHUNKS FROM THE FORM FILE 
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        })
        let data = "";

        req.on('end', () => {
            data = Buffer.concat(body).toString(); //// CONCAT THE CHUNKS DATA
            console.log(data);
            fs.writeFileSync('ss.txt', data)

        })


        return res.end();
    }

    if (req.url === '/form') {

        res.write('<html><body><h2>HTML Forms</h2><form action="/message" method="POST" ><input type="text" name="message" ><br><br><input  type="submit" value="Submit"></form><p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p></body></html>')
        return res.end()
    }

    res.write('<html><head><title>Page Title</title></head ><body><h1>This is a Heading</h1><p>This is a paragraph.</p></body></html >')  ///// this method is used for writing data or html in response body 

    res.end();  //// is will send the response from the server 
}

// module.exports = here; 

//  for multiple exports;

module.exports = {
    h: here,
    name:'sanjay'
}