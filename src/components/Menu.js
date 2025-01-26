import React from "react";
import { useParams } from "react-router-dom";
import "./Menu.css";

// Data for the food items categorized
const foodData = {
    burgers: [
      { id: 1, name: "Cheeseburger", description: "Juicy patty with melted cheese.", imageUrl: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/102cf51c-9220-4278-8b63-2b9611ad275e/Derivates/3831dbe2-352e-4409-a2e2-fc87d11cab0a.jpg" },
      { id: 2, name: "BBQ Burger", description: "Delicious BBQ sauce with beef patty.", imageUrl: "https://pulses.org/us/wp-content/uploads/2020/05/DSCF4822-scaled.jpg" },
      { id: 3, name: "Veggie Burger", description: "Healthy veggie patty with fresh lettuce.", imageUrl: "https://www.nomeatathlete.com/wp-content/uploads/2012/08/burger.jpg" },
      { id: 4, name: "Bacon Burger", description: "Crispy bacon and creamy mayo.", imageUrl: "https://foxeslovelemons.com/wp-content/uploads/2023/08/Avocado-Burger-9.jpg" },
      { id: 5, name: "Spicy Jalapeno Burger", description: "Packed with fiery jalapenos.", imageUrl: "https://thumbs.dreamstime.com/b/spicy-cheddar-jalapeno-burger-patty-mayo-fresh-jalapenos-344614623.jpg" },
      { id: 6, name: "Mushroom Swiss Burger", description: "Swiss cheese and sautéed mushrooms.", imageUrl: "https://tideandthyme.com/wp-content/uploads/2013/02/mushroomonionswissburger.jpg" },
      { id: 7, name: "Double Cheeseburger", description: "Two patties, twice the cheese.", imageUrl: "https://www.kitchensanctuary.com/wp-content/uploads/2021/05/Double-Cheeseburger-square-FS-42.jpg" },
      { id: 8, name: "Chicken Burger", description: "A succulent chicken patty.", imageUrl: "https://www.recipetineats.com/tachyon/2023/09/Crispy-fried-chicken-burgers_5.jpg" },
      { id: 9, name: "Classic Burger", description: "Simple and delicious.", imageUrl: "https://foodie.sysco.com/wp-content/uploads/2019/07/Simply-Classic-Burger.jpg" },
      { id: 10, name: "Fish Burger", description: "A fresh fish fillet with tartar sauce.", imageUrl: "https://seafoodbysykes.com/wp-content/uploads/crisy-coated-fish-burgers.png" },
    ],
    pizza: [
      { id: 1, name: "Margherita Pizza", description: "Classic mozzarella and basil.", imageUrl: "https://simplyhomecooked.com/wp-content/uploads/2023/04/Margherita-Pizza-3.jpg" },
      { id: 2, name: "Pepperoni Pizza", description: "Loaded with spicy pepperoni.", imageUrl: "https://static.wixstatic.com/media/597497_39dfa709d3d845eeaf43eb692e93b31b~mv2.jpg/v1/fill/w_642,h_502,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Image-empty-state.jpg" },
      { id: 3, name: "Vegetarian Pizza", description: "A mix of fresh veggies and cheese.", imageUrl: "https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png" },
      { id: 4, name: "Hawaiian Pizza", description: "Ham and pineapple combo.", imageUrl: "https://hips.hearstapps.com/hmg-prod/images/hawaiian-pizza-index-65f4641de4b08.jpg?crop=0.502xw:1.00xh;0.332xw,0&resize=1200:*" },
      { id: 5, name: "BBQ Chicken Pizza", description: "Smoky BBQ chicken.", imageUrl: "https://hips.hearstapps.com/hmg-prod/images/bbq-pizza-318-1547837614.jpg?crop=1xw:0.84375xh;center,top" },
      { id: 6, name: "Meat Lover's Pizza", description: "Packed with various meats.", imageUrl: "https://nellaspizza.com/wp-content/uploads/2020/07/meat-lovers.jpg" },
      { id: 7, name: "Buffalo Chicken Pizza", description: "Buffalo sauce and chicken toppings.", imageUrl: "https://thecozycook.com/wp-content/uploads/2023/08/Buffalo-Chicken-Pizza-f.jpg" },
      { id: 8, name: "Cheeseburger Pizza", description: "Beef, cheese, and pickles.", imageUrl: "https://www.allrecipes.com/thmb/MQ27yIkJCQd_PMRDxs-9aIIxhfM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/p-2000-827cf6a7a0814c1abf68a65733ff6f99.jpeg" },
      { id: 9, name: "Four Cheese Pizza", description: "Mozzarella, parmesan, cheddar, ricotta.", imageUrl: "https://www.inspiredtaste.net/wp-content/uploads/2023/08/Cheese-Pizza-2-1200.jpg" },
      { id: 10, name: "Spinach Artichoke Pizza", description: "Spinach and artichoke.", imageUrl: "https://www.kingarthurbaking.com/sites/default/files/styles/featured_image/public/2022-09/Spinach-Artichoke-Pizza-22-3_01.jpg?itok=fX8jdPcX" },
    ],
    pasta: [
      { id: 1, name: "Spaghetti Carbonara", description: "Italian pasta with eggs and bacon.", imageUrl: "https://eightforestlane.com/wp-content/uploads/2023/10/Easy-Spaghetti-Carbonara_SQ-2.jpg" },
      { id: 2, name: "Penne Arrabbiata", description: "Penne pasta in a spicy tomato sauce.", imageUrl: "https://finefoodsblog.com/wp-content/uploads/2021/03/penne-allArrabbiata-1200.jpg" },
      { id: 3, name: "Fettuccine Alfredo", description: "Rich and creamy sauce.", imageUrl: "https://sugarspunrun.com/wp-content/uploads/2023/02/Best-fettuccine-alfredo-recipe-1-of-1-500x500.jpg" },
      { id: 4, name: "Lasagna", description: "Layered pasta with cheese.", imageUrl: "https://cookingwithayeh.com/wp-content/uploads/2023/12/Spinach-Lasagna-SQ-12.jpg" },
      { id: 5, name: "Pasta Primavera", description: "Fresh seasonal veggies.", imageUrl: "https://bertolli.com/wp-content/uploads/2023/10/fettuccine-alfredo-primavera-recipe.jpg" },
      { id: 6, name: "Ravioli", description: "Stuffed pasta with ricotta cheese.", imageUrl: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FEdit%2F2022-12-Lobster-Ravioli%2Flobster-ravioli-2" },
      { id: 7, name: "Linguine Pesto", description: "Fragrant pesto sauce.", imageUrl: "https://sweetcaramelsunday.com/wp-content/uploads/Linguine-Al-Pesto-220.jpg" },
      { id: 8, name: "Mac and Cheese", description: "Comfort food classic.", imageUrl: "https://www.deepfriedhoney.com/wp-content/uploads/2024/08/mac-cheese-stretching-fork.jpg" },
      { id: 9, name: "Penne alla Vodka", description: "Penne pasta in vodka sauce.", imageUrl: "https://www.eatfigsnotpigs.com/wp-content/uploads/2024/08/Spicy-Vodka-Pasta_0003-500x500.jpg" },
      { id: 10, name: "Baked Ziti", description: "Mozzarella cheese and marinara sauce.", imageUrl: "https://lede-admin.appetitomagazine.com/wp-content/uploads/sites/53/2023/04/Appetito_Rossella_Ziti.jpg" },
    ],
        
    dessert: [
      { id: 1, name: "Chocolate Cake", description: "Rich and moist with layers of chocolate goodness.", imageUrl: "https://sallysbakingaddiction.com/wp-content/uploads/2013/04/triple-chocolate-cake-4.jpg" },
      { id: 2, name: "Cheesecake", description: "Creamy cheesecake on a graham cracker crust, topped with fresh berries.", imageUrl: "https://natashaskitchen.com/wp-content/uploads/2023/06/Strawberry-Cheesecake-3-768x1152.jpg" },
      { id: 3, name: "Apple Pie", description: "Flaky pie crust filled with sweet, spiced apples.", imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGuHBe4qnBZ0I-Eib5Cl-eS-JJ6Mf-Wpi5DA-20QVETCQTRsfcfOmGdSFrMk6SmzhgwOs&usqp=CAU" },
      { id: 4, name: "Tiramisu", description: "Layers of coffee-soaked ladyfingers and mascarpone cheese.", imageUrl: "https://kjandcompany.co/wp-content/uploads/2019/09/Tiramisu-Cups-7-1-scaled.jpg" },
      { id: 5, name: "Ice Cream Sundae", description: "Vanilla ice cream topped with hot fudge, whipped cream, and a cherry.", imageUrl: "https://icecreamfromscratch.com/wp-content/uploads/2022/05/Ice-Cream-Sundae-1.2-735x1103.jpg" },
      { id: 6, name: "Panna Cotta", description: "A creamy, smooth dessert often served with berry sauce.", imageUrl: "https://www.jocooks.com/wp-content/uploads/2024/02/panna-cotta-1-22.jpg" },
      { id: 7, name: "Cupcakes", description: "Light and fluffy cupcakes topped with colorful frosting.", imageUrl: "https://funcakes.com/content/uploads/2022/06/cupcake_strooisels_regenboog.jpg" },
      { id: 8, name: "Brownies", description: "Fudgy and chewy brownies made with rich chocolate.", imageUrl: "https://www.bakedbyclaire.com/img/fudgy%20brownies.png" },
      { id: 9, name: "Lemon Meringue Pie", description: "Tangy lemon filling topped with fluffy meringue.", imageUrl: "https://butterandthyme.com/wp-content/uploads/2022/06/lemon-meringue-pie-featured.jpg" },
      { id: 10, name: "Creme Brûlée", description: "Creamy custard with a crispy, caramelized sugar top.", imageUrl: "https://www.completementpoireau.ca/media/ckdbzxye/creme-brulee-bleuets-sauvages-1200-x-1200.jpg" },
    ],
    
    salad: [
      { id: 1, name: "Caesar Salad", description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.", imageUrl: "https://www.grocery.coop/sites/default/files/NCG_Dennis_Becker_Classic_Caesar_Salad_715_x_477.jpg" },
      { id: 2, name: "Greek Salad", description: "A mix of cucumbers, tomatoes, olives, and feta with olive oil dressing.", imageUrl: "https://www.bowlofdelicious.com/wp-content/uploads/2020/07/Greek-Salad-square.jpg" },
      { id: 3, name: "Garden Salad", description: "A colorful mix of fresh vegetables with a light vinaigrette.", imageUrl: "https://natashaskitchen.com/wp-content/uploads/2023/02/House-Garden-Salad-SQ.jpg" },
      { id: 4, name: "Cobb Salad", description: "A hearty salad with chicken, avocado, bacon, egg, and bleu cheese.", imageUrl: "https://www.wholesomeyum.com/wp-content/uploads/2020/07/wholesomeyum-Cobb-Salad-Recipe-20.jpg" },
      { id: 5, name: "Spinach and Strawberry Salad", description: "Fresh spinach, sweet strawberries, and nuts with a balsamic vinaigrette.", imageUrl: "https://lifemadesweeter.com/wp-content/uploads/Strawberry-Spinach-Salad-Recipe-Photo-Picture-500x375.jpg" },
      { id: 6, name: "Waldorf Salad", description: "A creamy salad with apples, walnuts, celery, and grapes.", imageUrl: "https://fedbysab.com/wp-content/uploads/2022/12/Chicken-Waldorf-Salad-Recipe-500x500.jpg" },
      { id: 7, name: "Quinoa Salad", description: "A hearty, protein-packed salad with quinoa, vegetables, and a lemon dressing.", imageUrl: "https://www.primaverakitchen.com/wp-content/uploads/2023/03/Chicken-Quinoa-Salad-Primavera-Kitchen-8.jpg" },
      { id: 8, name: "Caprese Salad", description: "Fresh mozzarella, tomatoes, basil, and balsamic vinegar.", imageUrl: "https://www.freutcake.com/wp-content/uploads/2017/07/Blueberry-Tomato-Caprese-3.jpg" },
      { id: 9, name: "Chicken Caesar Salad", description: "Grilled chicken, romaine lettuce, Caesar dressing, and croutons.", imageUrl: "https://www.fromvalerieskitchen.com/wordpress/wp-content/uploads/2023/08/Grilled-Chicken-Caesar-Salad-11.jpg" },
      { id: 10, name: "Avocado and Tomato Salad", description: "Fresh tomatoes and creamy avocado with a simple olive oil dressing.", imageUrl: "https://happilyunprocessed.com/wp-content/uploads/2023/01/Avocado-Tomato-and-Mozzarella-Salad-1.jpg" },
    ],
    
    tacos: [
      { id: 1, name: "Beef Tacos", description: "Seasoned ground beef, lettuce, cheese, and salsa in a crunchy shell.", imageUrl: "https://funwithoutfodmaps.com/wp-content/uploads/2022/07/Low-FODMAP-Beef-Tacos-Square.jpg" },
      { id: 2, name: "Chicken Tacos", description: "Grilled chicken, cilantro, and lime with a tangy sauce in a soft shell.", imageUrl: "https://littlechefwithin.com/wp-content/uploads/2024/01/Shredded-Chicken-Tacos-Little-Chef-Within.jpg" },
      { id: 3, name: "Fish Tacos", description: "Lightly fried fish fillets, slaw, and a creamy sauce in soft tortillas.", imageUrl: "https://img.taste.com.au/ZuN3XzkF/taste/2016/11/easy-fish-tacos-106044-1.jpeg" },
      { id: 4, name: "Carnitas Tacos", description: "Slow-cooked pulled pork, onions, cilantro, and lime.", imageUrl: "https://www.nospoonnecessary.com/wp-content/uploads/2015/05/pork-carnitas-tacos.jpg" },
      { id: 5, name: "Shrimp Tacos", description: "Succulent shrimp, avocado, and chipotle mayo in a soft shell.", imageUrl: "https://www.wellplated.com/wp-content/uploads/2018/04/Healthy-Shrimp-Tacos-with-Shrimp-Taco-Sauce.jpg" },
      { id: 6, name: "Veggie Tacos", description: "Grilled vegetables, black beans, and avocado with a zesty sauce.", imageUrl: "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/veggie-tacos-al-pastor-0954d423.jpg" },
      { id: 7, name: "Steak Tacos", description: "Tender steak, grilled onions, and cilantro with a spicy salsa.", imageUrl: "https://littlespicejar.com/wp-content/uploads/2018/04/Mojo-Steak-Tacos-with-Quick-Guac-1-720x540.jpg" },
      { id: 8, name: "Barbacoa Tacos", description: "Shredded beef, onions, cilantro, and a rich barbecue sauce.", imageUrl: "https://www.chilipeppermadness.com/wp-content/uploads/2022/11/Barbacoa-Tacos-SQ.jpg" },
      { id: 9, name: "Breakfast Tacos", description: "Scrambled eggs, bacon, potatoes, and cheese in a soft tortilla.", imageUrl: "https://thecozycook.com/wp-content/uploads/2023/08/Breakfast-Tacos-f.jpg" },
      { id: 10, name: "Al Pastor Tacos", description: "Marinated pork, pineapple, onions, and cilantro in a soft taco shell.", imageUrl: "https://foodess.com/wp-content/uploads/2024/08/Tacos-Al-Pastor.jpg" },
    ],
    
    sushi: [
      { id: 1, name: "California Roll", description: "Crab meat, avocado, and cucumber rolled in seaweed and rice.", imageUrl: "https://www.ohmyfoodrecipes.com/wp-content/uploads/2021/10/ca-rolls-horizontal-stack.jpg" },
      { id: 2, name: "Spicy Tuna Roll", description: "Tuna mixed with spicy mayo and rolled with cucumber and avocado.", imageUrl: "https://134742494.cdn6.editmysite.com/uploads/1/3/4/7/134742494/s977809178166563819_p91_i2_w1920.jpeg" },
      { id: 3, name: "Salmon Nigiri", description: "Fresh salmon slices over seasoned rice, served with wasabi and soy sauce.", imageUrl: "https://133282744.cdn6.editmysite.com/uploads/1/3/3/2/133282744/s615302892702926874_p43_i4_w1080.jpeg" },
      { id: 4, name: "Tempura Roll", description: "Crispy tempura shrimp with avocado, cucumber, and eel sauce.", imageUrl: "https://ichisushi.com/wp-content/uploads/2022/04/Best-Tempura-Sushi-Recipes.jpg" },
      { id: 5, name: "Dragon Roll", description: "Shrimp tempura inside, topped with avocado and eel, drizzled with eel sauce.", imageUrl: "https://www.justonecookbook.com/wp-content/uploads/2020/06/Dragon-Roll-0286-I.jpg" },
      { id: 6, name: "Rainbow Roll", description: "A California roll topped with assorted slices of fresh fish.", imageUrl: "https://i.ytimg.com/vi/cIESjI-GCq0/sddefault.jpg" },
      { id: 7, name: "Eel Nigiri", description: "Grilled eel on rice, glazed with sweet eel sauce.", imageUrl: "https://img.freepik.com/premium-photo/closeup-grilled-eel-sushi-nigiri-with-green-onion-garnish-black-plate_1282444-229564.jpg" },
      { id: 8, name: "Philadelphia Roll", description: "Salmon, avocado, and cream cheese rolled with rice and seaweed.", imageUrl: "https://i.ytimg.com/vi/TpUr-BZafms/maxresdefault.jpg" },
      { id: 9, name: "Maki Roll", description: "Traditional sushi roll with seaweed, rice, and a variety of fillings like tuna or salmon.", imageUrl: "https://cdn.media.amplience.net/i/japancentre/guide-page-sushi-79-maki-sushi/Maki-sushi-rolls?$poi$&w=1200&h=630&sm=c&fmt=auto" },
      { id: 10, name: "Volcano Roll", description: "Spicy tuna and avocado inside, topped with baked scallops and a creamy sauce.", imageUrl: "https://www.mashed.com/img/gallery/volcano-roll-what-you-should-know-before-ordering/what-are-some-of-these-variations-1628197737.jpg" },
    ]
    
  };

// Menu Component
function Menu() {
  const { category } = useParams(); // Get category from URL
  const categoryData = foodData[category.toLowerCase()]; // Ensure case-insensitivity

  if (!categoryData) {
    return <h2>Sorry, no such category found.</h2>;
  }

  return (
    <div className="menu">
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} Menu</h2>
      <div className="menu-items">
        {categoryData.map((item) => (
          <div key={item.id} className="menu-item-card">
            <img src={item.imageUrl} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;






