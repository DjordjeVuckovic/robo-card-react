export interface Post {
    id?: string;
    title: string;
    description: string;
    img: string;
}
export type PostMode = 'view' | 'create' | 'update' | 'delete';