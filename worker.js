import { createNextWorker } from 'next-on-workers';

export default {
  fetch: createNextWorker({ distDir: './.next' }),
};