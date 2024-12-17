import React from 'react';

interface ProductCardProps {
  imageUrl: string;
  delay: number;
  title: string;
  description: string;
  company: string;
  model: string;
  price: string;
}

export function ProductCard({ imageUrl, delay, title, description, company, model, price }: ProductCardProps) {
  return (
    <div
      className="product-card" // Apply custom CSS class
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-easing="ease-out"
      data-aos-delay={delay}
      data-aos-once="true"
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt="Product"
        className="product-card-img" // Apply custom CSS class
      />

      {/* Hover Overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-70 opacity-0 hover:opacity-100 transition-opacity duration-500 px-4 py-6">
        {/* Title */}
        <h3 className="text-white text-3xl font-bold text-center mb-2">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white text-hxl text-center opacity-90 mb-4">
          {description}
        </p>

        {/* Details Section (Left-Aligned) */}
        <div className="text-white text-md px-6 text-left">
          <p className="mb-1">Company: <span className="text-white-300">{company}</span></p>
          <p className="mb-1">Model: <span className="text-white-300">{model}</span></p>
          <p className="mb-1">Price: <span className="text-white-300">{price}</span></p>
        </div>
      </div>
    </div>
  );
}