<template>
<div class="post">
    <div class="title">{{post.id}} {{post.name}}</div>
     {{post.body}}
</div>  
</template>

<script>
export default {
    props: ["post"]
}
</script>

<style>
.post {
    display: block;
    width: 400px;
    margin: 10px auto;
    margin-bottom: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.title {
    font-weight: bold;
}
</style>