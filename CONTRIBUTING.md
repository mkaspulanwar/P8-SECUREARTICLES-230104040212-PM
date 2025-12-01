# Panduan Kontribusi

Terima kasih atas minat Anda untuk berkontribusi pada repositori Praktikum Web Service Engineering (WSE) ini. Kontribusi sangat didorong untuk perbaikan kode, penambahan fitur, atau perbaikan bug.

---

## Pelaporan Isu (Bugs & Saran)

Mohon laporkan semua bug, error, atau saran fitur baru melalui tab **Issues** di GitHub. Pastikan untuk menjelaskan langkah-langkah reproduksi (jika bug) atau tujuan fungsional (jika saran fitur).

---

## Persiapan Environment Development

1.  **Kloning Repositori:**
    ```bash
    git clone https://github.com/mkaspulanwar/P8-SECUREARTICLES-230104040212-PM
    cd nama-repo-praktikum-8
    ```
2.  **Instalasi Dependensi:**
    ```bash
    npm install
    ```
3.  **Konfigurasi .env:** Buat file `.env` dan isi dengan konfigurasi **MongoDB** dan **JWT Secrets** sesuai panduan di `README.md`.
4.  **Jalankan Server:**
    ```bash
    npm run dev
    ```

---

## Proses Pengiriman Kode (Pull Request)

Untuk mengirimkan perubahan kode:

1.  Pastikan Anda berada di *branch* `main` dan telah diperbarui.
    ```bash
    git checkout main
    git pull origin main
    ```
2.  Buat *branch* baru dengan nama yang deskriptif (`fitur/`, `perbaikan/`, `refactor/`):
    ```bash
    git checkout -b fitur/nama-fitur-baru
    ```
3.  Lakukan perubahan kode dan *commit* dengan pesan yang jelas:
    ```bash
    git add .
    git commit -m "feat: Menambahkan endpoint GET /api/health"
    ```
4.  *Push* *branch* Anda ke GitHub:
    ```bash
    git push origin fitur/nama-fitur-baru
    ```
5.  Buat **Pull Request (PR)** dari *branch* Anda ke *branch* `main`.

---

## Catatan Penting

* **Standar Kode:** Jaga konsistensi gaya kode.
* **Fungsi WSE:** Pastikan implementasi **JWT**, **RBAC**, **Hardening**, dan **Observability** tetap utuh dan berfungsi dengan baik.
