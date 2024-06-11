import { SearchResponse } from '@bloomreach/discovery-web-sdk';
import { useEffect, useState } from 'react';
import './App.css';
import { getProducts } from './utils';

function App() {
  const [results, setResults] = useState<SearchResponse>();

  useEffect(() => {
    console.log('getting products');
    getProducts('pid,thumb_image,title,brand,price,description')
      .then((results) => {
        console.log(results);
        setResults(results);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="card-grid">
      {results?.response?.docs?.map((result) => (
        <div className="card card-bordered" key={result.pid}>
          <figure>
            <img src={result.thumb_image} />
          </figure>
          <div className="card-body">
            <div className="cart-title">
              {result.title} - {result.brand}
            </div>
            <p>
              <span>{result.price} - </span>
              {result.description}
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
