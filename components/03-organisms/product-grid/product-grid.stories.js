import productGrid from './_product-grid.twig';

import productGridData from './product-grid.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Organisms/Product Grid' };

export const productGrids = () => productGrid(productGridData);
