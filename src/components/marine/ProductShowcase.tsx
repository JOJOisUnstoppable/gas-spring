import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCard {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaHref: string;
}

interface ProductShowcaseProps {
  title: string;
  products: ProductCard[];
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ title, products }) => {
  return (
    <section id="products" className="product-showcase">
      <div className="container">
        <h2>{title}</h2>
        <div className="product-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <Image 
                src={product.imageSrc} 
                alt={product.imageAlt} 
                width={400} 
                height={200}
              />
              <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <Link href={product.ctaHref} className="btn-outline">
                  {product.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;