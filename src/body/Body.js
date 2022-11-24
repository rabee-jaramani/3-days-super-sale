import React, { useEffect } from 'react';
import { data_list } from '../data';
import Card from './Card';

export default function Body() {
  useEffect(() => {}, []);
  return (
    <div className="container">
      <div className="data-grid-container center-it">
        {data_list.map((item) => (
          <Card
            key={item.id}
            brand={item.brand}
            logo={item.logo}
            offer1={item.offer1}
            offer2={item.offer2}
            offer3={item.offer3}
            stores={item.stores}
          />
        ))}
      </div>
    </div>
  );
}
