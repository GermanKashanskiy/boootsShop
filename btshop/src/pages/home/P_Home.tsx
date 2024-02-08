import React from 'react';
import Header from '../../components/header/Header';
import '../../styles/style.css';
import ArrivalsCatalog from '../../components/page-home/ArrivalsCatalog';
import TopBrands from '../../components/page-home/TopBrands';
import Bestseller from '../../components/page-home/Bestseller';
import FeaturedCatalog from '../../components/page-home/FeaturedCatalog';
import AdvertSection from '../../components/page-home/AdvertSection';
import Footer from '../../components/footer/Footer';

function P_Home() {
    return (
        <div className="p-home">
            {/* Header */}
            <Header />

            {/* Section with shop logo & store photo */}
            <section className='intro-section-container not-coppy'>
                <div className="intro-section_store-name">
                    BOOOTSHOP
                </div>

                <div className="intro-section_shop-now">
                    <div className="shop-now_text-container">
                        Unleash your inner fashionista with our curated collection of the hottest shoe trends.
                    </div>
                    <a href="">SHOP NOW</a>
                </div>
            </section>

            {/* New Arrival section */}
            <section className='narrivals-section'>
                <ArrivalsCatalog />
            </section>

            {/* Top brands section */}
            <section className='brands-section'>
                <TopBrands />
            </section>

            {/* Bestseller section */}
            <section className='bestseller-section'>
                <Bestseller />
            </section>

            {/* Featured section */}
            <section className='featured-section'>
                <FeaturedCatalog />
            </section>

            {/* Advert section */}
            <section className='advert-section not-coppy'>
                <AdvertSection />
            </section>

            {/* Footer */}
            <footer>
                <Footer />
            </footer>
        </div >
    );
}

export default P_Home;