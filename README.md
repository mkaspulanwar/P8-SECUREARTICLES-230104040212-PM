# 🛡️ Praktikum #8: Secure & Observable RESTful CRUD API - Web Service Engineering (WSE)

---


## Pendahuluan

Repositori ini berisi implementasi dari **Modul Praktikum #8** mata kuliah Web Service Engineering. Fokus utama praktikum ini adalah membangun *RESTful API* tingkat lanjut dengan penekanan pada **keamanan (*Security Hardening*)**, **otentikasi dan otorisasi (*JWT Authentication & Role-Based Access Control / RBAC*)**, serta **observabilitas (*Logging, Metrics, Tracing*)**.

Proyek ini mengimplementasikan API **CRUD** untuk *resource* **Articles** (atau *resource* yang Anda pilih) dan dilengkapi dengan *Authentication Endpoints* standar industri.

## Tim Developer

| Peran | Nama | NIM | Profil GitHub |
| :--- | :--- | :--- | :--- |
| **Pengembang Proyek** | M. Kaspul Anwar | 230104040212 | [![](https://img.shields.io/badge/GitHub-M.KaspulAnwar-181717?style=flat&logo=github)](https://github.com/mkaspulanwar) |
| **Dosen Pengampu** | Muhayat, M. IT | - | [![](https://img.shields.io/badge/GitHub-Muhayat,M.IT-181717?style=flat&logo=github)](https://github.com/muhayat-lab) |

---


## ✨ Fitur Utama

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

## 🛠️ Teknologi dan Dependensi

| Kategori | Teknologi/Pustaka | Deskripsi |
| :--- | :--- | :--- |
| **Backend** | `Node.js` & `Express.js` | *Runtime* dan *framework* utama. |
| **Database** | `(Sebutkan DB Anda, misal: PostgreSQL/MongoDB)` | Database yang digunakan. |
| **Auth** | `jsonwebtoken` (JWT) | Implementasi Otentikasi. |
| **Security** | `bcrypt` | *Hashing* password. |
| **Observability** | `(Sebutkan Pustaka Logging, misal: Winston)` | Implementasi *Structured Logging*. |
| **Docs** | `(Sebutkan Pustaka Docs, misal: swagger-ui-express)` | Dokumentasi OpenAPI. |

---

## ⚙️ Instalasi dan Konfigurasi

Ikuti langkah-langkah berikut untuk menjalankan proyek secara lokal.

### 1. Kloning Repositori

```bash
git clone [https://github.com/yourusername/nama-repo-praktikum-8.git](https://github.com/yourusername/nama-repo-praktikum-8.git)
cd nama-repo-praktikum-8
```


## 📌 Tabel Endpoint Project Praktikum #8
🔐 AUTH ENDPOINTS

 | Method | Endpoint             | Auth            | Deskripsi                                |
| ------ | -------------------- | --------------- | ---------------------------------------- |
| POST   | `/api/auth/register` | ❌ Public        | Register user baru (role: user/admin)    |
| POST   | `/api/auth/login`    | ❌ Public        | Login → dapat accessToken + refreshToken |
| POST   | `/api/auth/refresh`  | ❌ Public        | Minta accessToken baru via refreshToken  |
| POST   | `/api/auth/logout`   | ✔️ Access Token | Logout & invalidate refreshToken         |
| GET    | `/api/auth/me`       | ✔️ Access Token | Ambil profil user dari JWT               |

📰 ARTICLES ENDPOINTS (CRUD + RBAC)
| Method | Endpoint            | Auth            | Role        | Deskripsi                                 |
| ------ | ------------------- | --------------- | ----------- | ----------------------------------------- |
| GET    | `/api/articles`     | ❌ Public        | public      | List all articles + pagination + search   |
| POST   | `/api/articles`     | ✔️ Access Token | user/admin  | Create article (author otomatis dari JWT) |
| PUT    | `/api/articles/:id` | ✔️ Access Token | owner/admin | Update article                            |
| DELETE | `/api/articles/:id` | ✔️ Access Token | admin       | Hapus article                             |

⚙️ SYSTEM / OBSERVABILITY
| Method | Endpoint  | Auth     | Deskripsi                          |
| ------ | --------- | -------- | ---------------------------------- |
| GET    | `/health` | ❌ Public | Cek status server                  |
| GET    | `/docs`   | ❌ Public | Swagger UI (OpenAPI Documentation) |
