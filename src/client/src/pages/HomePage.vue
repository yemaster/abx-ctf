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
    </div>
</template>
