# 🚀 GitHub User Activity CLI

A simple Command Line Interface (CLI) tool to fetch and display the recent activity of any GitHub user using the GitHub API.

🔗 Project Source: https://roadmap.sh/projects/github-user-activity

---

## 📌 Features

* Fetch recent activity of any GitHub user
* Display activity in a readable format
* Supports multiple event types:

  * Push events
  * Issues
  * Stars
  * Forks
  * Repository creation
* Handles errors gracefully
* No external libraries used (pure Node.js)

---

## 🛠️ Technologies Used

* JavaScript (Node.js)
* GitHub REST API
* CLI (Command Line Interface)

---

## 📦 Installation

1. Clone the repository:

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

2. Make sure you have Node.js installed:

```bash
node -v
```

---

## ▶️ Usage

Run the program using:

```bash
node app.js <github-username>
```

### Example:

```bash
node app.js kamranahmedse
```

---

## 🧾 Sample Output

```
- Pushed 3 commits to user/repo
- Opened an issue in user/repo
- Starred user/repo
- Forked user/repo
- Created repository in user/repo
```

---

## ⚠️ Error Handling

* Displays error if:

  * Username is not provided
  * User does not exist
  * API request fails

---

## 📚 What I Learned

* Working with APIs using `fetch`
* Handling JSON data
* Using objects and nested objects
* CLI argument handling with `process.argv`
* Error handling in async JavaScript

---

## 🚀 Future Improvements

* Add filtering by event type
* Add colored output
* Convert into a global CLI tool
* Cache API responses for better performance

---

## 🤝 Contributing

Feel free to fork this project and improve it!

---

## 📄 License

This project is open-source and free to use.
