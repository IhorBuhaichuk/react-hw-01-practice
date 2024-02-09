// src/components/App.jsx

import { Product } from "./Product";
import {BookList, favouriteBooks} from "./FavouriteBooks";
import {Alert} from "./Alert";

export default function App() {
  return (
    <div>
      <h1>Best selling</h1>

      <Product
        name="Tacos With Lime"
        imgUrl="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/6/14/0/MRS-DASH_Fiesta-Lime-Tacos_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371593390902.jpeg"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://d9hyo6bif16lx.cloudfront.net/live/img/production/detail/menu/lunch-dinner_999-combohs_all-american-burger-fries.jpg"
        price={14.29}
      />
      
        <h1>Books of the week</h1>
        <BookList books={favouriteBooks} />

        <Alert variant="info">
        Would you like to browse our recommended products?
      </Alert>
      <Alert variant="error">
        There was an error during your last transaction
      </Alert>
      <Alert variant="success">
        Payment received, thank you for your purchase
      </Alert>
      <Alert variant="warning">
        Please update your profile contact information
      </Alert>
    </div>
  );
}
