import React, { useState } from 'react';
import './Options.css';

const Options = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedType, setSelectedType] = useState('all'); // 'all', 'veg', 'non-veg'

  // Sample data for dishes
  const dishes = [
    { id: 1, name: 'Spicy Noodles', category: 'noodles', type: 'veg', imgSrc: 'rest_pics/noodles1.jpeg' },
    { id: 2, name: 'Chicken Noodles', category: 'noodles', type: 'non-veg', imgSrc: 'rest_pics/noodles2.jpeg' },
    { id: 3, name: 'Garlic Noodles', category: 'noodles', type: 'veg', imgSrc: 'rest_pics/noodles3.jpeg' },
    
    { id: 4, name: 'Fried Rice', category: 'rice', type: 'veg', imgSrc: 'rest_pics/rice1.jpeg' },
    { id: 5, name: 'Chicken Fried Rice', category: 'rice', type: 'non-veg', imgSrc: 'rest_pics/rice2.jpeg' },
    { id: 6, name: 'Veg Biryani', category: 'rice', type: 'veg', imgSrc: 'rest_pics/rice3.jpeg' },
    
    { id: 7, name: 'Pasta Alfredo', category: 'pasta', type: 'veg', imgSrc: 'rest_pics/pasta1.jpeg' },
    { id: 8, name: 'Chicken Bolognese', category: 'pasta', type: 'non-veg', imgSrc: 'rest_pics/pasta2.jpeg' },
    { id: 9, name: 'Penne Arrabiata', category: 'pasta', type: 'veg', imgSrc: 'rest_pics/pasta3.jpeg' },

    { id: 10, name: 'Margherita Pizza', category: 'pizza', type: 'veg', imgSrc: 'rest_pics/pizza1.jpeg' },
    { id: 11, name: 'Pepperoni Pizza', category: 'pizza', type: 'non-veg', imgSrc: 'rest_pics/pizza2.jpeg' },
    { id: 12, name: 'BBQ Chicken Pizza', category: 'pizza', type: 'non-veg', imgSrc: 'rest_pics/pizza3.jpeg' },
    
    { id: 13, name: 'Caesar Salad', category: 'salads', type: 'non-veg', imgSrc: 'rest_pics/salad1.jpeg' },
    { id: 14, name: 'Greek Salad', category: 'salads', type: 'veg', imgSrc: 'rest_pics/salad2.jpeg' },
    { id: 15, name: 'Garden Salad', category: 'salads', type: 'veg', imgSrc: 'rest_pics/salad3.jpeg' },
    
    { id: 16, name: 'Chocolate Cake', category: 'desserts', type: 'veg', imgSrc: 'rest_pics/dessert1.jpeg' },
    { id: 17, name: 'Ice Cream Sundae', category: 'desserts', type: 'veg', imgSrc: 'rest_pics/dessert2.jpeg' },
    { id: 18, name: 'Cheesecake', category: 'desserts', type: 'veg', imgSrc: 'rest_pics/dessert3.jpeg' },
  ];

  // Function to filter dishes based on category and type
  const filteredDishes = dishes.filter(dish => 
    (selectedCategory === 'all' || dish.category === selectedCategory) &&
    (selectedType === 'all' || dish.type === selectedType)
  );

  return (
    <div id="entire">
      <div className="menu-options">
        {/* Category options with images */}
        <button onClick={() => setSelectedCategory('all')}>
          <img src="rest_pics/all-icon.jpeg" alt="All" className="category-icon" />
          All
        </button>
        <button onClick={() => setSelectedCategory('noodles')}>
          <img src="rest_pics/noodles-icon.jpeg" alt="Noodles" className="category-icon" />
          Noodles
        </button>
        <button onClick={() => setSelectedCategory('rice')}>
          <img src="rest_pics/rice-icon.jpeg" alt="Rice" className="category-icon" />
          Rice
        </button>
        <button onClick={() => setSelectedCategory('pasta')}>
          <img src="rest_pics/pasta-icon.jpeg" alt="Pasta" className="category-icon" />
          Pasta
        </button>
        <button onClick={() => setSelectedCategory('pizza')}>
          <img src="rest_pics/pizza-icon.jpeg" alt="Pizza" className="category-icon" />
          Pizza
        </button>
        <button onClick={() => setSelectedCategory('salads')}>
          <img src="rest_pics/salad-icon.jpeg" alt="Salads" className="category-icon" />
          Salads
        </button>
        <button onClick={() => setSelectedCategory('desserts')}>
          <img src="rest_pics/dessert-icon.jpg" alt="Desserts" className="category-icon" />
          Desserts
        </button>
      </div>

      <div className="type-options">
        {/* Veg/Non-Veg filter */}
        <button onClick={() => setSelectedType('all')}>All</button>
        <button onClick={() => setSelectedType('veg')}>Veg</button>
        <button onClick={() => setSelectedType('non-veg')}>Non-Veg</button>
      </div>

      <div className="dishes-container">
        {/* Display filtered dishes */}
        {filteredDishes.map(dish => (
          <div key={dish.id} className="dish-item">
            <img src={dish.imgSrc} alt={dish.name} />
            <p>{dish.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
