const mssql_connect = {
        server: '192.168.2.103',
        port: 49170,
        user: "AnutsayaNgamsuwan",
        password: '123456789',
        database: 'stationary',
        options: {
                encrypt: true,
                enableArithAbort: true
        }
}
exports.mssql_connect = mssql_connect

const mssql_query = async (sql) => {
        let mssql = require('mssql');
        try {
                await mssql.connect(mssql_connect)
                const result = await mssql.query(sql);
                return (result.recordset);
        } catch (err) {
                console.log(err);
        }
}
exports.mssql_query = mssql_query

const SendLine = async (reply_token, messages) => {
        console.log(reply_token);
        let headers = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer w80G9pVYSbXQEFUsKNU9Dk8Qh0zuWN9UarBuL6tiSPesxpdBPghF8VY26mu/O1NomG1r4AzvxrZAXS0vGg3IrfwN6fJaqmFvG5isdTknCYZdystp+fYhtDLmKaxVRf4pjNCW+IpciZGkMgET3BHfXwdB04t89/1O/w1cDnyilFU='
        }
        let body = JSON.stringify({
                replyToken: reply_token,
                messages: [await messages]
        })
        require('request').post({
                url: 'https://api.line.me/v2/bot/message/reply',
                headers: headers,
                body: body
        }, (err, res, body) => {
                console.log('status = ' + res.statusCode);
        });
}
exports.SendLine = SendLine
