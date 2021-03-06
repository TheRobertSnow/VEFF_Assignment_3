//Sample data for Assignment 3

//The following is an example of an array of two events.
var events = [
    { id: 0, name: "The Whistlers", description: "Romania, 2019, 97 minutes", location: "Bio Paradís, Salur 1", capacity: 40, startDate: new Date(Date.UTC(2020, 02, 03, 22, 0)), endDate: new Date(Date.UTC(2020, 02, 03, 23, 45)), bookings: [0,1,2] },
    { id: 1, name: "HarpFusion: Bach to the Future", description: "Harp ensemble", location: "Harpa, Hörpuhorn", capacity: 100, startDate: new Date(Date.UTC(2020, 02, 12, 15, 0)), endDate: new Date(Date.UTC(2020, 02, 12, 16, 0)), bookings: [] }
];

//The following is an example of an array of three bookings.
var bookings = [
    { id: 0, firstName: "John", lastName: "Doe", tel: "+3541234567", email: "", spots: 3},
    { id: 1, firstName: "Jane", lastName: "Doe", tel: "", email: "jane@doe.doe", spots: 1},
    { id: 2, firstName: "Meðaljón", lastName: "Jónsson", tel: "+3541111111", email: "mj@test.is", spots: 5}
];


const express = require("express");
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});
app.get('/events', (req, res) => {
  res.status(200).send('Hello World!');
});
app.get('/events/:id', (req, res) => {
  res.status(200).send('Hello World!');
});
app.use('*', (req, res) => {
  res.status(405).send('Operation not supported.');
});
app.listen(port, () => {
  console.log('Express app listening on port ' + port);
});

// var http = require("http");
//
// // request.method # Returns the request HTTP method used.
//
// function onRequest(request, response) {
//     switch(request.method) {
//         case "POST":
//             // A POST request is used to send data to the server, for example, customer information, file upload, etc. using HTML forms.
//             response.writeHead(200, {"Content-Type": "text/plain"});
//             response.write("POST gay");
//             break;
//         case "GET":
//             // The GET method is used to retrieve information from the given server using a given URI.
//             // Requests using GET should only retrieve data and should have no other effect on the data.
//             response.writeHead(200, {"Content-Type": "text/plain"});
//             response.write("GET gay");
//             break;
//         case "DELETE":
//             // Removes all current representations of the target resource given by a URI.
//             response.writeHead(200, {"Content-Type": "text/plain"});
//             response.write("DELETE gay");
//             break;
//         default:
//             // code block
//             response.writeHead(200, {"Content-Type": "text/plain"});
//             response.write("I'm gay");
// }
//     // response.writeHead(200, {"Content-Type": "text/plain"});
//     // response.write("Hello World");
//     response.end();
// }
//
// http.createServer(onRequest).listen(8000);
