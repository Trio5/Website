import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface CardProps {
  title?: string;
  description?: string;
  image?: string;
}

const CardGrid: React.FC = () => {
  const cards: CardProps[] = [
    { title: '10M+', description: 'Global Users' },
    {
      image:
        'https://media.discordapp.net/attachments/1289950260009111574/1318817160579256400/filtersformatpng.png?ex=6763b3b1&is=67626231&hm=c915fcc5a99210e8a09f103018ed91dcc27d5d428ae10a70353f08a80665df96&=&format=webp&quality=lossless&width=839&height=473',
    },
    { title: '50+', description: 'Employees' },
    {
      image:
        'https://media.discordapp.net/attachments/1289950260009111574/1318817599492063352/Manufacturing-Business.png?ex=6763b41a&is=6762629a&hm=d65d057516dc20b9da5bcadba37d65fefafcc20ed6b6d614e41998b587b4f377&=&format=webp&quality=lossless',
    },
    { title: '90%', description: 'Sales Rate' },
    {
      image:
        'https://media.discordapp.net/attachments/1289950260009111574/1318818220114837547/nerf-gun-wall-storage-idea.png?ex=6763b4ae&is=6762632e&hm=85ad39c969f8b981b4b91ba17acc49704d07158cb02c6fa4e27b4bcf4234e4a5&=&format=webp&quality=lossless&width=473&height=473',
    },
  ];

  const goalsAchievedCards = [
    { title: '4,523', description: 'Goals Achieved' },
    { title: '15,678', description: 'Users Empowered' },
    { title: '3,278', description: 'Projects Completed' },
    { title: '82%', description: 'Productivity Increased' },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div>
      <div
        id="card-grid"
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            maxWidth: '1200px',
            width: '100%',
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200} // Staggered delay for each card
              style={{
                backgroundColor: 'black',
                color: 'white',
                borderRadius: '20px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '200px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
              }}
            >
              {card.image ? (
                <img
                  src={card.image}
                  alt={`Card ${index + 1}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://via.placeholder.com/250?text=Image+Unavailable';
                  }}
                />
              ) : (
                <>
                  <h2 style={{ fontSize: '3rem', margin: '0 0 10px' }}>{card.title}</h2>
                  <p style={{ fontSize: '1.4rem', margin: '0' }}>{card.description}</p>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          height: '100vh',
          textAlign: 'center',
          padding: '0 20px',
        }}
      >
        <div style={{ width: '100%', maxWidth: '1200px' }}>
          <h2
            style={{
              fontSize: '4rem',
              marginBottom: '20px',
              textShadow: '0 0 10px rgba(255, 255, 255, 0.81)',
              color: '#fff',
            }}
          >
            Goals Achieved
          </h2>
          <p style={{ fontSize: '1.5rem', marginBottom: '40px', color: 'gray' }}>
            Measure your aim by the number of personal and professional <br /> milestones you accomplish
            with our NerfTech's.
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '20px',
            }}
          >
            {goalsAchievedCards.map((card, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200} // Staggered delay for "Goals Achieved" cards
                style={{
                  backgroundColor: '#191919',
                  color: 'white',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
                  height: '200px',
                }}
              >
                <h2 style={{ fontSize: '3.5rem', margin: '0 0 10px' }}>{card.title}</h2>
                <p style={{ fontSize: '1.5rem', margin: '0' }}>{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CardGrid;
