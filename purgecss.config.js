module.exports = {
    content: ['index.html'],
    css: [
        './css/bootstrap.css'
    ],
    keyframes:true,
    output:'./css',
    rejected:true,
    variables:true,
  }
  const purgecss = await new PurgeCSS().purge('./purgecss.config.js')