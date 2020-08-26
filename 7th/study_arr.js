const express = require("express");  
const bodyParser = require("body-parser");  
const app = express();  
const path = require("path");
const { isNullOrUndefined } = require("util");


const listSample = [
  {id : 1 ,title : 'TITLE1', description : 'DESC1', preview : 'PREVIEW1', pic : 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk'},
  {id : 2 ,title : 'TITLE2', description : 'DESC2', preview : 'PREVIEW2' , pic : 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk'}
];

//var allList = {};

function input_List(arg) {
  //var addList = {};
  
  //for (i = 0; i < Object.keys(arg).length; i++){
    ////addList['_title'+(i+1)] = arg[i].title;
    ////addList['_description'+(i+1)] = arg[i].description;
    //addList[arg[i].title] = arg[i].description;
  //}

  return arg;
}

  /*  https://estelar.tistory.com/39 
      https://jamong-icetea.tistory.com/128  
  기본적으로 request body는 미정의 상태. body-parsing 미들웨어 사용으로 정의됨.
  req.body 속성제공, but 기능미포함.
  이 애플리케이션을 통해 들어오는 모든 요청이 있으면 bodyParser가 제일 먼저 실행
  bodyParser는 사용자가 post 방식으로 전송한 데이터가 있다면,
  req객체가 원래 가지고 있지 않았던 body라는 객체를 bodyParser가 추가
  ////extended 옵션 - 중첩된 객체표현 허용여부 > 객체 속 객체 파싱
  ////false : node.js querystring 내장라이브러리 사용
  ////true : qs 외장 라이브러리 사용
  */
//app.use(bodyParser.urlencoded({ extended:  false  }));  
  /*  [Object: null prototype] {
      title: 'a',
      description: 'a',
      preview: 'a',
      pic: 'a'
  }
  */
//app.use(bodyParser.json());  

// Express 4.16.0부터 body-parser 일부기능 내장.
app.use(express.json())
app.use(express.urlencoded({ extends: false })) //{ title: 'a', description: 'a', preview: 'a', pic: 'a' }


app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));


//res.render()의 두 번째 인자로 사용하려는 변수 키 값을 가진 객체를 전달
//res.render('index', { title: 'Express' }); 코드를 노드파일 내에서 작성하고
//jade파일에서는 h1= title 처럼 코드를 작성한다면 결과로는 <h1>Express</h1> 출력
const viewList = function(req, res){  
  allList = {};
  allList = input_List(listSample);

  res.render('jade_template', allList.toPrimitive);
   //res.render('jade_template', {_title1:listSample[0].title, _description1:listSample[0].description ,_title2:listSample[1].title, _description2:listSample[1].description});
}

const viewAdd = function(req, res){
  res.render('add');
}

const viewDesc = function(id, res){
  var desc_info = listSample.find(el => el['id'] == id);
  //res.send(desc_info);
  console.log(desc_info);
  res.render('desc', desc_info);
}

const delList = function(id, res){
  var del_idx = listSample.findIndex(el => el['id'] == id );
  console.log(del_idx);
  listSample.splice(del_idx, 1);
}

app.get('/list',viewList);
app.get('/add',viewAdd);

app.post('/listdesc', (req, res) => {
  if (!isNullOrUndefined(req.body.des_id)){
    viewDesc(req.body.des_id, res);
  }

  if (!isNullOrUndefined(req.body.dlt_id)){
    delList(req.body.dlt_id, res);
  }
  
  res.redirect('/list');
});

app.post('/add_more', (req,res) => { 
  if (req.body.bt == 'submit_add'){
    allList = {};
    listSample.push({id:listSample.length+1, title:req.body.title, description:req.body.description, preview:req.body.preview, pic:req.body.pic });
    allList = input_List(listSample);
  }
  res.redirect('/list');
});  

console.log(listSample);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});