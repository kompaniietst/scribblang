export interface SystemEntityInterface {
    name: string,
    path: string[],
    type: {
        id: string,
        type: SystemEntityInterface
    },
    createdAt: Date,
}