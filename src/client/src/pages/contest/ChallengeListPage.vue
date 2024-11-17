<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import {
    AppsOutline
} from '@vicons/ionicons5';

import ProblemTypeTab from '@/components/ProblemTypeTab.vue';

const problemTabs = [{
    name: 'all',
    tab: '全部',
    color: 'blue'
}, {
    name: 'Misc',
    tab: 'Misc',
    color: 'green'
}]

const nowTab = ref(0);

const loading = ref(false)

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
        <problem-type-tab v-model="nowTab" :problem-types="problemTabs" />
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