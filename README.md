# PRAKTIKUM #8: SECURE & OBSERVABLE RESTFUL CRUD API - WEB SERVICE ENGINEERING (WSE)

<div align="center">
   
[![Status Proyek](https://img.shields.io/badge/Status-Completed-success.svg?style=flat)]()
[![Tingkat Praktikum](https://img.shields.io/badge/WSE%20Module-8%20(Advanced)-informational.svg?style=flat)]()
[![Lisensi](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)](https://opensource.org/licenses/MIT)
[![Dibuat dengan Node.js](https://img.shields.io/badge/Node.js-18%2B-339933.svg?style=flat&logo=node.js&logoColor=white)]()
[![Framework Express](https://img.shields.io/badge/Framework-Express.js-000000.svg?style=flat&logo=express&logoColor=white)]()
[![Database](https://img.shields.io/badge/Database-MongoDB-47A248.svg?style=flat&logo=mongodb&logoColor=white)]()
[![Autentikasi](https://img.shields.io/badge/Security-JWT%20%26%20RBAC-critical.svg?style=flat&logo=jsonwebtokens&logoColor=white)]()
[![Hardening](https://img.shields.io/badge/API%20Hardening-Rate%20Limit%2FValidation-important.svg?style=flat)]()
[![Observability](https://img.shields.io/badge/Observability-Logging%2FMetrics-ff69b4.svg?style=flat&logo=grafana&logoColor=white)]()
[![API Docs](https://img.shields.io/badge/Documentation-OpenAPI%20(Swagger)-orange.svg?style=flat&logo=openapi-initiative)]()

</div>

## Pendahuluan

Repositori ini berisi implementasi dari **Modul Praktikum #8** mata kuliah Web Service Engineering. Fokus utama praktikum ini adalah membangun *RESTful API* tingkat lanjut dengan penekanan pada **keamanan (*Security Hardening*)**, **otentikasi dan otorisasi (*JWT Authentication & Role-Based Access Control / RBAC*)**, serta **observabilitas (*Logging, Metrics, Tracing*)**.

Proyek ini mengimplementasikan API **CRUD** untuk *resource* **Articles** (atau *resource* yang Anda pilih) dan dilengkapi dengan *Authentication Endpoints* standar industri.

---

## Tim Developer

| Peran | Nama | NIM | Profil GitHub |
| :--- | :--- | :--- | :--- |
| **Pengembang Proyek** | M. Kaspul Anwar | 230104040212 | [![](https://img.shields.io/badge/GitHub-M.KaspulAnwar-181717?style=flat&logo=github)](https://github.com/mkaspulanwar) |
| **Dosen Pengampu** | Muhayat, M. IT | - | [![](https://img.shields.io/badge/GitHub-Muhayat,M.IT-181717?style=flat&logo=github)](https://github.com/muhayat-lab) |

---

## Fitur Utama

* **RESTful Design**: Mematuhi prinsip-prinsip REST (Resource, Method, Status Code, Stateless).
* **JWT Authentication**:
    * `POST /api/auth/register` (Role `user`/`admin`)
    * `POST /api/auth/login` (Mendapatkan `accessToken` & `refreshToken`)
    * `POST /api/auth/refresh` (Memperoleh `accessToken` baru)
    * `POST /api/auth/logout` (Invalidasi `refreshToken`)
    * `GET /api/auth/me` (Mengambil profil user)
* **Role-Based Access Control (RBAC)**: Otorisasi berdasarkan peran (`user` atau `admin`) pada *Articles Endpoints*.
* **API Hardening**:
    * *Data Validation* (e.g., menggunakan *Joi* atau *express-validator*).
    * *Rate Limiting* untuk mencegah *bruteforce* dan *DDoS*.
    * *Security Headers* (e.g., *Helmet*).
    * Penanganan *Error* yang bersih (*Error Hygiene*).
* **Observability**:
    * **Structured Logging**: Menggunakan pustaka seperti *Winston* atau sejenisnya.
    * **Correlation ID**: Melacak permintaan dari awal hingga akhir.
    * **Health/Metrics Endpoint**: Endpoint untuk memantau status layanan (`GET /health`).
* **API Documentation**: Menggunakan **OpenAPI (Swagger/Redoc)** untuk *Design-First* dan dokumentasi *live*.

---

## Teknologi dan Dependensi

| Kategori | Teknologi/Pustaka | Deskripsi |
| :--- | :--- | :--- |
| **Backend** | `Node.js` & `Express.js` | *Runtime* dan *framework* utama. |
| **Database** | `(Sebutkan DB Anda, misal: PostgreSQL/MongoDB)` | Database yang digunakan. |
| **Auth** | `jsonwebtoken` (JWT) | Implementasi Otentikasi. |
| **Security** | `bcrypt` | *Hashing* password. |
| **Observability** | `(Sebutkan Pustaka Logging, misal: Winston)` | Implementasi *Structured Logging*. |
| **Docs** | `(Sebutkan Pustaka Docs, misal: swagger-ui-express)` | Dokumentasi OpenAPI. |

---

## 📂 Struktur Direktori Proyek

Struktur ini merepresentasikan arsitektur proyek yang digunakan, memisahkan lapisan aplikasi (Controller, Service, Model) dengan lapisan infrastruktur (Middleware, Config, Utility) untuk mencapai *Separation of Concerns*.
```bash
P8-SECUREARTICLES-230104040212
├── bukti/
├── node_modules/
├── src/
│   ├── config/
│   │   ├── db.js
│   │   └── env.js
│   ├── controllers/
│   │   ├── articles.controller.js
│   │   ├── auth.controller.js
│   │   └── system.controller.js
│   ├── docs/
│   │   └── openapi.yaml
│   ├── middlewares/
│   │   ├── auth.middleware.js
│   │   ├── correlationId.middleware.js
│   │   ├── error.middleware.js
│   │   ├── notFound.middleware.js
│   │   ├── rateLimit.middleware.js
│   │   ├── role.middleware.js
│   │   └── validate.middleware.js
│   ├── repositories/
│   │   ├── articles.repo.js
│   │   └── users.repo.js
│   ├── routes/
│   │   ├── articles.routes.js
│   │   ├── auth.routes.js
│   │   └── system.routes.js
│   ├── services/
│   │   ├── articles.service.js
│   │   └── auth.service.js
│   ├── utils/
│   │   ├── articles.dto.js
│   │   ├── articles.validation.js
│   │   ├── auth.validation.js
│   │   ├── jwt.js
│   │   ├── logger.js
│   │   ├── response.js
│   │   ├── app.js
│   │   └── server.js
│   └── tests/
│       ├── articles.test.js
│       └── auth.test.js
├── .env
├── .env.example
├── nodemon.json
├── package.json
├── package-lock.json
└── README.md

```

---

## Instalasi dan Konfigurasi

Ikuti langkah-langkah berikut untuk menjalankan proyek secara lokal.

### 1. Kloning Repositori

```bash
git clone [https://github.com/yourusername/nama-repo-praktikum-8.git](https://github.com/yourusername/nama-repo-praktikum-8.git)
cd nama-repo-praktikum-8
```

### 2. Instalasi Dependensi

```bash
npm install
# atau
yarn install
```

### 3. Konfigurasi Environment Variables
Buat file .env di root proyek dan isi dengan konfigurasi yang diperlukan.

⚠️ PERHATIAN: Jangan commit file .env ke repositori!

```bash

# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
DB_HOST=localhost
DB_PORT=5432
DB_USER=user
DB_PASSWORD=password
DB_NAME=wse_praktikum8

# JWT Secrets (Harus Kuat dan Rahasia!)
JWT_ACCESS_SECRET="ganti-dengan-string-unik-dan-panjang"
JWT_REFRESH_SECRET="ganti-dengan-string-unik-dan-panjang-lainnya"
ACCESS_TOKEN_LIFETIME=1h
REFRESH_TOKEN_LIFETIME=7d

# Rate Limit Configuration
RATE_LIMIT_WINDOW_MS=60000 # 1 minute
RATE_LIMIT_MAX_REQUESTS=100
```

### 4. Menjalankan Server

Mode Pengembangan (Development)
```bash
npm run dev 
# Server akan berjalan di http://localhost:3000
```
Mode Produksi (Production)
```bash
npm run build
npm start
```

##  Tabel Endpoint Project Praktikum #8

### AUTH ENDPOINTS

 | Method | Endpoint             | Auth            | Deskripsi                                |
| ------ | -------------------- | --------------- | ---------------------------------------- |
| POST   | `/api/auth/register` | ❌ Public        | Register user baru (role: user/admin)    |
| POST   | `/api/auth/login`    | ❌ Public        | Login → dapat accessToken + refreshToken |
| POST   | `/api/auth/refresh`  | ❌ Public        | Minta accessToken baru via refreshToken  |
| POST   | `/api/auth/logout`   | ✔️ Access Token | Logout & invalidate refreshToken         |
| GET    | `/api/auth/me`       | ✔️ Access Token | Ambil profil user dari JWT               |

### ARTICLES ENDPOINTS (CRUD + RBAC)

| Method | Endpoint            | Auth            | Role        | Deskripsi                                 |
| ------ | ------------------- | --------------- | ----------- | ----------------------------------------- |
| GET    | `/api/articles`     | ❌ Public        | public      | List all articles + pagination + search   |
| POST   | `/api/articles`     | ✔️ Access Token | user/admin  | Create article (author otomatis dari JWT) |
| PUT    | `/api/articles/:id` | ✔️ Access Token | owner/admin | Update article                            |
| DELETE | `/api/articles/:id` | ✔️ Access Token | admin       | Hapus article                             |

### SYSTEM / OBSERVABILITY

| Method | Endpoint  | Auth     | Deskripsi                          |
| ------ | --------- | -------- | ---------------------------------- |
| GET    | `/health` | ❌ Public | Cek status server                  |
| GET    | `/docs`   | ❌ Public | Swagger UI (OpenAPI Documentation) |
