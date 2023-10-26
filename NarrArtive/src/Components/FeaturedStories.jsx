const featuredStoriesData = [
  {
    id: 1,
    title: 'AI-Generated Story 1',
    description: 'Whispers of Midnight: Tales to Haunt and Inspire.',
    imageLink: 'https://ai-generated-images.com/image1.jpg',
  },
  {
    id: 2,
    title: 'AI-Generated Story 2',
    description: 'The Enchanted Odyssey: Epic Tales of Magic and Mystery.',
    imageLink: 'https://ai-generated-images.com/image2.jpg',
  },
  {
    id: 3,
    title: 'AI-Generated Story 3',
    description: 'Chronicles of Wonder: Extraordinary Stories from Every Corner.',
    imageLink: 'https://ai-generated-images.com/image2.jpg',
  },
  {
    id: 4,
    title: 'AI-Generated Story 4',
    description: 'Legends of the Lost Realms: Unearthing Forgotten Adventures.',
    imageLink: 'https://ai-generated-images.com/image2.jpg',
  },
  
  
  
];

function FeaturedStories() {
  return (
    <section>
      <h3>Featured Stories</h3>
      {featuredStoriesData.map((story) => (
        <div key={story.id} className="featured-story">
          <a href={`/stories/${story.id}`}>
            <img src={story.imageLink} alt={story.title} />
            <h4>{story.title}</h4>
            <p>{story.description}</p>
          </a>
        </div>
      ))}
    </section>
  );
}

export default FeaturedStories;
