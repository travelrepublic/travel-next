const moduleAlias = require('module-alias')

const dev = process.env.NODE_ENV !== 'production'

if(!dev) {
    moduleAlias.addAlias('react', 'preact-compat')
    moduleAlias.addAlias('react-dom', 'preact-compat')
}

const next = require('next')
const express = require('express')
const compression = require('compression')

const app = next({dev})
const handle = app.getRequestHandler()

app.prepare()
    .then(() => {
        const server = express()

        server.use(compression());

        server.get('/p/:id', (req, res) => {
            const actualPage = '/post'
            const queryParams = { id: req.params.id }
            app.render(req, res, actualPage, queryParams)
        })

        server.get('*', (req, res) => {
            return handle(req, res)
        })

        server.listen(3000, (err) => {
            if(err) throw err
            console.log('> Ready on http://localhost:3000')
        })
    })
    .catch((ex) => {
        console.error(ex.stack)
        process.exit(1)
    })