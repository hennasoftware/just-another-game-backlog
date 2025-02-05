import { useEffect, useState } from 'react';
import { firestore, getDocs, collection } from './config/firebase.js';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'env-config'));
        const docs = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setDocuments(docs);
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Frontend is running!</h1>
      <p className="firestore-status">
        Firebase Firestore integration status: </p>

      {documents.length > 0 ? (
        documents.map(doc => (
          <p>
            {doc.return}
          </p>
        ))
      ) : (
        <p>
          Failed to connect with Firebase Firestore </p>
      )}
    </>
  );
}

export default App;
