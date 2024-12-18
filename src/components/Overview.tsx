import React, { useEffect } from 'react';
import { FileText, Clock } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Overview: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Animation happens only once when in view
    });
  }, []);

  return (
    <section
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '60px',
        padding: '0 20px',
        flexWrap: 'wrap',
      }}
    >
      {/* Title and Description Section */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '40px',
        }}
        data-aos="fade-up"
      >
        <h2
          style={{
            fontSize: '3.5rem',
            marginBottom: '20px',
            color: 'white',
            textShadow: '0 0 8px white, 0 0 12px #B0B8B0',
          }}
        >
          Overview
        </h2>
        <p
          style={{
            fontSize: '1.2rem',
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
          flexWrap: 'wrap',
        }}
      >
        {/* Text Content Section */}
        <div
          style={{
            flex: '1',
            paddingRight: '20px',
            minWidth: '300px',
          }}
        >
          {/* Task Management Card */}
          <div
            style={{
              backgroundColor: '#000000',
              color: 'white',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
              marginBottom: '20px',
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <FileText color="#B0B8B0" size={30} />
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Task Management</h3>
            </div>
            <p
              style={{
                fontSize: '1rem',
                color: '#B0B8B0',
                marginTop: '10px',
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
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
            }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Clock color="#B0B8B0" size={30} />
              <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Progress Monitoring</h3>
            </div>
            <p
              style={{
                fontSize: '1rem',
                color: '#B0B8B0',
                marginTop: '10px',
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
            minWidth: '300px',
            paddingLeft: '20px',
          }}
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="https://media.discordapp.net/attachments/1289950260009111574/1318864408239276082/WT-banner.png?ex=6763dfb2&is=67628e32&hm=eadcdcd4dafa27cc6a014f257e6f2e3ccb8d765217a606e5ee1649df2965edd0&=&format=webp&quality=lossless&width=712&height=473"
            alt="Person working at desk"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Overview;
