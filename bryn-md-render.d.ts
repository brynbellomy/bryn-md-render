
declare module 'bryn-md-render'
{
    export interface IRenderer {
        render(mdText:string): string;
    }

    export function getRenderer (): IRenderer;
}