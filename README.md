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

3. **Instalasi Frontend :**  
   \# Navigate to the frontend/client directory from the root  
   cd ../client  
   npm install

4. **Set up Environment Variables:**  
   * In the server directory, create a .env file.  
   * Add your environment variables, such as:

DATABASE\_URL=your\_mongodb\_connection\_string  
JWT\_SECRET=your\_super\_secret\_key  
PORT=5000

### **Running the Application**

1. **Start the Backend Server:**  
   \# From the server directory  
   npm run dev

   The server will typically run on http://localhost:5000.  
2. **Start the Frontend App:**  
   \# From the client directory  
   npm start

   The app will open in your browser at http://localhost:3000.

## **5\. How to Use**

1. **Register:** Create a new account with your email and a password.  
2. **Login:** Sign in to your account to access your dashboard.  
3. **Create a Task:** Click the "New Task" button, fill in the title, description, priority, and due date.  
4. **Manage Tasks:**  
   * Click on a task to view its details.  
   * Click the "Edit" icon to update it.  
   * Click the "Delete" icon to remove it.  
   * Drag and drop the task card to a new status column.

## **6\. Contributing**

Contributions are welcome\! If you'd like to help improve this project, please follow these steps:

1. Fork the Project  
2. Create your Feature Branch (git checkout \-b feature/AmazingFeature)  
3. Commit your Changes (git commit \-m 'Add some AmazingFeature')  
4. Push to the Branch (git push origin feature/AmazingFeature)  
5. Open a Pull Request


## **7\. Author**

* **Adam Alfarizi Ismail** \- [adam.alfarizi.2002@gmail.com](mailto:your-email@example.com)  