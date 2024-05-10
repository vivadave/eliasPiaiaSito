import type { LayoutServerLoad } from './$types';
import { initializeFirebase, getCollection } from '../helper/firebase';
import '@fortawesome/fontawesome-free/css/all.min.css'
import dotenv from 'dotenv';

// export const prerender = true;
// export const trailingSlash = 'always'

export const load: LayoutServerLoad = async () => {
  dotenv.config();

  console.log(process.env.FIREBASE_API_KEY);

  initializeFirebase(process.env.FIREBASE_API_KEY || '');
  const translations = await getCollection('translation');

  return {
    translations,
    mapsApiKey: process.env.MAPS_API_KEY
  };
};
