# GoldenWay 官網內容備份

這個資源庫用來備份 GoldenWay 官網後台產品頁的 HTML 內容。

## 資料夾結構
- product/   每個產品的 HTML（介紹/規格/外箱/操作）
- _archive/  舊版或下線頁（選用）

## 備份流程（SOP）
1. 到官網後台，打開產品頁 > 內容分頁（如：燈具介紹）
2. 按「原始碼」/「Source」切換成 HTML 模式
3. 全選、複製 HTML
4. 在 product/<產品名稱>/ 裡貼到對應的 .html 檔
5. Commit message 建議：
   - feat: 新增 <產品名稱> 內容
   - fix: 修正 <產品名稱> 文案或格式
   - chore: 小幅更新（無功能變更）
