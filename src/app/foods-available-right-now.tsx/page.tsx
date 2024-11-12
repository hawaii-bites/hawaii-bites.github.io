import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Image from 'next/image'; // Import from 'next/image' if you're using Next.js

const FoodsAvailableRightNowPage: React.FC = () => {
  // Sample data for foods available right now
  const foodOptions = [
    {
      id: 1,
      name: 'Holoholo Bistro',
      image: '/holoholo-bistro.jpg',
      location: 'Food Truck Row',
      hours: 'Currently Closed',
      favoriteItems: [
        'Huli Huli Chicken Plate - Tender, grilled chicken marinated in a sweet and savory Hawaiian glaze.',
        'Spam Musubi Trio - A local favorite, featuring three different styles of Spam musubi.',
        'Ube Pancake Stack - Fluffy pancakes infused with ube, topped with coconut syrup.',
      ],
    },
    {
      id: 2,
      name: 'Krazy Dogs',
      image: '/krazy-dogs.jpg',
      location: 'Food Truck Row',
      hours: 'Tue, Wed 10am-2pm',
      favoriteItems: [
        'Aloha Chili Dog - Beef hot dog topped with house-made chili and pineapple relish.',
        'Kalua Pig Dog - A twist on a classic, featuring slow-cooked kalua pig and BBQ sauce.',
        'Loaded Tater Tots with Furikake - Crispy tots topped with cheese, bacon, and furikake seasoning.',
      ],
    },
    {
      id: 3,
      name: 'Middle Eats',
      image: '/middle-eats.jpg',
      location: 'Food Truck Row',
      hours: 'Tue, Thu, Fri 10am-2pm',
      favoriteItems: [
        'Falafel Wrap with Tahini Sauce - Freshly made falafel wrapped in a pita with creamy tahini.',
        'Chicken Shawarma Bowl - Marinated chicken served with rice, salad, and garlic sauce.',
        'Hummus and Pita Platter - A generous serving of creamy hummus with warm pita bread.',
      ],
    },
    {
      id: 4,
      name: 'Olay’s Thai Lao Express',
      image: '/olays-thai-lao.jpg',
      location: 'Food Truck Row',
      hours: 'Tue, Thu 10am-2pm',
      favoriteItems: [
        'Pad Thai with Shrimp - Stir-fried noodles with shrimp, peanuts, and a tangy tamarind sauce.',
        'Green Papaya Salad - Fresh papaya salad with a spicy, tangy dressing.',
        'Thai Basil Chicken Stir-Fry - Spicy chicken stir-fried with fresh basil leaves and bell peppers.',
      ],
    },
    {
      id: 5,
      name: 'Saap Saap HI',
      image: '/saap-saap-hi.jpg',
      location: 'Food Truck Row',
      hours: 'Mon, Wed, Thu, Fri 10am-2pm',
      favoriteItems: [
        'Chicken Satay Skewers - Grilled chicken skewers served with peanut sauce.',
        'Mango Sticky Rice - Sweet mango slices served with sticky coconut rice.',
        'Tom Yum Soup - A hot and sour Thai soup with shrimp, lemongrass, and lime leaves.',
      ],
    },
    {
      id: 6,
      name: 'Veggie Dogs',
      image: '/veggie-dogs.jpg',
      location: 'Food Truck Row',
      hours: 'Mon 10am-2pm',
      favoriteItems: [
        'Plant-Based Chili Dog - A vegan twist on a classic, topped with hearty plant-based chili.',
        'Avocado Veggie Wrap - Fresh veggies and avocado wrapped in a whole-wheat tortilla.',
        'Sweet Potato Fries - Crispy sweet potato fries with a side of vegan aioli.',
      ],
    },
    {
      id: 7,
      name: 'Dunkin’ Donuts',
      image: '/dunkin-donuts.jpg',
      location: 'Paradise Palms Café',
      hours: 'Mon-Fri 7am–4:30pm',
      favoriteItems: [
        'Matcha Iced Latte - A refreshing iced latte with a hint of matcha green tea flavor.',
        'Boston Cream Donut - Classic donut filled with creamy custard and topped with chocolate glaze.',
        'Bagel with Cream Cheese - Freshly baked bagel served with a generous spread of cream cheese.',
      ],
    },
    {
      id: 8,
      name: 'HoloHolo Grill',
      image: '/holoholo-grill.jpg',
      location: 'Paradise Palms Café',
      hours: 'Mon-Fri 8am–3pm',
      favoriteItems: [
        'Kalbi Short Ribs - Korean-style marinated short ribs, grilled to perfection.',
        'Loco Moco - A Hawaiian classic featuring a hamburger patty, egg, and gravy over rice.',
        'Garlic Shrimp Scampi - Sautéed shrimp in a buttery garlic sauce served with rice.',
      ],
    },
    {
      id: 9,
      name: 'L&L Hawaiian Barbecue',
      image: '/ll-hawaiian-bbq.jpg',
      location: 'Paradise Palms Café',
      hours: 'Mon-Fri 7am–4:30pm',
      favoriteItems: [
        'BBQ Chicken Plate - Juicy grilled chicken served with rice and macaroni salad.',
        'Beef Stew Plate - Tender chunks of beef simmered in a savory stew, served with rice.',
        'Spam Musubi - A local favorite, featuring grilled Spam on top of rice, wrapped in seaweed.',
      ],
    },
    {
      id: 10,
      name: 'Lasoon',
      image: '/lasoon.jpg',
      location: 'Paradise Palms Café',
      hours: 'Mon-Fri 10am–4:30pm',
      favoriteItems: [
        'Chicken Tikka Masala - Tender chicken pieces cooked in a rich, spiced tomato sauce.',
        'Vegetable Biryani - A fragrant rice dish with mixed vegetables and spices.',
        'Samosa Chaat - Crispy samosas topped with tangy yogurt and chutneys.',
      ],
    },
    {
      id: 11,
      name: 'Panda Express',
      image: '/panda-express.jpg',
      location: 'Paradise Palms Café',
      hours: 'Mon-Fri 10am–4:30pm',
      favoriteItems: [
        'Orange Chicken - Crispy chicken tossed in a sweet and tangy orange sauce.',
        'Beijing Beef - Tender beef strips stir-fried with bell peppers and onions in a spicy sauce.',
        'Chow Mein - Stir-fried noodles with cabbage, onions, and celery.',
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#000' }}>Foods Available Right Now</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
          {foodOptions.map((food) => (
            <div
              key={food.id}
              style={{
                width: '300px',
                margin: '10px',
                padding: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                borderRadius: '10px',
                backgroundColor: '#f9f9f9',
              }}
            >
              <Image
                src={food.image}
                alt={food.name}
                width={300}
                height={200}
                style={{ objectFit: 'cover', borderRadius: '10px' }}
              />
              <h3 style={{ marginTop: '10px', color: '#000' }}>{food.name}</h3>
              <p style={{ color: '#333', fontSize: '14px' }}>{food.location}</p>
              <p style={{ color: '#555', fontSize: '12px' }}><strong>Hours:</strong> {food.hours}</p>
              <ul style={{ color: '#333', fontSize: '14px' }}>
                {food.favoriteItems.map((item, index) => (
                  <li key={index} style={{ marginBottom: '5px' }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FoodsAvailableRightNowPage;
