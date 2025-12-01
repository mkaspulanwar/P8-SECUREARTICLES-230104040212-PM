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
