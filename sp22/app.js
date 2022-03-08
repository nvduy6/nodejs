const http = require('http');
const { text } = require('stream/consumers');
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/product') {
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<body>");
        res.write("<h1>Product</h1>")
        res.write("</body>");
        res.write("</html>");
        res.end();
    } else if (url === '/add/user') {
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<body>");
        res.write("<h1>Product</h1>");
        res.write("<form>");
        res.write("<lab>Nhap ten</lab>");
        res.write("<input type='text'> ");
        res.write("<br></br>");
        res.write("<lab>Nhap tuoi</lab>");
        res.write("<input type='text'> ");
        res.write("<br></br>");
        res.write("<button>Add</button>");
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        res.end();
    } else {
        res.setHeader('Content-Type', 'text/html');
        res.write("<html>");
        res.write("<body>");
        res.write("<h1>Home</h1>")
        res.write("</body>");
        res.write("</html>");
        res.end();
    }
});
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Sever running port 3001`)
})