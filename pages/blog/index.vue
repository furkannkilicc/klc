
<!-- BÜTÜN POSTLARI GÖSTERMEK İÇİN -->
<script setup>
const { data: posts } = await useAsyncData('posts', () => 
    queryContent('/blog').find()
);

</script>

<template>
    <h1 class="text-3xl my-8 "> BLOG POSTS</h1>

   <h3>Hello</h3>
    You can read my latest blog posts on this page.
        Enjoy your reading. I appreciate any feedback at <small class="font-semibold mx-2"> <a href="mailto:kilic.furkank@gmail.com">kilic.furkank@gmail.com</a></small>



    <section class="grid md:grid-cols-3 mt-8 gap-10">
        <Post :posts="posts"/>

        <!-- <ul>
            <li v-for="post in posts" :key="post._id" class="my-8 py-4 border-b-2">
                <nuxt-link :to="post._path" class="text-blue-500 text-2xl"> {{ post.title }}</nuxt-link>
                <p class="text-gray-500"> {{ post.description }}</p>

            </li>

        </ul> -->
    </section>
</template>