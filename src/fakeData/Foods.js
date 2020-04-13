// Breakfast items get ID Serial from 1000 and cat = brakfast
// Lunch items get ID Serial from 2000 and cat = lunch
// Dinner items get ID Serial from 3000 and cat = dinner

const Foods = [
    {
        "id": 1001,
        "name": "Sunnyside Eggs & Veggies",
        "cat": "breakfast",
        "price": 4.99,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678940/red-onion-img/breakfast1_lyyz2l.png",
    },


    {
        "id": 1002,
        "name": "Fresh Hot Sandwitch",
        "cat": "breakfast",
        "price": 5.99,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678940/red-onion-img/breakfast3_fxr3xh.png",
    },


    {
        "id": 1003,
        "name": "Morning Fresh Pack",
        "cat": "breakfast",
        "price": 4.59,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678941/red-onion-img/breakfast2_oialrn.png",
    },


    {
        "id": 1004,
        "name": "Tomato Salad Eggs",
        "cat": "breakfast",
        "price": 7.99,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678941/red-onion-img/breakfast4_klsmmn.png",
    },


    {
        "id": 1005,
        "name": "Toasted Morning Delight",
        "cat": "breakfast",
        "price": 3.99,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678941/red-onion-img/breakfast5_qhwwn2.png",
    },


    {
        "id": 1006,
        "name": "Veggies & Meats",
        "cat": "breakfast",
        "price": 6.59,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678941/red-onion-img/breakfast6_b7z97k.png",
    },









    {
        "id": 2001,
        "name": "Beef Steak Veggies",
        "cat": "lunch",
        "price": 9.99,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678988/red-onion-img/lunch1_jhod3c.png",
    },


    {
        "id": 2002,
        "name": "Healthy Chicken Rice",
        "cat": "lunch",
        "price": 8.99,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678989/red-onion-img/lunch4_h3w6aq.png",
    },


    {
        "id": 2003,
        "name": "Lunch Delight",
        "cat": "lunch",
        "price": 12.99,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678989/red-onion-img/lunch2_pcgu1r.png",
    },


    {
        "id": 2004,
        "name": "3 in 1",
        "cat": "lunch",
        "price": 15.99,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678989/red-onion-img/lunch5_e3k3sk.png",
    },


    {
        "id": 2005,
        "name": "Diet Pack 1",
        "cat": "lunch",
        "price": 17.99,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678989/red-onion-img/lunch6_wbpnwo.png",
    },


    {
        "id": 2006,
        "name": "Diet Pack 2",
        "cat": "lunch",
        "price": 14.99,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678989/red-onion-img/lunch3_hvxlx3.png",
    },










    


    {
        "id": 3001,
        "name": "Spicy Dinner",
        "cat": "dinner",
        "price": 22.99,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678967/red-onion-img/dinner3_hr2il5.png",
    },


    {
        "id": 3002,
        "name": "Salad Saga",
        "cat": "dinner",
        "price": 18.99,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678968/red-onion-img/dinner6_caa47a.png",
    },


    {
        "id": 3003,
        "name": "Salmon Salad",
        "cat": "dinner",
        "price": 17.99,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678968/red-onion-img/dinner2_imstm4.png",
    },


    {
        "id": 3004,
        "name": "Beef Bonanza",
        "cat": "dinner",
        "price": 15.99,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678968/red-onion-img/dinner1_rq3eb4.png",
    },


    {
        "id": 3005,
        "name": "Pasta Pleasant",
        "cat": "dinner",
        "price": 14.55,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678968/red-onion-img/dinner4_q6ky5g.png",
    },


    {
        "id": 3006,
        "name": "Fried Bread Salad",
        "cat": "dinner",
        "price": 18.45,
        "description": "South Street Chicken Wings – Smokey peach chipotle barbecue sauce, smothered crispy chicken wings. A summertime favorite for years at the South Street block party!",
        "imgURL": "https://res.cloudinary.com/notnns/image/upload/v1586678969/red-onion-img/dinner5_nhrl9j.png",
    },



];


export default Foods;