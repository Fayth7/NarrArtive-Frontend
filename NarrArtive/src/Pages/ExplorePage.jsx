import MainLayout from '../Layout/MainLayout'; // Import your MainLayout component
import FeaturedStories from '../Components/FeaturedStories';

function ExplorePage() {
  return (
    <MainLayout>
      <div>
        <h2>Explore</h2>
        <FeaturedStories /> {/* Include the FeaturedStories component here */}
        {/* Other sections of your ExplorePage */}
      </div>
    </MainLayout>
  );
}

export default ExplorePage;
