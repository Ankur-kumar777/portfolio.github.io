
const express = require('express');
const path = require('path');

const app = express(); 
const publicPath = path.join(__dirname);

app.get('/', (req, resp) => {
  resp.sendFile(`${publicPath}/index.html`); 
});

app.get('/about', (req, res) => {
    res.sendFile(`${publicPath}/about.html`); 
  });

app.get('/projects', (req, res) => {
    res.sendFile(`${publicPath}/projects.html`); 
  }); 
app.get('/contact', (req, res) => {
    res.sendFile(`${publicPath}/contact.html`); 
  });   

app.get('*', (req, res) => {
    res.sendFile(`${publicPath}/help.html`); 
  });
 
app.listen(5000);
