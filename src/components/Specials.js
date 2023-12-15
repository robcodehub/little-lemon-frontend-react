import Dish from "./Dish";

const specialDishes = [{
  imageUrl: '/img/food/pasta.jpg',
  dishName: 'Twirls of Tuscany',
  description: 'Delve into the rustic flavors of Italy with this hearty pasta dish adorned with ribbons of al dente linguine, tossed in a robust tomato and herb sauce. Each forkful is intertwined with the fresh aromas of basil, a sprinkle of aged Parmesan, and the garden\'s crunchiest vegetables. It\'s a classic comfort, reimagined with a gourmet twist.'
},
{
  imageUrl: '/img/food/chickensteak.jpg',
  dishName: 'Herb-Infused Hen',
  description: 'Succulent chicken breast, perfectly seared to golden-brown excellence, lies atop a bed of tender-crisp penne pasta. This dish is generously glazed with a light garlic herb sauce, allowing the flavors of fresh parsley and thyme to take center stage, complemented by a colorful medley of seasonal vegetables.'
},
{
  imageUrl: '/img/food/steak.jpg',
  dishName: 'Garlic Gilded Gauntlet',
  description: 'A majestic feast for the senses, this dish features a sumptuous cut of prime steak, chargrilled to your preference, accompanied by roasted garlic potatoes. Crowned with a dollop of rich garlic-herb butter, it slowly melts over the warm, juicy fibers of the meat, creating an irresistible fusion of flavors.'
},
]

export default function Specials() {
    return (
      <div id="menu" className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Specials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialDishes.map((dish) => (<Dish key={dish.imageUrl} imageUrl={dish.imageUrl} dishName={dish.dishName} description={dish.description}/>))}
        </div>
      </div>
    );
  }
  