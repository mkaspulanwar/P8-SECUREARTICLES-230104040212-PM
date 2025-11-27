// Memanggil Router dari Express
const router = require("express").Router();

// Memanggil fungsi controller yang telah dibuat sebelumnya
const {
  listArticles, // Controller untuk HTTP GET
  createArticle, // Controller untuk HTTP POST
} = require("../controllers/articles.controller");

// --- Definisi Rute ---

/**
 * Rute: GET /
 * Mengambil daftar semua artikel.
 * Controller: listArticles
 */
router.get("/", listArticles);

/**
 * Rute: POST /
 * Membuat artikel baru.
 * Controller: createArticle
 *
 * Catatan: Asumsikan middleware otentikasi (JWT) akan ditambahkan di sini
 * pada pengembangan selanjutnya (misalnya, router.post("/", authenticateJWT, createArticle);)
 */
router.post("/", createArticle);

// --- Export Router ---

// Mengekspor objek router agar bisa digunakan oleh file utama Express (misalnya app.js atau index.js)
module.exports = router;