document.addEventListener('DOMContentLoaded', function () {
    // Hero Section Animation
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image-container img');

    heroContent.style.opacity = 0;
    heroContent.style.transform = 'translateX(-50px)';
    heroImage.style.opacity = 0;
    heroImage.style.transform = 'translateX(50px)';

    setTimeout(() => {
        heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heroImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        heroContent.style.opacity = 1;
        heroContent.style.transform = 'translateX(0)';
        heroImage.style.opacity = 1;
        heroImage.style.transform = 'translateX(0)';
    }, 300);

    // About Section Animation
    const aboutSection = document.querySelector('.about-section');
    const aboutContent = document.querySelector('.about-content');

    aboutSection.style.opacity = 0;
    aboutSection.style.transform = 'translateY(50px)';

    function handleScroll() {
        const aboutSectionPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (aboutSectionPosition < screenPosition) {
            aboutSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            aboutSection.style.opacity = 1;
            aboutSection.style.transform = 'translateY(0)';
            window.removeEventListener('scroll', handleScroll);
        }
    }

    window.addEventListener('scroll', handleScroll);

    // Locations Section Animation
    const locationsSection = document.querySelector('.locations-container');
    const locationCards = document.querySelectorAll('.card');

    locationsSection.style.opacity = 0;
    locationsSection.style.transform = 'translateY(50px)';

    function handleLocationsScroll() {
        const locationsSectionPosition = locationsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (locationsSectionPosition < screenPosition) {
            locationsSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            locationsSection.style.opacity = 1;
            locationsSection.style.transform = 'translateY(0)';

            locationCards.forEach((card, index) => {
                card.style.opacity = 0;
                card.style.transform = 'translateY(50px)';
                setTimeout(() => {
                    card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    card.style.opacity = 1;
                    card.style.transform = 'translateY(0)';
                }, 200 * index);
            });

            window.removeEventListener('scroll', handleLocationsScroll);
        }
    }

    window.addEventListener('scroll', handleLocationsScroll);

    // Partnership Section Animation
    const partnershipSection = document.querySelector('.partnership-section');
    const partnershipColumns = document.querySelectorAll('.two-column-layout > div');

    partnershipSection.style.opacity = 0;
    partnershipSection.style.transform = 'translateY(50px)';

    function handlePartnershipScroll() {
        const partnershipSectionPosition = partnershipSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (partnershipSectionPosition < screenPosition) {
            partnershipSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            partnershipSection.style.opacity = 1;
            partnershipSection.style.transform = 'translateY(0)';

            partnershipColumns.forEach((column, index) => {
                column.style.opacity = 0;
                column.style.transform = 'translateX(' + (index === 0 ? '-50px' : '50px') + ')';
                setTimeout(() => {
                    column.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    column.style.opacity = 1;
                    column.style.transform = 'translateX(0)';
                }, 200 * index);
            });

            window.removeEventListener('scroll', handlePartnershipScroll);
        }
    }

    window.addEventListener('scroll', handlePartnershipScroll);

    // Price Section Animation (Service Cards)
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach((card, index) => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
    });

    function handleServiceCardsScroll() {
        const priceSection = document.querySelector('.price-section');
        const priceSectionPosition = priceSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (priceSectionPosition < screenPosition) {
            serviceCards.forEach((card, index) => {
                setTimeout(() => {
                    card.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                    card.style.opacity = 1;
                    card.style.transform = 'translateY(0)';
                }, 200 * index);
            });

            window.removeEventListener('scroll', handleServiceCardsScroll);
        }
    }

    window.addEventListener('scroll', handleServiceCardsScroll);

    // Promo Section Animation
    const promoTitle = document.querySelector('.promo-title');
    const promoDescription = document.querySelector('.promo-description');

    promoTitle.style.opacity = 0;
    promoTitle.style.transform = 'translateX(50px)';
    promoDescription.style.opacity = 0;
    promoDescription.style.transform = 'translateX(50px)';

    function handlePromoScroll() {
        const priceSection = document.querySelector('.price-section');
        const priceSectionPosition = priceSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (priceSectionPosition < screenPosition) {
            promoTitle.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            promoTitle.style.opacity = 1;
            promoTitle.style.transform = 'translateX(0)'; 

            setTimeout(() => {
                promoDescription.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                promoDescription.style.opacity = 1;
                promoDescription.style.transform = 'translateX(0)';
            }, 200);

            window.removeEventListener('scroll', handlePromoScroll);
        }
    }

    window.addEventListener('scroll', handlePromoScroll);

    // Testimonials Section Animation
    const testimonialsSection = document.querySelector('.testimonials-container');
    const testimonialsContent = document.querySelector('.testimonials-content');

    testimonialsSection.style.opacity = 0;
    testimonialsSection.style.transform = 'translateY(50px)';

    function handleTestimonialsScroll() {
        const testimonialsSectionPosition = testimonialsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (testimonialsSectionPosition < screenPosition) {
            testimonialsSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            testimonialsSection.style.opacity = 1;
            testimonialsSection.style.transform = 'translateY(0)';
            testimonialsContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            testimonialsContent.style.opacity = 1;
            testimonialsContent.style.transform = 'translateY(0)';
            window.removeEventListener('scroll', handleTestimonialsScroll);
        }
    }

    window.addEventListener('scroll', handleTestimonialsScroll);
});