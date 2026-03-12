import { Variants } from 'framer-motion';

export const cardVariants: Variants = {
  rest: {
    scale: 1,
    y: 0,
  },
  hover: {
    scale: 1.02,
    y: -6,
    transition: {
      type: 'spring',
      stiffness: 220,
      damping: 18,
      staggerChildren: 0.04,
    },
  },
};

export const glowVariants: Variants = {
  rest: {
    opacity: 0,
    scale: 0.7,
  },
  hover: {
    opacity: 1,
    scale: 1.3,
    transition: { duration: 0.45 },
  },
};

export const descriptionVariants: Variants = {
  rest: {
    opacity: 0,
    x: 20,
  },
  hover: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.35 },
  },
};

export const hexLayerVariants = (offset: number): Variants => ({
  rest: { y: 0 },
  hover: {
    y: -offset,
    transition: { duration: 0.35 },
  },
});
