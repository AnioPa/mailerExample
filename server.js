const app = require('./index');

app.set('port', process.env.port || 7777);

const server = app.listen(app.get('port'), () => {
    console.log(`Listen on ${server.address().port}`)
})
