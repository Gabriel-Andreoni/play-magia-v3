import { MetadataRoute } from 'next'
import { manifest } from './lib/manifest';
import { TProduto } from './types/TProduto';
 
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://playgroundsmagia.com.br';

  const productsData = await manifest.from("produtos").find();
  const products = (productsData?.data as TProduto[] || []);

  const productUrls = products.map(product => ({
    url: `${baseUrl}/produto/${product.id}`,
    lastModified: new Date(),
  }));
 
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/playgrounds`,
      lastModified: new Date(),
    },
    {
        url: `${baseUrl}/orcamento`,
        lastModified: new Date(),
    },
    ...productUrls,
  ]
}