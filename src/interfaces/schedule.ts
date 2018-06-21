import { Recipe } from './recipe'

export interface Schedule {
    id: number
    date: string
    recipes: Recipe[]
}
