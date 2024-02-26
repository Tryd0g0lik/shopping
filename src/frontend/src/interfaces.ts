// src\frontend\src\interfaces.ts

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * `import { Pages} from '@type';`
 *
 * @returns ```txt
 * {
 * 'Home' = '/',
  'Loaded' = '/loaded',
  'Contacts' = '/contacts',
  'Catalog' = '/catalog',
  'Cart' = '/cart',
  'About' = '/about',
  'Undefin' = '/404'
 }
  ```
 */
export enum Pages {
  'Home' = '/',
  'Loaded' = '/loaded',
  'Contacts' = '/contacts',
  'Catalog' = '/catalog',
  'Cart' = '/cart',
  'About' = '/about',
  'Undefin' = '/404'
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * `import { PTitle } from '@type';`
 *
  */
export enum PTitle {
  '/' = 'Главная',
  '/catalog' = 'Каталог',
  '/about' = 'О магазине',
  '/contacts' = 'Контакты'
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * import { Child } from '@type';
 */
export interface Child {
  children?: JSX.Element
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * `import { MultiProps } from '@type'`;
 *
 * Extends the interface `Child`
 *
 * @prop `classes?`: `string` It is single a class name or multiple. Also is possible and without him.
 * @prop `handler?`: `() => void` Here is a handler for events.
 * @prop `children?`: `() => React.JSX.Element` Is a child element JSX.
 */
export interface MultiProps extends Child {
  classes?: string
  handler?: () => void
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * @prop `id`: `string`.
 * @prop `title`:`string`.
 */
export interface Category {
  id: number
  title: string
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * `import { Categories } from '@type';`
 *
 * @prop `id`: `string`.
 * @prop `title`:`string`.
 * @returns `[{id: 0, title: "Category name" }, ]`
 */
export interface Categories {
  categories: Category[]
}

/**
 *
 * file: `src\frontend\src\interfaces.ts`
 *
 * `import { Position } from '@type';`
 *
 * @prop `id?`: `number`
 * @prop `category?`: `number`
 * @prop `title?`: `string`
 * @prop `images?`: `string[]`
 * @prop `sku?`: `string`
 * @prop `manufacturer?`: `string`
 * @prop `color?`: `string`
 * @prop `material?`: `string`
 * @prop `reason?`: `string`
 * @prop `season?`: `string`
 * @prop `heelSize?`: `string`
 * @prop `price?`: `number`
 * @prop `oldPrice?`: `number`
 * @prop `sizes?`: `[Record<string, boolean>]`
 * @prop `children?`: React.JSX.Elements
 */
export interface Position extends Child {
  id?: number
  category?: number
  title?: string
  images?: string[]
  sku?: string
  manufacturer?: string
  color?: string
  material?: string
  reason?: string
  season?: string
  heelSize?: string
  price?: number
  oldPrice?: number
  sizes?: [Record<string, boolean>]
}

/**
 * `src\frontend\src\interfaces.ts`
 *
 * `import { PromiseArr } from '@type';`
 *
 * @returns `{
 * id: number
 * category: number
 * title: string
 * price: number
 * images: string[]
 * }`
 */
export interface PromiseOne {
  id: number
  category: number
  title: string
  price: number
  images: string[]
}

/**
 * `src\frontend\src\interfaces.ts`
 *
 * `import { PromiseArr } from '@type';`
 *
 * @returns `{promise: PromiseOne[]}`
 */
export interface PromiseArr {
  promise: PromiseOne[]
}

/**
 * file: `src\frontend\src\interfaces.ts`
 *
 * import { Td } from '@type';
 *
 * @prop `children?: JSX.Element`
 * ```
 * function COmponent(): JSX.Element {
 *  return(
 *    <>
 *    <Fragment>
 *      { children }
 *    </Fragment>
 *    </>
 *  );
 * }
 *
 * ```
 * @prop `context: `string`  It is context for display on the page `<html><tr><th>Your contex</th></tr></html>`.
 * @prop `cspan` : `string` It's property css 'collspan'.
 */
export interface TableRow extends MultiProps {
  scop?: string
  context: string
}

export interface Heads {
  headers: string[][]
}

/**
 * `src\frontend\src\interfaces.ts`
 *
 * @returns `type Str = string;`
 */
export type Str = string;

/**
 * `src\frontend\src\interfaces.ts`
 *
 * @returns `type Val = string | number`
 */
export type Val = string | number;

export type HandlerPositionVal = Position[] | undefined;
/**
 * `src\frontend\src\interfaces.ts`
 *
 * `import { Request } from '@type';`
 *
 * ```
 * ind?: number
 * offset?: number
 * q?: string
  ```
 */
export interface Request {
  ind?: number
  offset?: number
  q?: string
  'top-sales'?: boolean
  categories?: boolean
}

export interface ReadOnlyFunction {
  readonly: () => void
}
