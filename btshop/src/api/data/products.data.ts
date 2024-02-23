import { IProduct } from "../product/IProduct";
import { brands } from "./brands.data";

export const products: IProduct[] = [
    {
        articul: 'wbnkef1',
        name: 'Nike Air Force 1 \'07',
        brand: brands[0],
        description: "The radiance lives on with the b-ball original. Crossing hardwood comfort with off-court flair, it puts a fresh spin on what you know best: '80s-inspired construction, bold details and nothin'-but-net style.",
        price: 35,
        image: ['air-force-1.png', 'air-force-2.png', 'air-force-3.png', 'air-force-4.png'],
        sales: 0
    },
    {
        articul: 'wnkebl1',
        name: 'Nike Air Max Plus III',
        brand: brands[0],
        description: "The Nike Air Max Plus III combines ultra-comfortable Tuned Air Technology with an energetic silhouette made famous by its predecessors. The III updates the look with TPU details fused to the upper while paying homage to the iconic colour fade.",
        price: 30,
        image: ['air-max-plus-iii-shoes-1.png', 'air-max-plus-iii-shoes-2.png', 'air-max-plus-iii-shoes-3.png', 'air-max-plus-iii-shoes-4.png'],
        sales: 0
    },
    {
        articul: 'yezbst7',
        name: 'Yeezy Boost 700',
        brand: brands[1],
        description: "The updated model of the Yeezy 700 V2 sneakers, which was part of the lineup developed with the participation of the famous musician Kanye West. The upper part is made of a combination of first -class suede, skin, nylon mesh and nubuk.",
        price: 300,
        image: ['adidas-yeasy-black.png'],
        sales: 0
    },
    {
        articul: 'naf1mby',
        name: 'Nike Air Force 1 Mid By You',
        brand: brands[0],
        description: "Let your design shine in satin, keep it classic in canvas or get luxe with leather. No matter what you choose, these AF-1s are all about you. 12 colour choices and an additional Gum option for the sole mean your design is destined to be one of a kind, just like you.",
        price: 130,
        image: ['custom-nike-air-force-1-mid-by-you-shoes1.png', 'custom-nike-air-force-1-mid-by-you-shoes2.png', 'custom-nike-air-force-1-mid-by-you-shoes3.png', 'custom-nike-air-force-1-mid-by-you-shoes4.png'],
        sales: 1
    }
]