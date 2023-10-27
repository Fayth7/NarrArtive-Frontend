import MainLayout from '../Layout/MainLayout'; 
import FeaturedStories from '../Components/FeaturedStories';
import FeaturedArt from '../Components/FeaturedArt';

function ExplorePage() {
  return (
    <MainLayout>
      <div>
        <h2>Explore</h2>
        <h4>Popular Stories Take the Lead</h4>
        <FeaturedStories /> 
        <h3>Featured Art</h3>
        <h4>A Canvas of Imagination</h4>
        <FeaturedArt />
        {/* Other sections of your ExplorePage */}
      </div>
    </MainLayout>
  );
}

export default ExplorePage;
