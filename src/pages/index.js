import * as React from 'react';

import AttributeGrid from '../components/AttributeGrid';
import Container from '../components/Container';
import Hero from '../components/Hero';
import Layout from '../components/Layout/Layout';
import ProductCollectionGrid from '../components/ProductCollectionGrid';
import ProductCardGrid from '../components/ProductCardGrid';
import Title from '../components/Title';

import { generateMockProductData } from '../helpers/mock';
import * as styles from './index.module.css';
import { navigate } from 'gatsby';
import { toOptimizedImage } from '../helpers/general';

const IndexPage = () => {
  const newArrivals = generateMockProductData(3, 'shirt');

  const goToShop = () => {
    navigate('/shop');
  };

  return (
    <Layout disablePaddingBottom>
      {/* Hero Section */}
      <Hero
        maxWidth={'500px'}
        image={'/banner1.png'}
        title={'Stylish & Comfortable Apparel'}
        subtitle={'New Trends for 2025'}
        ctaText={'Shop Now'}
        ctaAction={goToShop}
      />

      {/* Collection Section */}
      <div className={styles.collectionContainer}>
        <Container size={'large'}>
          <Title name={'Our Collections'} />
          <ProductCollectionGrid categories={['Men', 'Women']} />
        </Container>
      </div>

      {/* New Arrivals */}
      <div className={styles.newArrivalsContainer}>
        <Container>
          <Title name={'New Arrivals'} link={'/shop'} textLink={'view all'} />
          <ProductCardGrid
            spacing={true}
            showSlider
            height={480}
            columns={3}
            data={newArrivals}
          />
        </Container>
      </div>

      {/* Discount Promotion */}
      <div className={styles.promotionContainer}>
        <Hero 
          image={toOptimizedImage('/banner2.png')} 
          title={`-50% Off \n Winter Collection`} 
        />
        <div className={styles.linkContainers}>
          <button onClick={goToShop} className={styles.promotionButton}>Shop Now</button>
        </div>
      </div>

      {/* Sustainability/Brand Story */}
      <div className={styles.sustainableContainer}>
        <Hero
          image={toOptimizedImage('/banner3.png')}
          title={'Sustainable & Ethical Fashion'}
          subtitle={
            'At SAM Wear’s, we believe in style with responsibility. Our products are made with eco-friendly materials, ethical labor practices, and sustainable packaging.'
          }
          ctaText={'Learn More'}
          maxWidth={'660px'}
          ctaStyle={styles.ctaCustomButton}
        />
      </div>

      <AttributeGrid />
    </Layout>
  );
};

export default IndexPage;
