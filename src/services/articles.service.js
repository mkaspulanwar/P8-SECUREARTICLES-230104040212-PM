// Memanggil model Article dari layer repository
const Article = require("../repositories/articles.repo");

/**
 * @function getAllArticles
 * Mengambil daftar artikel dari database dengan fitur paging, filter, dan sorting.
 *
 * @param {object} query - Objek query dari request (misalnya req.query)
 * @param {number} [query.page=1] - Nomor halaman yang diminta.
 * @param {number} [query.limit=10] - Jumlah item per halaman.
 * @param {string} [query.status] - Filter berdasarkan status (misalnya 'published').
 * @param {string} [query.tag] - Filter berdasarkan tag tertentu.
 * @returns {object} Objek yang berisi data paging dan hasil artikel.
 */
async function getAllArticles(query) {
  // 1. Menentukan Parameter Paging
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;
  // Menghitung jumlah dokumen yang akan dilewati (skip)
  const skip = (page - 1) * limit;

  // 2. Membangun Objek Filter Mongoose
  const filter = {};

  // Menambahkan filter status jika ada di query
  if (query.status) {
    filter.status = query.status;
  }

  // Menambahkan filter tag jika ada di query
  if (query.tag) {
    // Mongoose akan mencari dokumen yang memiliki elemen tag yang cocok
    filter.tags = query.tag;
  }

  // 3. Mengambil Data Artikel
  const articles = await Article.find(filter)
    .skip(skip) // Melewati dokumen untuk implementasi paging
    .limit(limit) // Membatasi jumlah dokumen yang diambil
    .sort({
      createdAt: -1
    }); // Mengurutkan berdasarkan waktu pembuatan terbaru (-1 = descending)

  // 4. Menghitung Total Dokumen yang Sesuai Filter
  const total = await Article.countDocuments(filter);

  // 5. Mengembalikan Hasil
  return {
    page,
    limit,
    total,
    results: articles,
  };
}

/**
 * @function createArticle
 * Membuat dan menyimpan artikel baru ke database.
 *
 * @param {object} data - Data artikel baru (title, content, tags, dll.).
 * @returns {object} Dokumen artikel yang baru saja tersimpan.
 */
async function createArticle(data) {
  // Membuat instance dokumen Article baru
  const article = new Article(data);

  // Menyimpan dokumen ke database dan mengembalikannya
  return await article.save();
}

// --- Export Fungsi-Fungsi Service ---
module.exports = {
  getAllArticles,
  createArticle,
};