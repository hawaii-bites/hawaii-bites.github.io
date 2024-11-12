import React from 'react';

const TodaysTopPicksPage: React.FC = () => {
  // Sample data for today's top picks
  const topPicks = [
    {
      id: 1,
      name: 'Spicy Ahi Poke Bowl',
      image: '/public/spicy-ahi-poke.jpg',
      description: 'Fresh ahi tuna mixed with spicy mayo, served over sushi rice. A favorite from Campus Center.',
      location: 'Campus Center',
    },
    {
      id: 2,
      name: 'Garlic Shrimp Plate',
      image: '/public/garlic-shrimp.jpg',
      description: 'Juicy shrimp sautéed in garlic butter sauce, served with rice and mac salad. Available at Manoa Gardens.',
      location: 'Manoa Gardens',
    },
    {
      id: 3,
      name: 'Vegan Burrito',
      image: '/public/vegan-burrito.jpg',
      description: 'A delicious burrito filled with beans, rice, guacamole, and veggies. Perfect for a healthy lunch!',
      location: 'Paradise Palms',
    },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Today's Top Picks</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
        {topPicks.map((pick) => (
          <div
            key={pick.id}
            style={{
              width: '300px',
              margin: '10px',
              padding: '10px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              borderRadius: '10px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <img
              src={pick.image}
              alt={pick.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
            />
            <h3 style={{ marginTop: '10px' }}>{pick.name}</h3>
            <p style={{ color: '#666' }}>{pick.description}</p>
            <p><strong>Location:</strong> {pick.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysTopPicksPage;
