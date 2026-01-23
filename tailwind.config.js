/** @type {import('tailwindcss').Config} */
module.exports = {
  // 這行會告訴外掛去掃描該資料夾下所有的 HTML 檔案
  content: ["./**/*.html", "./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
}