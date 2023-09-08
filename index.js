const puppeteer = require('puppeteer')


async function tes(){
    const browser = await puppeteer.launch({
        args: ['--no-sandbox'],
        headless: true,
    })
    const page = await browser.newPage()
    
    await browser.close()
    console.log('finish')
}

// describe(`Testing puperr,`, async() => {
//     const browser = await puppeteer.launch({
//         args: ['--no-sandbox'],
//         headless: true,
//     })
//     const page = await browser.newPage()
//     console.log('finish')
// })
// module.exports = { tes }


tes();
