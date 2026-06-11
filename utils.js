/**
 * 🚀 THE ULTIMATE DEV UTILS BUNDLE (50+ Snippets)
 * Categories: Strings, Arrays, Objects, Math, Time, Web/DOM
 */

// ==========================================
// 🔡 1. STRING UTILITIES
// ==========================================
export const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
export const reverseString = (str) => str.split('').reverse().join('');
export const truncate = (str, length) => str.length > length ? str.substring(0, length) + '...' : str;
export const generateUUID = () => crypto.randomUUID();
export const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
export const camelCase = (str) => str.replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => index === 0 ? word.toLowerCase() : word.toUpperCase()).replace(/\s+/g, '');
export const snakeCase = (str) => str.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('_');
export const countVowels = (str) => (str.match(/[aeiou]/gi) || []).length;
export const escapeHTML = (str) => str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag]));
export const unescapeHTML = (str) => str.replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, tag => ({ '&amp;': '&', '&lt;': '<', '&gt;': '>', '&#39;': "'", '&quot;': '"' }[tag]));

// ==========================================
// 📚 2. ARRAY UTILITIES
// ==========================================
export const removeDuplicates = (arr) => [...new Set(arr)];
export const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
export const findMax = (arr) => Math.max(...arr);
export const findMin = (arr) => Math.min(...arr);
export const chunkArray = (arr, size) => Array.from({ length: Math.ceil(arr.length / size) }, (v, i) => arr.slice(i * size, i * size + size));
export const randomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
export const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
export const flattenArray = (arr) => arr.flat(Infinity);
export const intersection = (arr1, arr2) => arr1.filter(value => arr2.includes(value));
export const difference = (arr1, arr2) => arr1.filter(value => !arr2.includes(value));

// ==========================================
// 📦 3. OBJECT UTILITIES
// ==========================================
export const isObjectEmpty = (obj) => Object.keys(obj).length === 0;
export const deepClone = (obj) => JSON.parse(JSON.stringify(obj));
export const pickKeys = (obj, keys) => keys.reduce((acc, key) => (acc[key] = obj[key], acc), {});
export const omitKeys = (obj, keys) => Object.keys(obj).filter(k => !keys.includes(k)).reduce((acc, key) => ((acc[key] = obj[key]), acc), {});
export const mergeObjects = (...objs) => Object.assign({}, ...objs);
export const invertObject = (obj) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [value, key]));
export const objectToQueryString = (obj) => new URLSearchParams(obj).toString();
export const freezeObject = (obj) => Object.freeze(obj);

// ==========================================
// 🧮 4. MATH & NUMBERS
// ==========================================
export const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
export const isEven = (num) => num % 2 === 0;
export const isOdd = (num) => num % 2 !== 0;
export const average = (...args) => args.reduce((a, b) => a + b) / args.length;
export const celsiusToFahrenheit = (celsius) => celsius * 9 / 5 + 32;
export const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;
export const roundTo = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);
export const isPrime = (num) => { if (num <= 1) return false; for (let i = 2; i <= Math.sqrt(num); i++) if (num % i === 0) return false; return true; };
export const factorial = (n) => n <= 1 ? 1 : n * factorial(n - 1);
export const clampNumber = (num, min, max) => Math.max(min, Math.min(num, max));

// ==========================================
// ⏳ 5. TIME & DATES
// ==========================================
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export const daysBetween = (date1, date2) => Math.ceil(Math.abs(new Date(date1) - new Date(date2)) / (1000 * 60 * 60 * 24));
export const isWeekend = (date) => [0, 6].includes(new Date(date).getDay());
export const currentTimestamp = () => Math.floor(Date.now() / 1000);
export const addDays = (date, days) => { const d = new Date(date); d.setDate(d.getDate() + days); return d; };
export const formatDuration = (ms) => { const s = Math.floor(ms / 1000), m = Math.floor(s / 60), h = Math.floor(m / 60); return `${h}h ${m % 60}m ${s % 60}s`; };

// ==========================================
// 🌐 6. WEB, DOM & REGEX
// ==========================================
export const copyToClipboard = async (text) => await navigator.clipboard.writeText(text);
export const getURLParams = (url) => Object.fromEntries(new URL(url).searchParams);
export const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
export const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
export const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
export const isValidURL = (url) => { try { new URL(url); return true; } catch { return false; } };
export const getSelectedText = () => window.getSelection().toString();
export const detectDeviceType = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop';
export const redirect = (url, asLink = true) => asLink ? (window.location.href = url) : window.location.replace(url);