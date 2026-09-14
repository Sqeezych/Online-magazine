import type { Product } from '../../types';

export interface ProductCardType {
    className?: string;
    product: Pick<Product, 'id' | 'name' | 'imageUrl' | 'price'>;
    onBuy?: () => void;
}
