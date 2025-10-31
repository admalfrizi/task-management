# **Task Management System Web**

## **1\. Overview**

Website ini merupakan sistem manajemen task yang dapat memungkinkan pengguna untuk membuat dan mengelola tugas - tugas yang berkaitan dengan pekerjaan professional serta dapat memantau perkembangan dari projek - projek yang telah dan sedang dikerjakan.

Sistem ini dibangun menggunakan Frontend dan Backend dengan beberapa tech stack seperti Laravel, NextJS 16, MySQL dan RestFul API

## **2\. Folder Structure**

```
task-management/
├── backend/               # Service backend (Laravel)
│   ├── src/
│   ├── .env.example
│   ├── README.md
│   └── dll...
├── frontend/              # Service frontend (Next.js)
│   ├── src/
│   ├── .env.example
│   ├── README.md
│   └── dll...
├── Task Management System.postman_collection.json #    Kumpulan endpoint API untuk Postman
├── task_management.sql    # Dump database
├── README.md              # Dokumentasi utama proyek
└── screenshots            # Screenshot tampilan 
    ├── login page.png
    ├── register page.png
    ├── task management page.png
    └── add-edit task modal.png
```

---

## **3\. Tech Stack**

Projek ini menggunakan beberapa tech stack modern sebagai berikut

* **Frontend:**  
  * NextJS 16 
  * Tailwind CSS (or CSS Modules / Styled-Components)
* **Backend:**  
  * Laravel
  * JSON Web Tokens (JWT) for authentication  
  * Eloquent ORM
* **Database:**  
  * MySQL

### **Cara Setup Pertama Kali**

1. **Clone the repository:**  
   git clone \[https://github.com/admalfrizi/task-management.git\]  
   cd task-management

2. **Instalasi Backend :**  
   \# Navigate to the /backend directory  
   cd backend  
   composer install
   composer require
   
   \# Setup untuk .env file
   ```
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=task_db
   DB_USERNAME=root
   DB_PASSWORD=
   ```

   \# Generate untuk JWT Secret Key
   ```bash
   php artisan key:generate
   php artisan jwt:secret
   ```

   \# Jalankan Server 
   ```bash
   php artisan serve
   ```

3. **Instalasi Frontend :**  
   \# Navigate to the /frontend directory  
   cd frontend 
   npm install

   
   \# Setup untuk .env file
   cp .env.example .env

   \# Edit file .env dan sesuaikan URL backend API sesuai server Laravel:
   ```bash
   NEXT_PUBLIC_API_URL=http://127.0.0.1:8000/api
   ```
   \# Jalankan Server 
   ```bash
   npm run dev
   ```

## **4\. Contoh Data Dummy**
  
| Name   | Email            | Password |
|--------|----------------- |-----------|
| User1  | user1@gmail.com  | qazwerttwa |


## **5\. Tabel Data Task Management**

Tabel utama dalam sistem ini:

| Tabel | Deskripsi |
|-------|------------|
| `users` | Menyimpan data pengguna |
| `tasks` | Menyimpan daftar tugas yang dibuat oleh user |

---

## **6\. Hasil Screenshot**

Sign In Page | Sign Up Page
--- | --- 
![](https://github.com/admalfrizi/task-management/blob/master/screenshot/Screenshot%20(85).png) | ![](https://github.com/admalfrizi/task-management/blob/master/screenshot/Screenshot%20(86).png)

Main Page 
|  ---  |
![](https://github.com/admalfrizi/task-management/blob/master/screenshot/Screenshot%20(87).png)

## **7\. Author**

* **Adam Alfarizi Ismail** \- [adam.alfarizi.2002@gmail.com](mailto:your-email@example.com)  
