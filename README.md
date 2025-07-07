# 🚀 Trello-style Real-time Task Board

A Trello-style task management board with real-time collaboration. Built using **Next.js**, **Tailwind CSS**,**Mongodb**, **React SortableJS**, **Liveblocks**

---

## 📁 Project Structure

```
/src
 ┣ /app
 ┃ ┗ /board/[boardId]     # Dynamic routing for each board
 ┣ /components             # Reusable React components
 ┣ /lib                    # Utility and API logic
 
```

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git https://github.com/Ibrahimbalti/trello.git
cd trello
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env.local` file in the root and add the following:

```env
GOOGLE_CLIENT_ID=""
GOOGLE_CLIENT_SECRET=""
MONGODB_URI=""
LIVEBLOCKS_SECRET_KEY=""
```

### 4. Run the Development Server
```bash
npm run dev
```

App will be running at [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Architectural Decisions

### 1. **Next.js App Router**
- **Why:** Enables server-side rendering and file-based routing with dynamic segments (e.g., `/board/[boardId]`).
- **Benefit:** Simplifies routing and improves SEO.
- **Trade-off:** Learning curve for `app` directory and layout system.

### 2. **Liveblocks for Real-Time Collaboration**
- **Why:** Simplifies adding presence, real-time sync, and multiplayer editing.
- **Benefit:** No need to build and manage your own WebSocket infrastructure.
- **Trade-off:** Vendor lock-in and cost for production usage.


### 3. **React SortableJS for Drag-and-Drop**
- **Why:** Reliable and simple drag-drop library that works well with React.
- **Benefit:** Good performance and minimal setup.
- **Trade-off:** Less customizable compared to alternatives like `dnd-kit`.

### 4. **Tailwind CSS for Styling**
- **Why:** Utility-first CSS framework for fast and consistent design.
- **Benefit:** No need to write custom CSS; responsive by default.
- **Trade-off:** Steep initial learning curve for utility classes.

                          |

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

**Muhammad Ibrahim**  
Frontend Developer - React.js, Next.js, Tailwind CSS  
