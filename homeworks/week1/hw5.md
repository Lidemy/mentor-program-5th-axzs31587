## 請解釋後端與前端的差異。
前端指的是我們看的到的頁面的部分，像是以瀏覽器來說就是 html、美化網頁的 css 和負責與頁面做互動及做資料溝通的 JavaScript；
後端指的是我們看不到的部分，像是電腦送出 request 給 server 後，server 去問資料庫有沒有這個 request 需要的資料，資料庫找到資料後再回傳給 server，server 再回傳 response 給電腦的這些部分。

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
1. 瀏覽器向 DNS server 詢問 Google.com 的 IP 位置
2. DNS server 回覆瀏覽器 Google.com 的 IP 位置
3. 瀏覽器通過作業系統再通過網路卡傳送 request 到上面得到的 IP 位置
4. 這個 IP 位置的 server（Google server）收到 request
5. Google server 去問資料庫，查詢我們要找的關鍵字（JavaScript）
6. 資料庫找到資料，回傳給 Google server
7. Google server 回傳 response 給我電腦的網路卡
8. 網路卡傳 response 給作業系統，作業系統解析回傳的資訊，並由瀏覽器顯示出來

## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用
1. file：檢查檔案類型
   `hw1.md: UTF-8 Unicode text, with CRLF line terminators`
2. tail：顯示檔案最後幾行內容
   tail -f 檔案名稱：持續顯示更新內容（常用於 web server 看 log debug）。
3. history：檢視 terminal 的紀錄
   history | grep 關鍵字：搜尋含有 "關鍵字" 的紀錄。
附註：[參考網址](https://blog.techbridge.cc/2017/12/23/linux-commnd-line-tutorial/)