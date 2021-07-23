import React from 'react';
import Item from '../Items/items';
import  './products.styles.scss'; 

function Products() {
    
    const products = [
        {
            "id": "1",
            "desc": "Blue",
            "price": 20,
            "image":"https://firebasestorage.googleapis.com/v0/b/ventas-bdd23.appspot.com/o/blue.JPG?alt=media&token=115f5a60-f3a6-4990-8528-a77b49e444d2"
        },
        {
            "id": "2",
            "desc": "Dark Green",
            "price": 30,
            "image":"https://firebasestorage.googleapis.com/v0/b/ventas-bdd23.appspot.com/o/green-strong.JPG?alt=media&token=c0901c47-4161-4c16-8c2f-cd73f8fded5a"
          },
          {
            "id": "3",
            "desc": "Dark Green",
            "price": 40,
            "image":"https://firebasestorage.googleapis.com/v0/b/ventas-bdd23.appspot.com/o/green.JPG?alt=media&token=3431d726-d0cc-4f5c-92b3-198531bf2701"
          },
          {
              "id": "4",
              "desc": "Jute",
              "price": 50,
              "image":"https://firebasestorage.googleapis.com/v0/b/ventas-bdd23.appspot.com/o/mecate-ligth.JPG?alt=media&token=7aa30719-b610-4a35-92e1-d91670ad3af0"
            },
            {
                "id": "5",
                "desc": "Jute Dark",
                "price": 60,
                "image":"https://firebasestorage.googleapis.com/v0/b/ventas-bdd23.appspot.com/o/mecate.JPG?alt=media&token=0eb876f3-33d9-4213-b446-5656ad1cf338"
            },
            {
                "id": "6",
                "desc": "Pink",
                "price": 70,
                "image":"https://firebasestorage.googleapis.com/v0/b/ventas-bdd23.appspot.com/o/pink.JPG?alt=media&token=cd73f37c-2c5d-479a-a21e-749d1ff4e3cb"
            },
            {
                "id": "7",
                "desc": "Blue Small",
                "price": 75,
                "image":"https://firebasestorage.googleapis.com/v0/b/ventas-bdd23.appspot.com/o/skiny-blue.JPG?alt=media&token=179240f9-5b4e-470b-8ad7-fa193fab5e13"
            },
            {
                "id": "8",
                "desc": "White",
                "price": 85,
                "image":"https://firebasestorage.googleapis.com/v0/b/ventas-bdd23.appspot.com/o/white.JPG?alt=media&token=77161b68-c480-4338-8295-ff85652d405f"
            },
            {
                "id": "9",
                "desc": "Yellow",
                "price": 95,
                "image":"https://firebasestorage.googleapis.com/v0/b/ventas-bdd23.appspot.com/o/yellow.JPG?alt=media&token=0577d6de-cc23-4b56-aa10-46cc380745e0"
            },
            {
                "id": "10",
                "desc": "Hanger",
                "price": 95,
                "image":"https://firebasestorage.googleapis.com/v0/b/ventas-bdd23.appspot.com/o/lamp.JPG?alt=media&token=ba6ac33a-922f-46f4-a3b5-ebe07c472eec"
            },
            {
                "id": "11",
                "desc": "Macrame Key Chain",
                "price": 95,
                "image":"https://firebasestorage.googleapis.com/v0/b/ventas-bdd23.appspot.com/o/llaveros.JPG?alt=media&token=6f1faf10-a7f5-408e-b22f-324f7029615b"
            },
            {
                "id": "12",
                "desc": "Big Hanger",
                "price": 95,
                "image":"https://firebasestorage.googleapis.com/v0/b/ventas-bdd23.appspot.com/o/lamp-big.JPG?alt=media&token=c8e50e68-a825-4786-9929-7c1c321abd12"
            },
            
                              
   
        
      ]

      const itemsjsx = products.map((item) => <Item
      key={item.id} 
      picture={item.image}  
      title={item.desc} 
      price={item.price}/>
    );


    return (
        <div className="container">
        {
            itemsjsx
        }
        </div>
    )
}

export default Products
