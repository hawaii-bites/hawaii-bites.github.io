import React from 'react';

const TodaysTopPicksPage: React.FC = () => {
  // Sample data for today's top picks
  const topPicks = [
    {
      id: 1,
      name: 'Matcha Latte',
      image: '/public/matcha-latte.jpeg',
      description: 'A refreshing and creamy matcha latte made with high-quality matcha powder and milk. A popular choice from Starbucks.',
      location: 'Starbucks (Campus Center)',
    },
    {
      id: 2,
      name: 'Orange Chicken',
      image: '/public/orange-chicken.jpeg',
      description: 'Crispy chicken bites tossed in a sweet and tangy orange sauce. A crowd favorite from Panda Express.',
      location: 'Panda Express (Campus Center)',
    },
    {
      id: 3,
      name: 'Lemongrass Banh Mi',
      image: '/public/lemongrass-banhmi.jpeg',
      description: 'A Vietnamese-style baguette sandwich filled with lemongrass grilled chicken, pickled vegetables, and fresh herbs. A must-try from Ba-Le.',
      location: 'Ba-Le (Paradise Palms)',
    },
  ];

  return (
    <div style={{ padding: '20px', maxWidth: '1200px', margin: 'auto', backgroundColor: '#004A32' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#FFF' }}>Today's Top Picks</h1>
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
              backgroundColor: '#1A3A2D',
              color: '#FFF',
            }}
          >
            <img
              src={pick.image}
              alt={pick.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
            />
            <h3 style={{ marginTop: '10px', color: '#FFF' }}>{pick.name}</h3>
            <p style={{ color: '#B5B5B5' }}>{pick.description}</p>
            <p style={{ color: '#FFF' }}>
              <strong>Location:</strong> {pick.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysTopPicksPage;