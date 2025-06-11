// frontend/src/lib/sanity.ts
import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: 'ebgbeoy7', // tu Project ID de Sanity
  dataset: 'production',
  apiVersion: '2023-05-09',
  useCdn: true,
});