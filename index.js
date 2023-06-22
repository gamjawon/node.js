const express = require('express')
const axios = require('axios')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/sound/:name', (req, res) => {
    const {name} = req.params

    if(name == 'dog') {
        res.json({'sound': '멍멍'})
    } else if(name == 'cat') {
        res.json({'sound': '야옹', catPicture})
    } else if(name == 'pig') {
        res.json({'sound': '꿀꿀'})
    } else {
        res.json({'sound': '알수없음'})
    }
})
async function catPicture() {
    try {
      const response = await axios.get('https://api.thecatapi.com/v1/images/search');
      const catPictureUrl = response.data[0].url;
      return catPictureUrl;
    } catch (error) {
      console.error('고양이 사진을 가져오는 동안 오류가 발생했습니다:', error);
      return null;
    }
  }

app.listen(3000)
