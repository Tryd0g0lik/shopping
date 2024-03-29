import { useContext } from 'react';
import { OurContext } from '@site/catalog-searcher/OurProvider';
import { SearchContext } from '@type';
/**
 * Вызывая этот наш hook , получаем 'val = { ...text, fn: searcher } ' из 'SearchProviderFC'
 * @returns 
 */
export function useSearch(): SearchContext {

  return useContext(OurContext) as SearchContext;

}

