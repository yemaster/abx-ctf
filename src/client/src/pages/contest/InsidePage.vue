<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
    <div class="ax-row">
        <div class="ax-column-right">
            <div class="ax-card">
                <n-list hoverable clickable>
                    <n-list-item>
                        题目
                    </n-list-item>
                    <n-list-item>
                        排行
                    </n-list-item>
                    <n-list-item>
                        管理
                    </n-list-item>
                </n-list>
            </div>
        </div>
        <div class="ax-column-left">
            <router-view />
        </div>
    </div>
</template>