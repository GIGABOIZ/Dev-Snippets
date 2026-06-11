# ⚡ The Ultimate Dev Utils Bundle (50+ Snippets)

![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)
![Open Source](https://img.shields.io/badge/Open%20Source-%E2%9D%A4-red?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

Welcome to the **Ultimate Dev Utils Bundle**! 🚀 
As developers, we spend way too much time Googling how to reverse a string, find days between dates, or validate an email. 

This repository is your central "Copy-Paste" arsenal containing **50+ highly optimized, zero-dependency JavaScript utility functions**. No `npm install`, no bloated libraries—just clean code ready to be dropped into your project.

---

## 🗂️ The Snippet Arsenal (6 Categories)

Our `utils.js` is packed with 50+ functions divided into these categories:

* **🔡 String Utils (10):** `capitalize`, `slugify`, `camelCase`, `snakeCase`, `escapeHTML`...
* **📚 Array Utils (10):** `removeDuplicates`, `chunkArray`, `flattenArray`, `intersection`...
* **📦 Object Utils (8):** `deepClone`, `omitKeys`, `mergeObjects`, `invertObject`...
* **🧮 Math & Numbers (10):** `randomBetween`, `isPrime`, `factorial`, `clampNumber`...
* **⏳ Time & Dates (6):** `sleep`, `daysBetween`, `formatDuration`, `addDays`...
* **🌐 Web & DOM (9):** `copyToClipboard`, `isDarkMode`, `detectDeviceType`, `isValidURL`...

---

## 🚀 How to Use

Zero setup required. Literally just copy and paste.
1. Open the `utils.js` file in this repository.
2. Search for the function you need (e.g., `Ctrl + F` and type "email").
3. Copy the code block and paste it directly into your project!

**Example:**
```javascript
// Need to know if a user is on mobile or desktop? Just copy this:
const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';

// Usage:
console.log(detectDeviceType()); // Output: "Mobile" or "Desktop"