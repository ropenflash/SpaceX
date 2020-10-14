import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom'
import serialize from 'serialize-javascript'
import App from './client/src/App';
import axios from 'axios'



function handleRender(req, res) {
    // Renders our Hello component into an HTML string

    const { launch_year, launch_success, land_success } = req.query
    const year = launch_year ? `&launch_year=${launch_year}` : ""
    const launch = launch_success ? `&launch_success=${launch_success}` : ""
    const land = land_success ? `&land_success=${land_success}` : ""
    const url = `https://api.spacexdata.com/v3/launches?limit=100${year}${launch}${land}`


    axios.get(url)
        .then(response => {
            const data = response.data
            const initialData = {
                flights: data,
                year: launch_year || '',
                launch: launch_success || '',
                land: land_success || ""
            }
            const html = ReactDOMServer.renderToString(
                <StaticRouter location={req.url}>
                    <App initialData={initialData} />
                </StaticRouter>
            );
            // Load contents of index.html
            fs.readFile(`${__dirname}/client/build/index.html`, 'utf8', function (err, markup) {
                if (err) throw err;

                // Inserts the rendered React HTML into our main div
                const document = markup.replace(/<div id="root"><\/div>/, `<div id="root"> ${html}</div >
    <script>window.__initial_data=${serialize(initialData)}</script>
                `);

                // Sends the response back to the client
                res.send(document);
            });
        })

}

const app = express();



// Serve built files with static files middleware
// app.use('/build', express.static(path.join(__dirname, 'client/build')));
app.use('/static', express.static(path.join(__dirname, 'client/build/static')));
// Serve requests with our handleRender function
app.get('/', handleRender);
app.get('/filter', handleRender);
app.get('*', (req, res) => {
    res.status(404).send('Page Not Found')
})

// Start server
app.listen(process.env.PORT || 8080, () => {
    console.log(`server is running on port ${process.env.PORT || 8080}`)
});