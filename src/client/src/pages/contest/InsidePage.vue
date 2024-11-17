<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
    <div class="ax-row">
        <div class="ax-column-right" style="width: 20rem">
            <!--div class="ax-card">
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
            </div-->
            <div class="ax-card">
                <div class="ax-card-small-body">
                    <n-tabs type="line" size="small" animated>
                        <n-tab-pane name="all" tab="全部">
                            66666
                        </n-tab-pane>
                        <n-tab-pane name="notifications" tab="通知">
                            ababab
                        </n-tab-pane>
                        <n-tab-pane name="status" tab="动态">
                            七aaa
                        </n-tab-pane>
                        <n-tab-pane name="problems" tab="提醒">
                            七aaa
                        </n-tab-pane>
                    </n-tabs>
                </div>
            </div>
        </div>
        <div class="ax-column-left">
            <router-view />
        </div>
    </div>
</template>