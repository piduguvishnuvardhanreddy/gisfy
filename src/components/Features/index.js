
import './index.css';

import ICON1 from '../../images/ICON 1.png'
import ICON2 from '../../images/ICON 2.png'
import ICON3 from '../../images/ICON 3.png'
import ICON4 from '../../images/ICON 4.png'
import ICON5 from '../../images/ICON 5.png'
import ICON6 from '../../images/ICON 6.png'
import ICON7 from '../../images/ICON 7.png'
import ICON8 from '../../images/ICON 8.png'
import ICON9 from '../../images/ICON 9.png'
import ICON10 from '../../images/ICON 10.png'
import ICON11 from '../../images/ICON 11.png'
import ICON12 from '../../images/ICON 12.png'
import ICON13 from '../../images/ICON 13.png'
import ICON14 from '../../images/ICON 14.png'
import ICON15 from '../../images/ICON 15.png'
import ICON16 from '../../images/ICON 16.png'

const featuresKey = [
  {
    id: 1,
    title: 'Instant Certificate Verification',
    description: 'Quickly verify the authenticity of certificates with our blockchain-based system.',
    imageUrl: ICON7,
  },
  {
    id: 2,
    title: 'Real Time Analytics',
    description: 'Access to real-time analytics and dashboards for certificate issuance, verification, and fraud detection.',
    imageUrl: ICON8,
  },
  {
    id: 3,
    title: 'Immutable Blockchain Storage',
    description: 'Certificates are securely stored on the blockchain, ensuring tamper-proof records.',
    imageUrl: ICON9,
  },
  {
    id: 4,
    title: 'API Based Integration',
    description: 'Certificates are securely stored on the blockchain, ensuring tamper-proof records.',
    imageUrl: ICON10,
  },
  {
    id: 5,
    title: 'Universal Cross Verification',
    description: 'A universal verification standard that works across various institutions and organizations in Andhra Pradesh.',
    imageUrl: ICON11,
  },
  {
    id: 6,
    title: 'Seamless Integration',
    description: 'Integrates with government systems such as Aadhaar, DigiLocker, and E-Office Suite for enhanced security and user convenience.',
    imageUrl: ICON12,
  }
];

const featuresMtria = [
  {
    id: 1,
    title: 'Efficiency in Service Delivery',
    description: 'e-Pragati integrates multiple departments into one platform, reducing the need for manual paperwork and improving coordination between department.',
    imageUrl: ICON13,
  },
  {
    id: 2,
    title: 'Real-Time Monitoring',
    description: 'Both Mana Mitra and e-Pragati allow government agencies to monitor the progress of service delivery in real time, helping to identify bottleneck.',
    imageUrl: ICON14,
  },
  {
    id: 3,
    title: 'Reduction of Bureaucracy',
    description: 'By digitizing and automating various processes, both platforms reduce the bureaucratic burden, enabling quicker decision-making and approval processes.',
    imageUrl: ICON15,
  },
  {
    id: 4,
    title: 'Enhanced Data Management',
    description: 'The integration of services into a digital platform allows for better data management, tracking, and analysis, helping departments.',
    imageUrl: ICON16,
  }
];

const features = [
  {
    id: 1,
    title: 'Instant Certificate Verification',
    description: 'Quickly verify the authenticity of certificates with our blockchain-based system.',
    imageUrl: ICON1 ,
  },
  {
    id: 2,
    title: 'Real Time Analytics',
    description: 'Access to real-time analytics and dashboards for certificate issuance, verification, and fraud detection.',
    imageUrl: ICON2 ,
  },
  {
    id: 3,
    title: 'Immutable Blockchain Storage',
    description: 'Certificates are securely stored on the blockchain, ensuring tamper-proof records.',
    imageUrl: ICON3 ,
  },
  {
    id: 4,
    title: 'API Based Integration',
    description: 'Easily integrates with existing systems via RESTful APIs to enable workflow-based certificate validation.',
    imageUrl: ICON4 ,
  },
  {
    id: 5,
    title: 'Universal Cross Verification',
    description: 'A universal verification standard that works across various institutions and organizations in Andhra Pradesh.',
    imageUrl: ICON5 ,
  },
  {
    id: 6,
    title: 'Seamless Integration',
    description: 'Integrates with government systems such as Aadhaar, DigiLocker, and E-Office Suite for enhanced security and user convenience.',
    imageUrl: ICON6 ,
  },
];

const Features = () => {
  return (
    <>
      <section className="features-section">
        <h2 className="features-heading">Key Features of AP DigiVerify</h2>
        <div className="features-grid">
          {features.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <img src={feature.imageUrl} alt={feature.title} className="feature-icon" />
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="about-section">
        <h2 className="about-heading">AP Digi Verify Developed as per the Initiative of Mana Mitra and e-Pragati Program</h2>
        <p className="about-text">Andhra Pradesh has introduced two groundbreaking initiatives - Mana Mitra and e-Pragati - that are transforming the way citizens interact with government services and improving efficiency across departments. These initiatives reflect the state's commitment to leveraging technology for seamless public service delivery and transparent governance. </p>
      </section>
      <section className="features-section">
        <h2 className="features-heading">Key Features of Mana Mitra & e-Pragathi (For Government Departments)</h2>
        <div className="features-grid">
          {featuresKey.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <img src={feature.imageUrl} alt={feature.title} className="feature-icon" />
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="features-section">
        <h2 className="features-heading">Key Features of Mana Mitra & e-Pragathi (For Government Departments)</h2>
        <div className="features-grid">
          {featuresMtria.map((feature) => (
            <div className="feature-card" key={feature.id}>
              <img src={feature.imageUrl} alt={feature.title} className="feature-icon" />
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Features;
