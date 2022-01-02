export interface SystemEntityInterface {
    _id: string,
    name: string,
    path: string[],
    type: string,
    createdAt: Date,
    children?: string[]
}