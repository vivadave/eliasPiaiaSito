import type { LayoutServerLoad } from './$types';
import { initializeFirebase, getCollection } from '../helper/firebase';
import '@fortawesome/fontawesome-free/css/all.min.css'

// export const prerender = true;
// export const trailingSlash = 'always'

export const load: LayoutServerLoad = async () => {

  initializeFirebase();
  const translations = await getCollection('translation');

  return {
    translations
  };
};
