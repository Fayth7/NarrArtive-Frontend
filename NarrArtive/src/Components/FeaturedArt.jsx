import './FeaturedArt.css';
import Image1 from '../Images/Art1.webp'; 
import Image2 from '../Images/Art2.webp';
import Image3 from '../Images/Art3.webp';
import Image4 from '../Images/Art4.webp';

function FeaturedArt() {
  return (
    <div className="featured-art-container">
      <div className="featured-art-item">
        <img src={Image1} alt="Image1" className="featured-art-image" />
      </div>
      <div className="featured-art-item">
        <img src={Image2} alt="Image2" className="featured-art-image" />
      </div>
      <div className="featured-art-item">
        <img src={Image3} alt="Image3" className="featured-art-image" />
      </div>
      <div className="featured-art-item">
        <img src={Image4} alt="Image4" className="featured-art-image" />
      </div>
    </div>
  );
}

export default FeaturedArt;
