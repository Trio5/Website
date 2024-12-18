import React from 'react';
import { FileText, Clock } from 'lucide-react'; // Importing icons from Lucide React

const Overview: React.FC = () => {
  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center',
        flexDirection: 'column', // Stack content vertically
        marginTop: '60px',
        padding: '0 20px',
        flexWrap: 'wrap', // Ensures responsiveness
      }}
    >
      {/* Title and Description Section */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '40px', // Space between text and the rest of the content
        }}
      >
        <h2
          style={{
            fontSize: '3.5rem',
            marginBottom: '20px',
            color: 'white',
            textShadow: '0 0 8px white, 0 0 12px #B0B8B0', // White glowing effect
          }}
        >
          Overview
        </h2>
        <p
          style={{
            fontSize: '1.2rem', // Reduced text size
            color: '#B0B8B0',
            marginBottom: '30px',
          }}
        >
          Our Self-Management System is designed to empower individuals and teams <br /> to take control of their time, tasks, and goals.
        </p>
      </div>

      {/* Content Layout (Text Content and Image Section) */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap', // Ensures responsiveness
        }}
      >
        {/* Text Content Section */}
        <div
          style={{
            flex: '1',
            paddingRight: '20px',
            minWidth: '300px', // Ensures text container doesn't shrink too much
          }}
        >
          {/* Task Management Card */}
          <div
            style={{
              backgroundColor: '#000000',
              color: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', // Card shadow
              marginBottom: '20px',
              animation: 'fadeUp 1s ease-in-out', // Fade-up effect
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px', // Space between icon and title
              }}
            >
              <FileText color="#B0B8B0" size={30} />
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Task Management</h3>
            </div>
            <p
              style={{
                fontSize: '1rem',
                color: '#B0B8B0',
                marginTop: '10px', // Space between title and description
              }}
            >
              Our task management feature helps you organize and prioritize your tasks, ensuring that everything is completed on time and to the highest standard.
            </p>
          </div>

          {/* Progress Monitoring Card */}
          <div
            style={{
              backgroundColor: '#000000',
              color: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', // Card shadow
              animation: 'fadeUp 1.5s ease-in-out', // Fade-up effect
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px', // Space between icon and title
              }}
            >
              <Clock color="#B0B8B0" size={30} />
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Progress Monitoring</h3>
            </div>
            <p
              style={{
                fontSize: '1rem',
                color: '#B0B8B0',
                marginTop: '10px', // Space between title and description
              }}
            >
              With progress monitoring, track your growth and development over time, ensuring you stay on top of your goals and achieve them effectively.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div
          style={{
            flex: '1',
            minWidth: '300px', // Ensures image doesn't get too small on mobile
            paddingLeft: '20px',
            animation: 'fadeUp 2s ease-in-out', // Fade-up effect
          }}
        >
          <img
            src="https://media.discordapp.net/attachments/1289950260009111574/1318864408239276082/WT-banner.png?ex=6763dfb2&is=67628e32&hm=eadcdcd4dafa27cc6a014f257e6f2e3ccb8d765217a606e5ee1649df2965edd0&=&format=webp&quality=lossless&width=712&height=473" // Replace with actual image URL
            alt="Person working at desk"
            style={{
              width: '100%', // Ensures image stretches to fill its container
              height: 'auto', // Maintains aspect ratio
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)', // Shadow for the image
            }}
          />
        </div>
      </div>
    </section>
  );
};

// CSS Keyframes for Fade-up Effect
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(style);

export default Overview;
