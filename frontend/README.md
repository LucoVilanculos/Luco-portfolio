# 🚀 Luco-portifólio

Uma landing page moderna, animada e interativa com backend para formulário de contato. Construído com foco em performance, leveza e estilo visual impressionante.

---

## 📦 Tecnologias Utilizadas

### Frontend
- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — animações suaves e fluidas
- [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) — controle e validação de formulários
- [Cloudinary CDN](https://cloudinary.com/) — imagens otimizadas via URL
- [Lenis.js](https://github.com/studio-freight/lenis) — scroll suave (opcional)

### Backend
- [Express.js](https://expressjs.com/) + TypeScript
- [Resend](https://resend.com/) — envio de emails
- [CORS](https://www.npmjs.com/package/cors), [Helmet](https://helmetjs.github.io/) — segurança básica
- [Dotenv](https://www.npmjs.com/package/dotenv) — variáveis de ambiente

---

## 🛠️ Estrutura do Projeto

luco-portifolio/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ ├── pages/
│ │ ├── assets/
│ │ └── main.tsx
│ └── index.html
│
├── backend/
│ ├── src/
│ │ ├── routes/
│ │ ├── controllers/
│ │ └── server.ts
│ └── .env
│
└── README.md

yaml
Copy
Edit

---

## 📨 Formulário de Contato

- Os dados do formulário (nome, email, mensagem) são enviados via `POST /contact` para o backend
- O backend envia um email usando a API do [Resend](https://resend.com/)
- Futuramente: pode ser expandido para salvar no MongoDB

---

## 🚀 Como rodar localmente

### Frontend

```bash
cd frontend
npm install
npm run dev