import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: 'l3usaxnn', // Replace with your Sanity project ID
    dataset: 'production', // Or your specific dataset name
    apiVersion: '2022-03-07', // Use a recent API version
    useCdn: true, // Set to `false` if you want to bypass the CDN
});
