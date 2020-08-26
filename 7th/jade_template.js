const express = require("express");  
const bodyParser = require("body-parser");  
const app = express();  
const path = require("path");
const { isNullOrUndefined } = require("util");


const listSample = [
  {id : 1 ,title : 'TITLE1', description : 'DESC1', preview : 'PREVIEW1', pic : 'https://i.picsum.photos/id/1003/1181/1772.jpg?hmac=oN9fHMXiqe9Zq2RM6XT-RVZkojgPnECWwyEF1RvvTZk'},
  {id : 2 ,title : 'TITLE2', description : 'DESC2', preview : 'PREVIEW2' , pic : 'https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk'}
];


function input_List(arg) {
   return arg;
}

app.use(express.json())
app.use(express.urlencoded({ extends: false })) //{ title: 'a', description: 'a', preview: 'a', pic: 'a' }


app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', path.join(__dirname, 'views'));


const viewList = function(req, res){  
  allList = {};
  allList = input_List(listSample);

  res.render('jade_template', allList.toPrimitive);
}

const viewAdd = function(req, res){
  res.render('add');
}

const viewDesc = function(id, res){
  var desc_info = listSample.find(el => el['id'] == id);
  res.render('desc', desc_info);
}

const delList = function(id, res){
  var del_idx = listSample.findIndex(el => el['id'] == id );
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