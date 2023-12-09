import Dish from "./Dish";

const specialDishes = [{
  imageUrl: '/img/food/pasta.jpg',
  dishName: 'Pasta',
  description: 'Pasta dish'
},
{
  imageUrl: '/img/food/chickensteak.jpg',
  dishName: 'Chicken',
  description: 'Chicken dish'
},
{
  imageUrl: '/img/food/steak.jpg',
  dishName: 'Steak',
  description: 'Steak dish'
},
]

export default function Specials() {
    return (
      <div className="container mx-auto px-6 py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Specials</h2>
        {/* Placeholder for specials cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Repeat this for each special */}
          {specialDishes.map((dish) => (<Dish imageUrl={dish.imageUrl} dishName={dish.dishName} description={dish.description}/>))}
        </div>
      </div>
    );
  }
  