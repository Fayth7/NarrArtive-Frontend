import './FeaturedStories.css'

const featuredStoriesData = [
  {
    id: 1,
    title: 'Whispers of Midnight: Tales to Haunt and Inspire.',
    description: '"Whispers of Midnight" offers a collection of tales that venture into the eerie and the inspirational. These stories come alive in the quiet of the night, where shadows stretch long and secrets emerge. From spine-chilling ghost stories to heartwarming tales of resilience, they explore the dual nature of darkness and light.',
    imageLink: './image1.jpg'
  },
  {
    id: 2,
    title: 'Story 2',
    description: 'The Enchanted Odyssey: Epic Tales of Magic and Mystery.',
    imageLink: 'Image3.jpg',
  },
  {
    id: 3,
    title: 'Story 3',
    description: 'Chronicles of Wonder: Extraordinary Stories from Every Corner.',
    imageLink: './Image2.jpg',
  },
  {
    id: 4,
    title: 'Story 4',
    description: 'Legends of the Lost Realms: Unearthing Forgotten Adventures.',
    imageLink: 'Image4.jpg',
  },
  
  
  
];

function FeaturedStories() {
  return (
    <section className="featured-stories">
      <h3>Featured Stories</h3>
      <div className="story-grid">
        {featuredStoriesData.map((story) => (
          <div key={story.id} className="featured-story">
            <a href={`/stories/${story.id}`}>
              <img src={story.imageLink} alt={story.title} />
              <h4>{story.title}</h4>
              <p>{story.description}</p>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedStories;
