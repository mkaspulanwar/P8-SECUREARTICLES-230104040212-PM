/**
 * Middleware generik untuk memvalidasi permintaan (req.body, req.params, req.query)
 * menggunakan schema yang didefinisikan (misalnya, Joi schema).
 *
 * @param {object} schema - Schema validasi yang akan digunakan (misalnya, Joi schema).
 */
function validate(schema) {
  // Fungsi middleware yang akan dieksekusi oleh Express
  return (req, res, next) => {
    // Opsi konfigurasi untuk proses validasi
    const options = {
      // abortEarly: false => Mengumpulkan semua error validasi, bukan berhenti pada error pertama.
      abortEarly: false,
      // allowUnknown: true => Mengizinkan field yang tidak ada dalam schema (tidak wajib ada di sini).
      allowUnknown: true,
      // stripUnknown: true => Menghapus field yang tidak ada dalam schema.
      stripUnknown: true,
    };

    // Objek yang akan divalidasi
    const validationSource = {
      body: req.body,
      params: req.params,
      query: req.query
    };

    // Melakukan validasi terhadap schema yang diberikan
    const {
      error,
      value
    } = schema.validate(validationSource, options);

    // 1. Penanganan Error Validasi
    if (error) {
      // Mengembalikan respons HTTP 422 (Unprocessable Entity) jika ada error
      return res.status(422).json({
        success: false,
        message: "Validation error",
        // Memetakan detail error untuk mendapatkan pesan yang jelas
        details: error.details.map(d => d.message),
        // Menggunakan Correlation ID (jika ada) untuk tracing
        cid: req.correlationId, 
      });
    }

    // 2. FIX PENTING EXPRESS (Menghindari penugasan langsung `req.body = value.body`)
    // Menetapkan kembali data yang sudah divalidasi dan 'dibersihkan' (stripped) ke objek req.
    // Kita menggunakan Object.assign untuk memastikan properti yang ada di objek req tidak terhapus.
    if (value.body) {
      Object.assign(req.body, value.body);
    }
    if (value.params) {
      Object.assign(req.params, value.params);
    }
    if (value.query) {
      Object.assign(req.query, value.query);
    }
    
    // Meneruskan kontrol ke middleware atau controller berikutnya
    return next();
  };
}

module.exports = validate;