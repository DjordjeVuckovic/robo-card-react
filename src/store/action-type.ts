export interface ActionType<T> {
    type: string;
    payload: T;
}
export type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';