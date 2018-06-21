import { Ingredient } from './ingredient'

export interface Listing {
    id: number
    name: string
    ingredients: Ingredient[]
}
