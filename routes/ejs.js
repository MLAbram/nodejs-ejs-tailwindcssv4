const express = require('express'), app = express()

app.get('/', (req, res) => {
    return res.status(200).render('index', {
        // page_title: process.env.COMPANY_NAME,
        // navbar_title: process.env.COMPANY_NAME,
        // breadcrumb: '<div class="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item active" aria-current="page">Home</li></ol></div>'
    })
})

module.exports = app