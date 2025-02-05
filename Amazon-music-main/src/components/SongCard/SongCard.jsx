import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './SongCard.css'; // Import the CSS file

function SongCard({ image, name,  trackId }) {
  return (
    <Link to={`/track/${trackId}`} className='text-decoration-none'>
      <Card className='bg-transparent border-0 custom-shadow song-card' style={{ width: '85%' }}>
        <Card.Img className='rounded' variant="top" src={image} />
        <div className='text-white text-center'>
          <Card.Text className='song-card-text'>{name}</Card.Text>
        </div>
      </Card>
    </Link>
  );
}

export default SongCard;
