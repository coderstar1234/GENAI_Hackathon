import React, { useState } from 'react';
import Chatbot from './Chatbot'; // Assuming Chatbot component is in Chatbot.js
import './MainSection.css'; // Import CSS file


const MainSection = () => {
  // State to track whether the chatbot is open or closed
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Function to handle the button click action
  const handleButtonClick = () => {
    // Toggle the state to open or close the chatbot
    setIsChatbotOpen(!isChatbotOpen);
  };

  return (
    <div className="main-section">
      <h2>Welcome to intel-ECom</h2>
      
      <div className="clothes-section">
        <h3>Modern Clothes for Males</h3>
        <div className="clothes-images">
          {/* Display images of modern clothes for males */}
          <div className="clothes-images">
            {/* Display images */}
            <img src="https://i.pinimg.com/736x/c9/2f/0c/c92f0c2520d311bc24924b8cd2786142--mens-clothing-fame.jpg" alt="Male Clothes 1" style={{ width: '200px', height: '200px' }} />
            <img src="https://th.bing.com/th/id/OIP.eru11VESGEiatdQKB41QsgHaLG?rs=1&pid=ImgDetMain" alt="Male Clothes 2" style={{ width: '200px', height: '200px' }} />
          </div>
          {/* Add more images as needed */}
        </div>
        <p style={{ fontSize: 'medium', fontFamily: 'Arial, sans-serif', fontStyle: 'italic', textAlign: 'left', color: '#333' }}>In the realm of modern fashion, Intel-ECom brings forth an exquisite collection catering to contemporary gentlemen. Discover a plethora of stylish ensembles ranging from sleek suits to casual streetwear, each curated to elevate your wardrobe effortlessly. Embrace elegance and confidence with our handpicked selection of male attire, designed to mirror the essence of modern masculinity.</p>
      </div>
      
      <div className="clothes-section">
        <h3>Modern Clothes for Females</h3>
        <div className="clothes-images">
          {/* Display images of modern clothes for females */}
          <img src="https://ae01.alicdn.com/kf/HTB1x0iocL9TBuNjy0Fcq6zeiFXaT/Formal-Professional-Business-Work-Wear-Blazers-Suits-With-Jackets-Coat-And-Dress-Slim-Fashion-Female-Office.jpg" alt="Female Clothes 1" style={{ width: '200px', height: '200px' }} />
          <img src="https://www.bnsds.com/wp-content/uploads/2020/06/CN451799-2-683x1024.jpg" alt="Female Clothes 2" style={{ width: '200px', height: '200px' }} />
          {/* Add more images as needed */}
        </div>
        <p style={{ fontSize: 'medium', fontFamily: 'Arial, sans-serif', fontStyle: 'italic', textAlign: 'left', color: '#333' }}>For the fashion-forward woman, explore our array of chic and trendy garments tailored to accentuate every curve and silhouette. From timeless classics to avant-garde designs, our female collection offers versatility and flair, ensuring you make a statement with every ensemble.</p>
      </div>
      
      <div className="accessories-section">
        <h3>Accessories</h3>
        <div className="accessories-images">
          {/* Display images of accessories */}
          <img src="https://nextluxury.com/wp-content/uploads/Top-15-Fashion-Accessories-For-Men-1.jpg" alt="Accessory 1" />
          <img src="https://img.freepik.com/free-photo/male-clothes-accessories_144962-3321.jpg?size=626&ext=jpg" alt="Accessory 2" />
          {/* Add more images as needed */}
        </div>
        <p style={{ fontSize: 'medium', fontFamily: 'Arial, sans-serif', fontStyle: 'italic', textAlign: 'left', color: '#333' }}>Accessorize your look with our diverse range of accessories, adding the perfect finishing touch to your outfit. Whether it's a sleek watch, a statement necklace, or a stylish handbag, elevate your style quotient with our carefully curated accessory collection.</p>
      </div>

      {/* Big button at the bottom */}
      <button className="big-button" onClick={handleButtonClick}>Open Chatbot</button>

      {/* Conditionally render the Chatbot component based on state */}
      {isChatbotOpen && <Chatbot />}
    </div>
  );
}

export default MainSection;
