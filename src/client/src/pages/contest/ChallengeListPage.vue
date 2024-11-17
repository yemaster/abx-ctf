<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue';
import {
    AppsOutline
} from '@vicons/ionicons5';

const problemTabs = [{
    name: 'all',
    tab: '全部',
    color: 'blue'
}, {
    name: 'Misc',
    tab: 'Misc',
    color: 'green'
}, {
    name: 'Misc',
    tab: 'Misc',
    color: 'green'
}, {
    name: 'Misc',
    tab: 'Misc',
    color: 'green'
}, {
    name: 'Misc',
    tab: 'Misc',
    color: 'green'
}, {
    name: 'Misc',
    tab: 'Misc',
    color: 'green'
}, {
    name: 'Misc',
    tab: 'Misc',
    color: 'green'
}, {
    name: 'Misc',
    tab: 'Misc',
    color: 'green'
}, {
    name: 'Misc',
    tab: 'Misc',
    color: 'green'
}]

const nowTab = ref(0);

function changeTab(id: number) {
    nowTab.value = id;
}

const problemTabScrollContainer = ref();
const problemTabLeftShadow = ref(false), problemTabRightShadow = ref(false);

function checkScrollShadow() {
    const container = problemTabScrollContainer.value;
    const scrollLeft = container.scrollLeft;
    const maxScrollLeft = container.scrollWidth - container.clientWidth;

    problemTabLeftShadow.value = scrollLeft > 0;
    problemTabRightShadow.value = scrollLeft < maxScrollLeft;
}

onMounted(() => {
    problemTabScrollContainer.value.addEventListener('scroll', checkScrollShadow);
    checkScrollShadow();
});

onBeforeUnmount(() => {
    problemTabScrollContainer.value.removeEventListener('scroll', checkScrollShadow);
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
        <div class="ax-card-problem-tab"
            :class="{ 'left-shadow': problemTabLeftShadow, 'right-shadow': problemTabRightShadow }">
            <div ref="problemTabScrollContainer" style="overflow: auto; scrollbar-width: none;">
                <div class="ax-navbar">
                    <div class="ax-navbar__left">
                        <div v-for="(pi, id) in problemTabs" :key="id" class="ax-navbar-item ax-problem-tab-item"
                            :class="pi.color">
                            <div class="ax-navbar-item__link" :class="{ 'ax-navbar-item__link-active': id === nowTab }"
                                @click="changeTab(id)">
                                <n-icon>
                                    <AppsOutline />
                                </n-icon>{{ pi.tab }}
                            </div>
                        </div>
                    </div>
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

.ax-card-problem-tab {
    position: relative;
    width: 100%;
    box-sizing: border-box;
    overflow: auto;

    padding: 0 1.5rem;
}

.ax-card-problem-tab::before {
    content: '';
    position: absolute;
    left: 1.5rem;
    top: 0;
    bottom: 0;
    width: 1.5rem;
    z-index: 233;
}

.ax-card-problem-tab.left-shadow::before {
    box-shadow: inset 9px 0 7px -6px rgba(0, 0, 0, .2)
}

.ax-card-problem-tab::after {
    content: '';
    position: absolute;
    right: 1.5rem;
    top: 0;
    bottom: 0;
    width: 1.5rem;
    z-index: 233;
}

.ax-card-problem-tab.right-shadow::after {
    box-shadow: inset -9px 0 7px -6px rgba(0, 0, 0, .2)
}

.ax-problem-tab-item .ax-navbar-item__link {
    border-top-left-radius: .5rem;
    border-top-right-radius: .5rem;

    padding: .75rem 1.5rem;

    user-select: none;
    cursor: pointer;
}
</style>