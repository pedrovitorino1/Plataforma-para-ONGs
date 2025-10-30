# 🌍 Projeto Site para ONGs

Plataforma web desenvolvida para auxiliar Organizações Não Governamentais (ONGs) na gestão de projetos, captação de recursos e engajamento de voluntários.  
Este projeto foi desenvolvido por **Pedro da Silva Vitorino** como parte das entregas da disciplina de **Desenvolvimento Front-End**, consolidando HTML5, CSS3, JavaScript e práticas de versionamento com Git/GitHub.

---

## 🚀 Objetivo do Projeto

Oferecer uma **plataforma completa e acessível** que permita ONGs:
- Divulgar seus projetos e campanhas;
- Cadastrar e gerenciar voluntários;
- Receber doações online;
- Manter transparência com o público;
- Garantir uma experiência inclusiva e responsiva.

---

## 🧩 Estrutura do Projeto

projeto_ongs/
├── html/
│ └── index.html
├── css/
│ ├── style.css
│ └── style.min.css
├── js/
│ ├── main.js
│ ├── formValidation.js
│ ├── templates.js
│ └── main.min.js
├── assets/
│ └── imagens/
└── README.md

yaml
Copiar código

---

## 🧠 Tecnologias Utilizadas

- **HTML5** – Estrutura semântica e acessível  
- **CSS3** – Design responsivo e modo escuro  
- **JavaScript (ES6+)** – SPA básica e interatividade  
- **Git/GitHub** – Versionamento e controle de branches  
- **WCAG 2.1 AA** – Padrões de acessibilidade web  

---

## 🧭 Funcionalidades

- 📁 Estrutura semântica HTML com múltiplas seções (Home, Projetos, Contato)  
- 💬 SPA (Single Page Application) com navegação dinâmica via JS  
- 🧾 Formulário com validação visual e feedback ao usuário  
- 🖼️ Renderização dinâmica de cards de projetos  
- 🎨 Sistema de design com paleta de cores e tipografia hierárquica  
- 🌗 Modo escuro / alto contraste acessível  
- 📱 Design 100% responsivo (mobile-first)

---

## ♿ Acessibilidade (WCAG 2.1 AA)

Foram aplicadas as seguintes práticas:

- Navegação completa por teclado (TAB / ENTER)  
- Estrutura semântica com tags `<header>`, `<main>`, `<section>`, `<footer>`  
- Textos e botões com contraste mínimo de 4.5:1  
- Atributos `alt` em todas as imagens  
- Compatibilidade com leitores de tela  
- Modo de **alto contraste / dark mode** via CSS  
- Foco visível em elementos interativos  

---

## ⚙️ Otimização para Produção

- CSS e JS minificados (`style.min.css`, `main.min.js`)  
- Imagens comprimidas com TinyPNG  
- Lazy loading aplicado a elementos pesados  
- Estrutura de pastas otimizada para deploy  

---

## 🔁 Controle de Versão (GitFlow)

Fluxo de versionamento implementado com base no **GitFlow**:

- `main` → versão estável / produção  
- `develop` → ambiente de desenvolvimento  
- `feature/*` → desenvolvimento de novas funcionalidades  

### Exemplo de commits semânticos:
feat: adiciona sistema de validação de formulários
fix: corrige bug no menu responsivo
style: ajusta contraste para acessibilidade
docs: atualiza README com novas instruções

yaml
Copiar código

### Versionamento semântico:
- Release: **v1.0.0** – Entrega final consolidada  

---

## 🧰 Como Executar o Projeto

1. Baixe ou clone o repositório:
   ```bash
   git clone https://github.com/PedroVitorino/projeto-site-ongs.git
Acesse a pasta html/ e abra o arquivo index.html no navegador.

Explore o menu para navegar entre as páginas (Home, Projetos e Contato).

📌 Issues e Milestones
Durante o desenvolvimento, foram utilizadas Issues e Milestones no GitHub para organizar tarefas e entregas:

#1 Estruturar HTML semântico

#2 Implementar CSS responsivo

#3 Adicionar interatividade com JS

#4 Aplicar acessibilidade e otimização final

🧾 Autor
Pedro da Silva Vitorino
Disciplina: Desenvolvimento Front-End
Instituição: (adicione o nome da sua instituição)
Professor: (adicione o nome do professor, se desejar)

🏁 Versão Final
Release: v1.0.0
Data: Outubro de 2025
Status: ✅ Entrega concluída
