<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(async () => {
    document.title = `首页 - Abstrax CTF`;
})
</script>

<template>
    <div class="ax-row">
        <div class="ax-column-left">
            <div class="ax-card">
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
        <div class="ax-column-right">
            <div class="ax-header-2">
                近期比赛
            </div>
            <router-link class="ax-contest-box" to="/contest/1">
                <div class="ax-contest-box__image">
                    <img
                        src="https://ctf.u5tc.cn/assets/ef3ee80c56ae6b1e36a73dda2292bf3780bab8d446ffddbd37a35994e1795caa/poster">
                </div>
                <div class="ax-card-body">
                    <div class="ax-card-body__header">
                        测试比赛
                    </div>
                    <div class="ax-card-body__meta">
                        <n-flex size="small">
                            <n-tag :bordered="false" size="small" :color="{ color: '#a333c815', textColor: '#a333c8' }">
                                团队赛
                            </n-tag>
                            <n-popover trigger="hover">
                                <template #trigger>
                                    <n-tag :bordered="false" type="warning" size="small">
                                        开始于3小时后
                                    </n-tag>
                                </template>
                                <span>2024/11/14 23:56</span>
                            </n-popover>
                        </n-flex>
                    </div>
                </div>
            </router-link>
            <router-link class="ax-contest-box" to="/contest/1">
                <div class="ax-contest-box__image">
                    <img
                        src="https://ctf.u5tc.cn/assets/ef3ee80c56ae6b1e36a73dda2292bf3780bab8d446ffddbd37a35994e1795caa/poster">
                </div>
                <div class="ax-card-body">
                    <div class="ax-card-body__header">
                        测试比赛
                    </div>
                    <div class="ax-card-body__meta">
                        <n-flex size="small">
                            <n-tag :bordered="false" size="small" :color="{ color: '#00b5ad15', textColor: '#00b5ad' }">
                                个人赛
                            </n-tag>
                            <n-popover trigger="hover">
                                <template #trigger>
                                    <n-tag :bordered="false" type="error" size="small">
                                        3小时后结束
                                    </n-tag>
                                </template>
                                <span>2024/11/14 23:56</span>
                            </n-popover>
                        </n-flex>
                    </div>
                </div>
            </router-link>
            <router-link class="ax-contest-box" to="/contest/1">
                <div class="ax-contest-box__image">
                    <img
                        src="https://ctf.u5tc.cn/assets/ef3ee80c56ae6b1e36a73dda2292bf3780bab8d446ffddbd37a35994e1795caa/poster">
                </div>
                <div class="ax-card-body">
                    <div class="ax-card-body__header">
                        测试比赛
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
                </div>
            </router-link>
        </div>
    </div>
</template>

<style scoped>
.ax-contest-box {
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
    transition: all .2s;
}

.ax-contest-box:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.ax-contest-box .ax-card-body {
    padding: 1rem 1.5rem;
}

.ax-contest-box__image {
    width: 100%;
    height: 8rem;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    overflow: hidden;
}

.ax-contest-box__image img {
    width: 100%;
    height: 8rem;
    overflow: hidden;
}
</style>