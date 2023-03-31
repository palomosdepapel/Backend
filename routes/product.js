const express = require('express');
const {
    getId,
    cleanHtml,
    convertBool,
    checkboxBool,
    safeParseInt,
    getImages
} = require('../lib/common');

const fs = require('fs');
const path = require('path');
const router = express.Router();


router.get('/products/:page?', restrict, async (req, res, next) => {
    let pageNum = 1;
    if(req.params.page){
        pageNum = req.params.page;
    }

    // Get our paginated data
    const products = await paginateData(false, req, pageNum, 'products', {}, { productAddedDate: -1 });

    res.render('products', {
        title: 'Cart - Products',
        results: products.data,
        totalItemCount: products.totalItems,
        pageNum,
        paginateUrl: 'admin/products',
        resultType: 'top',
        session: req.session,
        admin: true,
        config: req.app.config,
        message: clearSessionValue(req.session, 'message'),
        messageType: clearSessionValue(req.session, 'messageType'),
        helpers: req.handlebars.helpers
    });
});

// insert form
router.get('/admin/product/new', restrict, checkAccess, (req, res) => {
    res.render('product-new', {
        title: 'New product',
        session: req.session,
        productTitle: clearSessionValue(req.session, 'productTitle'),
        productDescription: clearSessionValue(req.session, 'productDescription'),
        productPrice: clearSessionValue(req.session, 'productPrice'),
        productPermalink: clearSessionValue(req.session, 'productPermalink'),
        message: clearSessionValue(req.session, 'message'),
        messageType: clearSessionValue(req.session, 'messageType'),
        editor: true,
        admin: true,
        helpers: req.handlebars.helpers,
        config: req.app.config
    });
});