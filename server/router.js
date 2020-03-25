/*
此方法接受两个对象个参数：
httppbj: 含有请求对象和响应对象
urlobj: 方法类型，路径，参数
*/
function router(httpObj, urlObj) {
    // // 通过解构把参数对象中的所有属性全部提取出来
    // var { response } = httpObj;
    // var { method, pathname, querydata } = urlObj;

    // // 开启具体的路由处理 
    // console.info(urlObj);
    // /*
    // 打印：
    //   {
    //     method: 'GET',
    //     pathname: '/user',
    //     querydata: { name: 'zhangsan', sex: 'nan' } 
    //   }
    
    // {
    //     method: 'POST', 
    //     pathname: '/user', 
    //     querydata: '{"opt":"add"}'
    // }
    // */

    // // 1.当用户是get请求，且路径为/user时，返回字符串：【你请求的是用户数据】
    // if (method == "GET" && pathname == "/user") {
    //     // response.end("【你请求的是用户数据】" + querydata.name);
    //     // 返回json数据
    //     var obj = { name: "zs", sex: "man" };
    //     response.end(JSON.stringify(obj));

    //     // 2.当用户是post请求，为根目录，参数为opt=add，返回字符串：【你想执行添加操作】
    // } else if (method == "POST") {
    //     querydata = JSON.parse(querydata);
    //     console.log(querydata) // { opt: 'add' }
    //     if (querydata["opt"] == "add") {
    //         response.end("【你想执行添加操作】");
    //     }
    // }
    var obj = {
        "name": '猪八戒',
        "sex": 'nan'
        };
    var arr = [89898989, obj];
    return arr
}


module.exports = router;