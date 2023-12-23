import Highlight from 'C:/Users/pc/Desktop/klc/node_modules/@nuxtjs/mdc/dist/runtime/shiki/index.mjs'

export const remarkPlugins = {
}

export const rehypePlugins = {
  'highlight': { instance: Highlight, options: {"src":"C:/Users/pc/Desktop/klc/node_modules/@nuxtjs/mdc/dist/runtime/shiki/index.mjs"} },
}

export const highlight = {"theme":"nord","preload":["ts","js","css","java","json","vue"]}