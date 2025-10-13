# Tickfy - NFT Ticketing Platform

Uma plataforma revolucionária de ingressos NFT baseada em blockchain, inspirada no design e estrutura do ethereum.org. Construída com React, Vite, React Router v7, Tailwind CSS e shadcn/ui.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca para construção de interfaces
- **Vite** - Build tool e servidor de desenvolvimento
- **React Router v7** - Roteamento da aplicação
- **Tailwind CSS** - Framework CSS para estilização
- **shadcn/ui** - Componentes UI reutilizáveis
- **Framer Motion** - Animações e transições
- **Lucide React** - Ícones modernos
- **Yarn** - Gerenciador de dependências

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/          # Componentes de layout (Header, Footer, Layout)
│   ├── sections/        # Seções reutilizáveis (Hero, Section, FeatureGrid, StatsGrid)
│   └── ui/             # Componentes UI básicos (Button, Card)
├── pages/              # Páginas da aplicação
│   ├── Home.jsx        # Landing page principal
│   ├── Learn.jsx       # Página de aprendizado
│   ├── Use.jsx         # Como usar Tickfy
│   ├── Build.jsx       # Recursos para desenvolvedores
│   ├── Community.jsx   # Comunidade
│   └── Developers.jsx  # Ferramentas para desenvolvedores
├── lib/                # Utilitários e helpers
├── hooks/              # Custom hooks
├── constants/          # Constantes da aplicação
└── types/              # Tipos TypeScript (futuro)
```

## 🎨 Design System

O projeto utiliza um design system baseado em:

- **Cores temáticas crypto**: Azul, roxo, verde para gradientes
- **Componentes shadcn/ui** para consistência
- **Animações Framer Motion** para interatividade
- **Design responsivo** para todos os dispositivos
- **Tema dark/light** suportado

## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 18+
- Yarn

### Instalação
```bash
# Clone o repositório
git clone <repository-url>
cd tickfy-web

# Instale as dependências
yarn install

# Inicie o servidor de desenvolvimento
yarn dev
```

### Comandos Disponíveis

```bash
yarn dev      # Inicia o servidor de desenvolvimento
yarn build    # Gera build de produção
yarn preview  # Visualiza o build de produção
yarn lint     # Executa o linter
```

## 🌟 Características Principais

### Landing Page Completa
- Hero section com animações focada em ticketing NFT
- Grid de estatísticas de eventos e tickets
- Seção de features anti-fraude e segurança
- Seção de tecnologia blockchain para tickets
- Call-to-action para criação de eventos

### Navegação Estruturada
Baseada na estrutura do ethereum.org:
- **Learn**: Recursos educacionais sobre NFT ticketing
- **Use**: Como comprar tickets e criar eventos
- **Build**: APIs e ferramentas para integração
- **Community**: Comunidade de organizadores de eventos
- **Developers**: Documentação técnica e SDKs

### Componentes Reutilizáveis
- `Hero`: Seção hero personalizável com animações
- `Section`: Container de seção com variações de fundo
- `FeatureGrid`: Grid responsivo para features
- `StatsGrid`: Exibição de estatísticas
- `Button`: Botão com múltiplas variantes
- `Card`: Cards responsivos

### Responsividade Total
- Design mobile-first
- Breakpoints otimizados
- Menu mobile com animações
- Layouts adaptativos

## 🎯 Próximos Passos

- [ ] Integração com APIs de dados crypto
- [ ] Sistema de internacionalização (i18n)
- [ ] Modo escuro/claro
- [ ] Animações mais avançadas
- [ ] SEO e meta tags
- [ ] PWA capabilities
- [ ] Testes unitários e e2e
- [ ] TypeScript migration
- [ ] Performance optimization

## 🔧 Personalização

### Cores do Tema
As cores principais podem ser modificadas em `tailwind.config.js`:

```js
crypto: {
  blue: "#627EEA",
  purple: "#5B73E8",
  green: "#00D494",
  orange: "#FF6B35",
  dark: "#0A0E1A",
  light: "#F8FAFC",
}
```

### Adicionando Novas Páginas
1. Crie o arquivo em `src/pages/`
2. Adicione a rota em `src/Router.jsx`
3. Adicione no menu em `src/components/layout/Header.jsx`

## 📱 Compatibilidade

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🌐 Acesso

- **Desenvolvimento**: http://localhost:5173/
- **Produção**: [Deploy URL]

---

Desenvolvido com ❤️ para o ecossistema Tickfy+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
