export interface SystemEntityInterface {
    _id: string,
    name: string,
    path: string[],
    type: {
        id: string,
        type: string
    },
    createdAt: Date,
}