import React from 'react';
import './TherapistCard.css'
import { useNavigate } from 'react-router-dom';

// Define an interface for the therapist object
interface Therapist {
  image: string;
  name: string;
  experience: number;
  fee: number;
  expertise: string[];
  languages: string[];
  sessionMode: string;
  location: string;
  nextAvailable: string;
}

interface TherapistCardProps {
  therapist: Therapist;
}

const TherapistCard: React.FC<TherapistCardProps> = ({ therapist }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/doctorInfo'); // Navigate to the Profile component
  };
  return (
    <div className="card">
      <div className="card-header">
        <img src={therapist.image} alt={therapist.name} />
      </div>
      <div className="card-body">
        <h2>{therapist.name}</h2>
        <p>{therapist.experience}+ years of experience</p>
        <p>
          Starts @ <b>₹{therapist.fee}</b> for 50 mins
        </p>
        <p>
          Expertise: {therapist.expertise.join(', ')}
        </p>
        <p>Speaks: {therapist.languages.join(', ')}</p>
        <p>
          Session Mode: {therapist.sessionMode} ({therapist.location})
        </p>
        <p>Next Available slot: {therapist.nextAvailable}</p>
      </div>
      <div className="card-footer">
        <button onClick={handleClick}>View Profile</button>
        <button >Book</button>
      </div>
    </div>
  );
};

const TherapistList: React.FC = () => {
  const therapists: Therapist[] = [
    {
      image: 'url_to_image', // Replace with actual image path
      name: 'Urvashi Varshney',
      experience: 1,
      fee: 1200,
      expertise: ['Anxiety disorders', 'Depressive disorders'],
      languages: ['English', 'Hindi'],
      sessionMode: 'Virtual, In-Person',
      location: 'Delhi',
      nextAvailable: 'Today, 10:00 PM',
    },
    {
      image: 'url_to_image', // Replace with actual image path
      name: 'Nekita Chatlani',
      experience: 1,
      fee: 1200,
      expertise: ['Anxiety disorders', 'Depressive disorders'],
      languages: ['English', 'Hindi'],
      sessionMode: 'Virtual, In-Person',
      location: 'Bengaluru',
      nextAvailable: 'Tomorrow, 09:00 AM',
    },
    {
      image: 'url_to_image', // Replace with actual image path
      name: 'Sarah Merchant',
      experience: 2,
      fee: 1600,
      expertise: ['Anxiety disorders', 'Depressive disorders'],
      languages: ['English', 'Hindi'],
      sessionMode: 'Virtual, In-Person',
      location: 'Mumbai',
      nextAvailable: 'Tomorrow, 10:00 AM',
    },
    {
      image: 'url_to_image', // Replace with actual image path
      name: 'Sayee Bhide',
      experience: 2,
      fee: 1400,
      expertise: ['Relationship skills', 'Stress management'],
      languages: ['English', 'Hindi', 'Marathi'],
      sessionMode: 'Video, Voice',
      location: 'Online',
      nextAvailable: 'Tomorrow, 11:00 AM',
    },
  ];

  return (
    <div className="therapist-list">
      {therapists.map((therapist, index) => (
        <TherapistCard key={index} therapist={therapist} />
      ))}
    </div>
  );
};

export default TherapistList;
