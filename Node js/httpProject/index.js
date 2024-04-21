const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const formData = new URLSearchParams(body);
            const name = formData.get('name');
            const email = formData.get('email');
            const age = formData.get('age');
            
            // Append data to student_info.txt
            const data = `${name}, ${email}, ${age}\n`;
            fs.appendFile('student_info.txt', data, (err) => {
                if (err) throw err;
                console.log('Data saved to student_info.txt');
            });
            
            // Redirect back to the form
            res.writeHead(302, { 'Location': '/' });
            res.end();
        });
    } else {
        // Serve HTML form
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading index.html');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
