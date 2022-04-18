import productCard from './_product-card.twig';

import productCardData from './product-card.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Product Cards' };

export const productCardStandard = () => productCard(productCardData);
