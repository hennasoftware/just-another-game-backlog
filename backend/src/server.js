import express from 'express';
import { db } from './services/firebase.js';

const app = express();
const port = 3000;

async function checkFirebaseStatus() {
  try {
    const snapshot = await db.collection('env-config').get();
    const docs = snapshot.docs.map(doc => doc.data());
    console.log(docs[0].return);
    return docs;
  } catch (error) {
    console.error('Error connecting to Firebase Firestore: ', error);
    return false;
  }
}

let firebaseStatus = await checkFirebaseStatus();

app.get('/', (req, res) => {
  res.send(`
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Backend Status</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 50px;
            background-color: #f4f4f4;
          }
          h1 {
            color: #2c3e50;
          }
          p {
            font-size: 1.2em;
          }
          .firestore-status {
            color: #888;
            font-size: 1em;
          }
        </style>
      </head>
      <body>
        <h1>🚀 Backend is running!</h1>
        <p>The server is up and running smoothly.</p>
        <br />
        <p class="firestore-status">
        Firebase Firestore integration status: </p>
        ${firebaseStatus ? firebaseStatus[0].return : 'Failed to connect with Firebase Firestore'}
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});