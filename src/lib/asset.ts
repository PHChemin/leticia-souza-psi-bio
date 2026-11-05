/** Caminho de um arquivo de `public/` respeitando o `base` do Vite (funciona em domínio próprio ou em /repo/). */
export const asset = (path: string) => `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`
