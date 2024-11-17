<script setup lang="ts">
import { onMounted, ref } from 'vue'

import ProblemTypeTab from '@/components/ProblemTypeTab.vue';

const loading = ref(false)

const currentTab = ref(0)

const showProblemModal = ref(false)
const showProblemInfo = ref({
    id: 1,
    title: '题目标题',
    description: '题目描述',
    hint: [],
    files: [],
    points: 500,
    container: null,
})

function showProblem(id: number) {
    showProblemModal.value = true
}

onMounted(() => {
    document.title = `题库 - Abstrax CTF`
});
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
        <problem-type-tab v-model="currentTab" />
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
        <div class="ax-card" v-else v-for="i in 5" @click="showProblem(i)">
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
    <n-modal v-model:show="showProblemModal">
        <n-card style="width: 30rem" :title="showProblemInfo.title" :bordered="false" size="medium" role="dialog"
            aria-modal="true">
            <template #header-extra>
                {{ showProblemInfo.points }} pts
            </template>
            <div v-html="showProblemInfo.description"></div>
            <template #footer>
                <n-input-group>
                    <n-input placeholder="flag{xxx}" />
                    <n-button type="primary">
                        提交flag！
                    </n-button>
                </n-input-group>
            </template>
        </n-card>
    </n-modal>
</template>