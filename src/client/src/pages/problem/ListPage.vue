<script setup lang="ts">
import { onMounted, ref } from 'vue'

const loading = ref(false)

onMounted(() => {
    document.title = `题库 - Abstrax CTF`
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
    <div class="ax-problem-list">
        <div class="ax-card" v-if="loading" v-for="i in 5">
            <div class="ax-card-body">
                <div class="ax-card-body__header">
                    <n-skeleton height="1.5rem" width="100%" />
                </div>
                <div class="ax-card-body__content">
                    <n-skeleton height="1rem" width="80%" />
                </div>
            </div>
        </div>
        <div class="ax-card" v-else v-for="i in 5">
            <div class="ax-card-body">
                <div class="ax-card-body__header">
                    阿巴阿巴
                </div>
                <div class="ax-card-body__content">
                    题目描述题目描述题目描述
                </div>
            </div>
        </div>
    </div>
</template>
  