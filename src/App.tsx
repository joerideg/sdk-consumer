import {
  Configuration,
  ProductSearchOptions,
} from '@bloomreach/discovery-web-sdk';
import { SearchBox, SearchContext, SearchContextProvider } from '@bloomreach/limitless-ui-react';
import './App.css';

function App() {
  const configuration: Configuration = {
    account_id: 6413,
    domain_key: 'pacifichome',
  };

  const options: Omit<ProductSearchOptions, 'q'> = {
    _br_uid_2: `uid=12345:v=11.8:ts=${Date.now()}:hc=3`,
    url: 'https://example.com',
    ref_url: 'https://example.com',
    request_id: 12345,
    start: 0,
    rows: 5,
    fl: 'pid,thumb_image,title,brand,price,description',
  };

  return (
    <SearchContextProvider>
      <div>
        <SearchBox
          autoFocus
          placeholder="Type your text here"
          configuration={configuration}
          searchOptions={options}
          debounceDelay={300}
          searchType='product'
          className="input w-full max-w-xs"
        />
      </div>
      <SearchContext.Consumer>
        {({ searchResponse }) => (
          <div className="card-grid">
            {searchResponse?.response?.docs?.map((result) => (
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
        )}
      </SearchContext.Consumer>
    </SearchContextProvider>
  );
}

export default App;
