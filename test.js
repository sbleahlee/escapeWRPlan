
const userInfo = [
    {id : '인생', pw : '허무', name : '퇴사'},
    {id : '라면', pw : '짬뽕', name : '피자'},
    {id : '조이', pw : '유이', name : '루이'},
]

var test = userInfo.find(el => el.id == '라면');


console.log('test ', test);
console.log('id ', test.id);
console.log('pw ', test.pw);
console.log('name ', test.name);

