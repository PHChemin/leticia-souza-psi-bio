# Letícia Souza · Bio

Bio de presença da psicóloga clínica **Letícia Souza**: símbolo, nome, uma frase e três links (WhatsApp, Instagram e Currículo Lattes).

- **Endereço:** <https://links.psicologaleticiasouza.com.br> (o site principal dela, `psicologaleticiasouza.com.br`, é outro projeto)
- **Stack:** Vite + React 19 + TypeScript + Tailwind CSS v4, publicado no GitHub Pages
- **Identidade:** lavanda, oliva, terracota, baunilha e ameixa; Lora e Poppins (fontes locais via `@fontsource`, sem Google Fonts)
- Projeto criado a partir do template `react-landpage-template`; o banco de componentes do template continua em `src/components/`, mas a página usa só `src/components/site/`.

## Rodar

```bash
npm install
npm run dev       # desenvolvimento (http://localhost:5173)
npm run build     # gera dist/
npm run preview   # testa o build localmente
```

## Onde mexer

| O quê | Onde |
| --- | --- |
| Textos e estrutura | `src/App.tsx` |
| Links de contato (WhatsApp, Instagram, Lattes) | `src/lib/links.ts` |
| Cores, fontes e animações | `src/styles/main.css` |
| Título, descrição e preview de compartilhamento | `index.html` |
| Imagem de preview (1200×630) | `public/og-image.png` |
| Símbolo e peças da animação | `public/logo-mark.png`, `public/grow/` |
| Direção de arte e feedback da cliente | `docs/ART_DIRECTION.md` |

Caminhos de `public/` no código passam por `asset()` (`src/lib/asset.ts`), que respeita o `base` do Vite.

Contato só via links (`wa.me`, `mailto:`, redes), porque o Pages é estático.

## Deploy e domínio

1. **Settings → Pages → Source → GitHub Actions**.
2. Push na `main` roda `.github/workflows/deploy.yml` (`npm ci` → `npm run build` → publica `dist/`).
3. O domínio fica em `public/CNAME` (`links.psicologaleticiasouza.com.br`), que o build copia para `dist/`.
4. No DNS de `psicologaleticiasouza.com.br`, crie um registro **CNAME**: nome `links`, valor `phchemin.github.io`.
5. Em **Settings → Pages → Custom domain**, confirme `links.psicologaleticiasouza.com.br` e marque **Enforce HTTPS** quando o certificado sair.

Detalhes gerais em [`docs/DEPLOY.md`](docs/DEPLOY.md).

## Material local (não vai para o git)

`identidade/` guarda os arquivos de identidade visual enviados pela cliente (paleta, SVG da marca). Está no `.gitignore` e fica só na máquina. Também não versione `.env`, `.originkit/`, `node_modules/` e `dist/`.

## Pendências

- E-mail e link do artigo (hoje fora da página).

## Banco de componentes (herdado do template)

Código já versionado no repo (sem fetch no dia a dia do cliente):

| Origem | Pasta | Política |
| --- | --- | --- |
| **Originkit** | `src/components/originkit/` | **Salvar no template** (limite free ~3 fetches/dia) |
| **Magic UI / shadcn** | `src/components/ui/` | Starter set no template; no projeto: `npx shadcn add @magicui/<nome>` |
| **Handmade** | `src/components/handmade/` | Seus efeitos (ex.: `ClickEffects`) |

Detalhes: [`src/components/README.md`](src/components/README.md).

### Adicionar mais componentes

```bash
# Magic UI / shadcn (sem limite diário típico)
npx shadcn@latest add @magicui/<nome>
npx shadcn@latest add button

# Originkit — preferir crescer o banco no template nos dias calmos
npx originkit login
npx originkit add <nome>
```

Config: `components.json` (shadcn + registry `@magicui`) e `originkit.components.json`.

> Não commite a pasta `.originkit/` (login/cache local). Já está no `.gitignore`.

## Docs (humano + IA)

| Arquivo | Uso |
| --- | --- |
| [docs/CLIENT_BRIEF.md](docs/CLIENT_BRIEF.md) | Respostas rápidas do cliente |
| [docs/PRD.md](docs/PRD.md) | Requisitos do projeto |
| [docs/SDD.md](docs/SDD.md) | Decisão técnica / arquitetura |
| [docs/UI_GUIDANCE.md](docs/UI_GUIDANCE.md) | Regras de design |
| [docs/DEPLOY.md](docs/DEPLOY.md) | Pages, Actions e domínio custom |
