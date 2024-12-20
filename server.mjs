import { NotionAPI } from 'notion-client';

import express  from 'express';
import request from 'request';
import cors from 'cors';
import * as gvar from "./src/common/global_variables.js";

const app = express();

const client_id = gvar.NAVER_CLIENT_ID;
const client_secret = gvar.NAVER_CLIENT_SECRET;
// 
app.use(cors());
const notion = new NotionAPI();

app.get('/search/news', function (req, res) {
   const query = encodeURI(req.query.query);
   const api_url = `https://openapi.naver.com/v1/search/news.json?query=${query}&display=10&sort=sim`;
   const options = {
       url: api_url,
       headers: {
           'X-Naver-Client-Id': client_id,
           'X-Naver-Client-Secret': client_secret
       }
   };
   request.get(options, function (error, response, body) {
       if (!error && response.statusCode === 200) {
           res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
           res.end(body);
       } else {
           res.status(response.statusCode).end();
           console.log('error = ' + response.statusCode);
       }
   });
});

app.get('/notion', async (req, res) => {
    const query = req.query.notion;
    res.writeHead(200, {'Content-Type': 'application/json;charset=utf-8'});
    res.end(JSON.stringify(await notion.getPage(query)));
});

app.listen(3001, function () {
   console.log('http://127.0.0.1:3001/search/news?query=경제 app listening on port 3001!');
});

// app.get('/scrape/economic-news', async (req, res) => {
//     try {
//         const url = 'https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=101';
//         const response = await axios.get(url);
//         const soup = new JSSoup(response.data);
//         // 스크래핑할 뉴스 기사 요소 선택
//         const articles = soup.findAll('a', 'cluster_text_headline'); // 적절한 선택자 설정
//         const newsData = articles.map(article => ({
//             title: article.getText().trim(),
//             link: article.attrs.href
//         }));

//         res.json(newsData);
//     } catch (error) {
//         console.error('Error occurred while scraping:', error.message);
//         res.status(500).send('Internal Server Error');
//     }
// });

// app.listen(3000, function () {
//     console.log('http://127.0.0.1:3000/scrape/economic-news app listening on port 3000!');
// });


