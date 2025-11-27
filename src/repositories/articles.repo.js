const mongoose = require("mongoose");

// --- Definisi Schema Artikel ---
const ArticleSchema = new mongoose.Schema(
  {
    // Judul artikel (wajib diisi)
    title: {
      type: String,
      required: true,
    },
    // Slug/URL unik (wajib diisi dan unik)
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    // Isi konten artikel (wajib diisi)
    content: {
      type: String,
      required: true,
    },
    // Array dari tag (setiap elemen adalah String)
    tags: [
      {
        type: String,
      },
    ],
    // Status artikel: 'draft' atau 'published'
    status: {
      type: String,
      enum: ["draft", "published"], // Nilai yang diizinkan
      default: "draft", // Nilai bawaan jika tidak ditentukan
    },
    // Penulis artikel (hanya referensi String, diasumsikan sebagai ID atau nama)
    author: {
      type: String,
    },
  },
  // Opsi schema untuk menambahkan `createdAt` dan `updatedAt`
  { timestamps: true }
);

// --- Hook Pre-Validation Mongoose (SYNC - Tanpa 'next') ---
// Hook ini berjalan sebelum validasi dokumen (misalnya, sebelum disave/update).
// Digunakan untuk menggenerate atau membersihkan `slug` berdasarkan `title`.
ArticleSchema.pre("validate", function () {
  // Hanya lakukan ini jika `title` ada
  if (this.title) {
    // 1. Ambil nilai `title`
    this.slug = this.title
      // 2. Ubah ke huruf kecil
      .toLowerCase()
      // 3. Ganti karakter non-alfanumerik (kecuali '-' dan spasi) dengan '-'
      // Ekspresi: mengganti semua karakter non (a-z, 0-9) dengan "-"
      .replace(/[^a-z0-9]/g, "-")
      // 4. Hapus tanda '-' di awal atau akhir string
      // Ekspresi: menghapus '-' yang ada di awal (^) atau di akhir ($)
      .replace(/^-+|-+$/g, "");
  }
});

// --- Definisi Model Mongoose ---
// Membuat Model dari Schema yang telah didefinisikan
const ArticleModel = mongoose.model("Article", ArticleSchema);

// --- Export Model ---
module.exports = ArticleModel;