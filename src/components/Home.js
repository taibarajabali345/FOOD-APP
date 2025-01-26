import React, { useState } from 'react';
import SpecialtyCard from './SpecialtyCard';
import './Home.css';

function Home() {
  const [search, setSearch] = useState('');

  const specialties = [
    { image: "https://static.vecteezy.com/system/resources/thumbnails/044/532/218/small/ai-generated-pizza-with-meat-and-cheese-and-vegetables-generative-ai-photo.jpeg", title: "Pizza", description: "Cheesy, spicy, and loaded with your favorite toppings.", link: "/menu/pizza" },
    { image: "https://i.ytimg.com/vi/vya2TiFfLRM/maxresdefault.jpg", title: "Burgers", description: "Juicy patties with fresh ingredients served just right.", link: "/menu/burgers" },
    { image: "https://www.thecookierookie.com/wp-content/uploads/2023/07/featured-chicken-parmesan-pasta-recipe.jpg", title: "Pasta", description: "Italian-inspired pasta dishes bursting with flavor.", link: "/menu/pasta" },
    { image: "https://www.kikkoman.co.uk/fileadmin/user_upload/Recipes/Bilder_EU/942-recipe-page-smoked-salmon-and-avocado-roll_desktop.jpg", title: "Sushi", description: "Fresh, delicate sushi rolls for an unforgettable experience.", link: "/menu/sushi" },
    { image: "https://cdn.loveandlemons.com/wp-content/uploads/2021/04/green-salad-500x375.jpg", title: "Salad", description: "Light, healthy salads filled with fresh, vibrant ingredients.", link: "/menu/salad" },
    { image: "https://www.centercutcook.com/wp-content/uploads/2025/01/chocolate-lasagna-4.jpg", title: "Desserts", description: "Sweet and indulgent desserts to satisfy your cravings.", link: "/menu/dessert" },
    { image: "https://littlechefwithin.com/wp-content/uploads/2024/01/Shredded-Chicken-Tacos-Little-Chef-Within.jpg", title: "Tacos", description: "Flavorsome tacos with crispy shells and tasty fillings.", link: "/menu/tacos" },
  ];

  const filteredSpecialties = specialties.filter(specialty =>
    specialty.title.toLowerCase().includes(search.toLowerCase())
  );

  const scrollToMenu = () => {
    document.getElementById("menuSection").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="home">
      <div className="hero">
        <h1>Welcome to Food Paradise</h1>
        <p>Discover flavors that delight your taste buds</p>
        
        {/* Explore More Button */}
        <button className="explore-more-button" onClick={scrollToMenu}>
          Explore More
        </button>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input 
          type="text" 
          placeholder="Search Specialties..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Specialties Section */}
      <h2 className="section-title">Our Specialties</h2>
      <div id="menuSection" className="specialties">
        {filteredSpecialties.length > 0 ? (
          filteredSpecialties.map((specialty, index) => (
            <SpecialtyCard 
              key={index}
              image={specialty.image}
              title={specialty.title}
              description={specialty.description}
              link={specialty.link}
            />
          ))
        ) : (
          <p>No specialties found. Try a different search term.</p>
        )}
      </div>

      {/* Customer Reviews */}
      <div className="testimonials">
        <div className="testimonial-card">
          <p>&quot;This place offers the best pizza I&apos;ve ever had! A must-try for pizza lovers!&quot;</p>
          <span>- John Doe</span>
        </div>
        <div className="testimonial-card">
          <p>&quot;Delicious pasta and friendly staff. I love coming here every week!&quot;</p>
          <span>- Jane Smith</span>
        </div>
        <div className="testimonial-card">
          <p>&quot;Amazing food and great ambiance. Highly recommend the tacos!&quot;</p>
          <span>- Mark Lee</span>
        </div>
      </div>
    </div>
  );
}

export default Home;









