import herobanner from './_hero-banner.twig';

import heroBannerData from './hero-banner.yml';

/**
 * Storybook Definition.
 */
export default { title: 'Molecules/Hero Banner' };

export const heroBanner = () => herobanner(heroBannerData);
