import React, { Children, JSX } from 'react';
import { Position } from '@type';
import AncorFC from '@site/Ancor.tsx';

/**
 * file `src\frontend\src\components\pages\Catalog\Positions\index.tsx`
 *
 * `import { PositionFC } from '../Positions/index.tsx';`
 *
 * @param `title`: `string`. It is a name position
 * @param `price?`: `string` Default values is '0'. This is the main price.
 * @param `children`: `React.JSX.Element`
 * @returns ```
  <div className="col-4">
      <div className="card catalog-item-card">
        <div className='catalog-card-previw'>
          {children}
        </div>
        <div className="card-body">
          <p className="card-text">{title}</p>
          <p className="card-text">{price} руб.</p>
          <AncorFC path='/products/1.html' classes='btn btn-outline-primary' context='Заказать' />
        </div>
      </div>
    </div>
  ```
 */
export function PositionFC({ title, category = undefined, price = 0, children }: Position): JSX.Element {
  const result = (category !== undefined)
    ? (
      <div className="col-4" data-category={category}>
        <div className="card catalog-item-card">
          <div className='catalog-card-previw'>
            {children}
          </div>
          <div className="card-body">
            <p className="card-text">{title}</p>
            <p className="card-text">{price} руб.</p>
            <AncorFC path='/products/1.html' classes='btn btn-outline-primary' context='Заказать' />
          </div>
        </div>
      </div>
    )
    : (
      <div className="col-4">
        <div className="card catalog-item-card">
          <div className='catalog-card-previw'>
            {children}
          </div>
          <div className="card-body">
            <p className="card-text">{title}</p>
            <p className="card-text">{price} руб.</p>
            <AncorFC path='/products/1.html' classes='btn btn-outline-primary' context='Заказать' />
          </div>
        </div>
      </div>
    );
  return result;
}
