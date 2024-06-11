import {
  Configuration,
  ProductSearchOptions,
  productSearch,
} from '@bloomreach/discovery-web-sdk';

export function getProducts(fl: string) {
  const configuration: Configuration = {
    account_id: 6413,
    domain_key: 'pacifichome',
  };

  const options: ProductSearchOptions = {
    _br_uid_2: `uid=12345:v=11.8:ts=${Date.now()}:hc=3`,
    url: 'https://example.com',
    ref_url: 'https://example.com',
    request_id: 12345,
    q: '*',
    start: 0,
    rows: 5,
    fl,
  };

  return productSearch(configuration, options);
}
