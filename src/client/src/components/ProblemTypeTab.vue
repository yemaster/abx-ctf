<script lang="ts" setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import { AppsOutline } from '@vicons/ionicons5';

const currentTab = defineModel({ type: Number })
interface ProblemTab {
    name: string;
    tab: string;
    color: string;
}

const props = defineProps<{
    problemTypes: ProblemTab[];
}>();

const defaultProblemTabs: ProblemTab[] = [
    {
        name: 'all',
        tab: '全部',
        color: 'blue',
    },
];

const problemTabs = props.problemTypes ?? defaultProblemTabs;

function changeTab(id: number) {
    currentTab.value = id;
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
    <div class="ax-card-problem-tab"
        :class="{ 'left-shadow': problemTabLeftShadow, 'right-shadow': problemTabRightShadow }">
        <div ref="problemTabScrollContainer" style="overflow: auto; scrollbar-width: none;">
            <div class="ax-navbar">
                <div class="ax-navbar__left">
                    <div v-for="(pi, id) in problemTabs" :key="id" class="ax-navbar-item ax-problem-tab-item"
                        :class="pi.color">
                        <div class="ax-navbar-item__link" :class="{ 'ax-navbar-item__link-active': id === currentTab }"
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
</template>

<style scoped>
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
