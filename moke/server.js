let http = require('http');
let url = require('url');
let fs = require('fs');
let sliders = require('./slider');
function read(cb) {
    fs.readFile('./good.json', 'utf8', (err, data) => {
        if (err || data.length === 0) {//文件错误或者没长度
            cb([]);
        } else {
            cb(JSON.parse(data));
        }
    })
}
function write(data, cb) {
    fs.writeFile('./good.json', JSON.stringify(data), 'utf8', cb)
}

let offset = 6;//定义每页数据显示六条
http.createServer((req, res) => {
    // 设置哪个域名可以跨域
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    // res.setHeader("X-Powered-By", ' 3.2.1')
    // 如果是OPTIONS  直接返回成功
    if (req.method == 'OPTIONS') return res.end('200')

    res.setHeader('content-type', 'text/json;charset=utf8');
    let { pathname, query } = url.parse(req.url, true);

    // 轮播图接口
    if (pathname === '/slider') {
        setTimeout(() => {
            res.end(JSON.stringify(sliders));
        }, 3000);
        return;
    }

    // 首页列表接口
    if (pathname === '/new') {
        read((data) => {
            let homeList = data.reverse().slice(0, 6);//reverse倒叙    slice截取
            res.end(JSON.stringify(homeList));
        })
        return;
    }

    // 列表页面接口
    if (pathname === '/list') {
        let id = parseInt(query.id);

        // console.log(req.method, '请求方式')

        switch (req.method) {
            // 删除商品接口
            case 'DELETE':
                if (id) {
                    read(data => {
                        // 把不等于传递过来的id的值变成一个新的data
                        data = data.filter(item => item.id !== id);
                        write(data, () => {
                            res.end(JSON.stringify({}));
                        })
                    })
                }
                break;
            // 修改商品接口
            case 'PUT':
                let str = '';
                req.on('data', chunk => {
                    str += chunk
                })
                req.on('end', () => {
                    let good = JSON.parse(str);
                    // console.log(str);
                    read(data => {
                        let goods = data.map(item => {
                            if (item.id == id) {
                                return good;
                            }
                            return item;
                        })
                        write(goods, () => {
                            res.end(JSON.stringify(good));
                        })
                    })
                })
                break;
            // 添加商品接口
            case 'POST':
                let str1 = '';
                req.on('data', chunk => {
                    str1 += chunk
                })
                req.on('end', () => {
                    let addgood = JSON.parse(str1);
                    // console.log(addgood);//添加的商品
                    read(data => {
                        // 给添加的商品加一个id，如果data是空为1，否则id为最后一项的id加1
                        addgood.id = data.length ? data[data.length - 1].id + 1 : 1;
                        data = [...data, addgood];
                        // console.log(data);//全部商品
                        write(data, () => {
                            res.end(JSON.stringify(addgood));
                        })
                    })
                })
                break;
        }

        read((data) => {
            if (id) {
                let good = data.find(item => item.id === id);
                res.end(JSON.stringify(good));
            } else {
                res.end(JSON.stringify(data));
            }
        })
        return;
    }

    // 分页接口
    if (pathname === '/page') {
        let page = parseInt(query.page);
        page = page - 1;
        //默认有下一页
        let hasmore = true;
        read((data) => {
            let pagedata = data.slice(page * offset, page * offset + offset);
            let lastindex = page * offset + offset;
            if (lastindex > data.length) {
                hasmore = false;
            }
            res.end(JSON.stringify({ data: pagedata, hasmore }));
        })
        return;
    }

    res.end('404');
}).listen(3000, () => {
    console.log("3000启动成功");
});