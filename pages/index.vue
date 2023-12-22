<script setup>
const { data: posts } = await useAsyncData('latest-posts', () =>
  queryContent('/blog')
    .sort({ data: 1 })
    .limit(3)
    .find()
)
</script>

<template>
    <section>
        <h1 class="text-5xl font-bold mt-20">👋 Furkan KILIÇ</h1>
        <p class="text-base text-gray-900 p-2 italic"> Jr. System Adminastrator - Computer Engineer at Oksid Bilişim</p>
        
    </section>
            <!-- RESPONSİVE YAPMAK İÇİN FLEX-COL MD DA ROW OLDU!! -->
    <section class="flex flex-col md:flex-row">
        <div class="md:aw-3/4">

            <h2 class="text-3xl font-bold mt-8">My Story</h2>
            <p class="text-lg py-2"> 
            I am a Computer Engineer living in istanbul, I am a Jr. System Adminastrator at <strong>Oksid Bilişim</strong> Located on Istanbul
        
        </p>
        
        <p class="text-lg py-2">
            I am fresh graduated and trying to improve myself with System and Coding side. 
            I am creating this webside for fun and improving my coding - system skills
        </p>
    </div>
    <img src="../assets/images/pp.jpg" class="w-1/2 md:max-w-sm p-8 mx-auto rounded-full "/>
 </section>
 <section> 
<h2 class="text-3xl font-bold mt-8"> Latest Blog Post </h2>
<div class="grid md:grid-cols-3 pt-8 gap-10">
      <Post :posts="posts" />
    </div>
 </section>
</template>