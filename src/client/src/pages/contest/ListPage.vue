<script setup lang="ts">
import { onMounted, ref } from 'vue'

const loading = ref(false)

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
        <div class="ax-contest-card" v-if="loading" v-for="i in 5">
            <div class="ax-contest-image">
                <n-skeleton height="100%" />
            </div>
            <div class="ax-card-body" style="width: 100%">
                <div class="ax-card-body__header">
                    <n-skeleton height="1.5rem" width="50%" />
                </div>
                <div class="ax-card-body__content">
                    <n-skeleton height="1rem" width="80%" />
                </div>
            </div>
        </div>
        <router-link class="ax-contest-card" to="/contest/1/preview" v-else v-for="i in 5">
            <div class="ax-contest-image">
                <img
                    src="https://ctf.u5tc.cn/assets/ef3ee80c56ae6b1e36a73dda2292bf3780bab8d446ffddbd37a35994e1795caa/poster">
            </div>
            <div class="ax-card-body">
                <div class="ax-card-body__header">
                    欢迎来到 Abstrax CTF
                </div>
                <div class="ax-card-body__meta">
                    <n-flex size="small">
                        <n-tag :bordered="false" size="small" :color="{ color: '#00b5ad15', textColor: '#00b5ad' }">
                            个人赛
                        </n-tag>
                        <n-popover trigger="hover">
                            <template #trigger>
                                <n-tag :bordered="false" type="info" size="small">
                                    结束于3小时前
                                </n-tag>
                            </template>
                            <span>2024/11/14 23:56</span>
                        </n-popover>
                    </n-flex>
                </div>
                <div class="ax-card-body__content">
                    欢迎来到 Abstrax CTF
                </div>
            </div>
        </router-link>
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
    transition: all .2s;
}

.ax-contest-card:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, .2);
}

.ax-contest-image {
    width: 20rem;
    height: 10rem;
}

.ax-contest-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
</style>