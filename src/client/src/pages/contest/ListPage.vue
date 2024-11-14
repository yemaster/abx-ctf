<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
    document.title = `竞赛 - Abstrax CTF`
})
</script>

<template>
    <div class="ax-card">
        <div class="ax-card-small-body">
            <div class="ax-card-body__header">
                筛选
            </div>
            <div class="ax-card-body__content">
                233
            </div>
        </div>
    </div>
    <div class="ax-height-1"></div>
    <div class="ax-contest-list">
        <div class="ax-contest-card" v-for="i in 10">
            <div class="ax-contest-image">
                <img src="https://ctf.u5tc.cn/assets/ef3ee80c56ae6b1e36a73dda2292bf3780bab8d446ffddbd37a35994e1795caa/poster">
            </div>
            <div class="ax-card-body">
                <div class="ax-card-body__header">
                    欢迎来到 Abstrax CTF
                </div>
                <div class="ax-card-body__content">
                    欢迎来到 Abstrax CTF
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.ax-contest-list {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.ax-contest-card {
    display: flex;

    width: 100%;
    height: 10rem;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
}

.ax-contest-image {
    width: 20rem;
    height: 10rem;
}

.ax-contest-image img {
    width: 100%;
    height: 100%;
}
</style>