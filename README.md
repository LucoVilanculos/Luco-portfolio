🚀 Luco-portifólio
Uma landing page moderna, animada e interativa com backend para formulário de contato. Construído com foco em performance, leveza e estilo visual impressionante.

📦 Tecnologias Utilizadas
Frontend
Vite + React + TypeScript
TailwindCSS
Framer Motion — animações suaves e fluidas
React Hook Form + Zod — controle e validação de formulários
Cloudinary CDN — imagens otimizadas via URL
Lenis.js — scroll suave (opcional)
Backend
Express.js + TypeScript
Resend — envio de emails
CORS, Helmet — segurança básica
Dotenv — variáveis de ambiente
🛠️ Estrutura do Projeto
luco-portifolio/ ├── frontend/ │ ├── src/ │ │ ├── components/ │ │ ├── pages/ │ │ ├── assets/ │ │ └── main.tsx │ └── index.html │ ├── backend/ │ ├── src/ │ │ ├── routes/ │ │ ├── controllers/ │ │ └── server.ts │ └── .env │ └── README.md

yaml Copy Edit

📨 Formulário de Contato
Os dados do formulário (nome, email, mensagem) são enviados via POST /contact para o backend
O backend envia um email usando a API do Resend
Futuramente: pode ser expandido para salvar no MongoDB
🚀 Como rodar localmente
Frontend
cd frontend
npm install
npm run dev
