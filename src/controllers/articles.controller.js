// Memanggil utilitas respons (diasumsikan berisi fungsi ok dan created)
const {
  ok,
  created
} = require("../utils/response");

// Memanggil fungsi logika bisnis dari Service Layer
const ArticleService = require("../services/articles.service");

// --- Fungsi Controller ---

/**
 * @function listArticles
 * Mengambil dan mengembalikan daftar artikel.
 * Controller ini berinteraksi dengan ArticleService dan menangani respons/error.
 *
 * @param {object} req - Objek Request (berisi req.query untuk filter/paging)
 * @param {object} res - Objek Response
 * @param {function} next - Middleware untuk meneruskan error ke handler error global
 */
async function listArticles(req, res, next) {
  try {
    // Memanggil fungsi Service untuk mendapatkan data artikel
    const result = await ArticleService.getAllArticles(req.query);

    // Mengirim respons OK (HTTP 200) dengan hasil data
    return ok(res, result);
  } catch (err) {
    // Meneruskan error ke middleware error handler
    next(err);
  }
}

/**
 * @function createArticle
 * Membuat artikel baru berdasarkan data yang diterima dari body request.
 *
 * @param {object} req - Objek Request (berisi req.body untuk data artikel)
 * @param {object} res - Objek Response
 * @param {function} next - Middleware untuk meneruskan error ke handler error global
 */
async function createArticle(req, res, next) {
  try {
    // Memanggil fungsi Service untuk membuat artikel baru
    const article = await ArticleService.createArticle(req.body);

    // Mengirim respons CREATED (HTTP 201) dengan dokumen artikel yang baru dibuat
    return created(res, article);
  } catch (err) {
    // Meneruskan error (misalnya, error validasi Mongoose) ke middleware error handler
    next(err);
  }
}

// --- Export Fungsi Controller ---

module.exports = {
  listArticles,
  createArticle,
};