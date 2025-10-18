🚀 Luco-portifólio
Uma landing page moderna, animada e interativa com backend para formulário de contato. Construído com foco em performance, leveza e estilo visual impressionante.
# 🚀 Luco-portfólio

Uma landing page moderna, animada e interativa com backend para formulário de contato. Construído com foco em performance, leveza e estilo visual impressionante.

## 📦 Tecnologias utilizadas

### Frontend
- Vite + React + TypeScript
- TailwindCSS
- Framer Motion — animações suaves e fluidas
- React Hook Form + Zod — controle e validação de formulários
- Cloudinary CDN — imagens otimizadas via URL
- Lenis.js — scroll suave (opcional)

### Backend
- Express.js + TypeScript
- Resend — envio de emails
- CORS, Helmet — segurança básica
- Dotenv — variáveis de ambiente

## 🛠️ Estrutura do projeto
```text
luco-portifolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── assets/
│   │   └── main.tsx
│   └── index.html
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   └── server.ts
│   └── .env
└── README.md
```

## 📨 Formulário de Contato
- Os dados do formulário (nome, email, mensagem) são enviados via POST para a rota `/contact` no backend.
- O backend envia um email usando a API do Resend.
- Futuramente: pode ser expandido para salvar as mensagens em um banco de dados (ex.: MongoDB).

## 🚀 Como rodar localmente

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend
```bash
cd backend
npm install
# configurar .env com as variáveis necessárias (ex.: RESEND_API_KEY, FROM_EMAIL, TO_EMAIL)
npm run dev # ou npm start dependendo do script configurado
```

---


📨 Formulário de Contato
Os dados do formulário (nome, email, mensagem) são enviados via POST /contact para o backend
O backend envia um email usando a API do Resend
Futuramente: pode ser expandido para salvar no MongoDB
🚀 Como rodar localmente
Frontend
cd frontend
npm install
npm run dev
