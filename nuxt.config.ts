// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   ssr: false,
  modules:[
    '@nuxtjs/tailwindcss', 
    'nuxt-icon', 
    '@nuxt/content'
  ],
  content:{
    highlight:{
      theme: 'nord',
      preload:['ts','js','css','java','json','vue']
      //code blockları teması
    }
  }
  


})
  // devtools: { enabled: true },
