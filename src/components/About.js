import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>
          We are passionate about food and committed to bringing you the best dining experience possible.
        </p>
      </div>

      {/* Chef Section */}
      <div className="chef-section">
        <h2>Meet Our Chefs</h2>
        <div className="chef-list">
          {/* Chef Cards */}
          {[
            {
              name: "Chef John",
              specialty: "Pizza",
              description: "Known for creating the cheesiest, most flavorful pizzas.",
              image: "https://images.stockcake.com/public/b/6/0/b606246b-569f-4bce-baca-273e91307bb8_large/chef-garnishing-pizza-stockcake.jpg"
            },
            {
              name: "Chef Sarah",
              specialty: "Burgers",
              description: "Master of juicy, mouth-watering burgers.",
              image: "https://t3.ftcdn.net/jpg/09/24/52/20/360_F_924522095_R0nYXtcgZbAypreKivwYhp5lzgPN7OBN.jpg"
            },
            {
              name: "Chef Michael",
              specialty: "Pasta",
              description: "Known for creating rich, Italian-inspired pasta dishes.",
              image: "https://image.shutterstock.com/image-photo/close-chef-decorating-food-plate-260nw-2472669241.jpg"
            },
            {
              name: "Chef Anna",
              specialty: "Sushi",
              description: "Fresh and delicate sushi rolls that will leave you wanting more.",
              image: "https://images.stockcake.com/public/5/9/4/594616d7-7c3d-4328-8d0f-17cd7e1b2cda_large/chef-preparing-sushi-stockcake.jpg"
            },
            {
              name: "Chef James",
              specialty: "Salads",
              description: "Fresh, vibrant salads filled with seasonal ingredients.",
              image: "https://www.ecoleducasse.com/application/files/6716/8410/2706/How_much_can_a_culinary_chef_make.jpg"
            },
            {
              name: "Chef Lily",
              specialty: "Desserts",
              description: "Known for creating mouth-watering cakes and sweet treats.",
              image: "https://thumbs.dreamstime.com/b/woman-pastry-chef-preparing-desert-pastries-restaurant-65338238.jpg"
            },
            {
              name: "Chef Mark",
              specialty: "Tacos",
              description: "Flavorsome tacos with crispy shells and tasty fillings.",
              image: "https://images.stockcake.com/public/4/b/6/4b6a5189-9a4b-42b9-953c-61bfe3bb51eb_large/joyful-taco-chef-stockcake.jpg"
            }
          ].map((chef, index) => (
            <div className="chef-card" key={index}>
              <img src={chef.image} alt={`Chef ${chef.name}`} className="chef-img" />
              <h3>{chef.name}</h3>
              <p>
                Specializes in <strong>{chef.specialty}</strong>. {chef.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Statement */}
      <div className="mission-statement">
        <h2>Our Mission</h2>
        <p>
          At Food Paradise, our mission is to bring you the finest culinary experiences from around the world. We believe in using only the freshest ingredients to create meals that not only taste amazing but also make you feel at home.
        </p>
      </div>
    </div>
  );
}

export default About;





