<script setup lang="ts">
import { onMounted } from 'vue'

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
        <div class="ax-card" v-for="i in 10">
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
  