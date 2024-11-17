<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const contestId = route.params.id

const countdownSetter = ref<number | null>(null)
// const contestCountdown = ref(0)
const contestCountdown = ref(Math.floor(Math.random() * 300))
const endLabel = ref("结束")

function countdown() {
    if (contestCountdown.value > 0) {
        contestCountdown.value--
    }
}

function pad(num: number, size: number, char: string) {
    let s = num.toString()
    while (s.length < size) {
        s = char + s
    }
    return s
}

function timeFormatter(time: number) {
    const days = Math.floor(time / 86400)
    if (days > 0) {
        return `${days}天`
    }
    const hours = pad(Math.floor((time % 86400) / 3600), 2, '0')
    const minutes = pad(Math.floor((time % 3600) / 60), 2, '0')
    const seconds = pad(time % 60, 2, '0')

    return `${hours}:${minutes}:${seconds}`
}

function enterContest() {
    router.push(`/contest/${contestId}/challenges`)
}

onMounted(() => {
    countdownSetter.value = setInterval(countdown, 1000);
});

onBeforeUnmount(() => {
    if (countdownSetter.value) {
        clearInterval(countdownSetter.value);
    }
});
</script>

<template>
    <div class="ax-card ax-contest-detail-box">
        <div class="ax-card-body">
            <div class="ax-contest-info">
                <div class="ax-contest-info__image">
                    <img
                        src="https://ctf.u5tc.cn/assets/ef3ee80c56ae6b1e36a73dda2292bf3780bab8d446ffddbd37a35994e1795caa/poster">
                </div>
                <div style="width: 100%;">
                    <n-flex justify="space-between" align="center">
                        <div>
                            <div class="ax-contest-title">
                                比赛比赛
                            </div>
                            <div class="ax-card-body__meta">
                                <n-flex size="small">
                                    <n-tag :bordered="false" :color="{ color: '#00b5ad15', textColor: '#00b5ad' }">
                                        个人赛
                                    </n-tag>
                                    <n-tag :bordered="false" type="error">
                                        233 支队伍已报名
                                    </n-tag>
                                </n-flex>
                            </div>
                        </div>
                        <div class="ax-contest-countdown">
                            <n-flex vertical :size="0">
                                <div class="ax-contest-countdown__number">
                                    <template v-if="contestCountdown > 0">{{ timeFormatter(contestCountdown) }}</template>
                                    <template v-else>已{{ endLabel }}</template>
                                </div>
                                <div class="ax-contest-countdown__label" v-if="contestCountdown > 0">后{{ endLabel }}</div>
                            </n-flex>
                        </div>
                    </n-flex>
                    <div class="ax-card-body__content">
                        <n-popover trigger="hover">
                            <template #trigger>
                                <n-progress type="line" :show-indicator="false" :percentage="60" processing
                                    style="margin: .5rem 0 1.5rem 0" />
                            </template>
                            <span>2024/11/14 23:56 - 2024/11/15 23:08</span>
                        </n-popover>
                    </div>
                    <n-flex>
                        <n-button>报名比赛</n-button>
                        <n-button type="primary">查看榜单</n-button>
                        <n-button type="error" @click="enterContest">进入比赛</n-button>
                    </n-flex>
                </div>
            </div>
            <div class="ax-divider" />
            <div class="ax-contest-details ax-typo">
                <h2>xxx比赛</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
.ax-contest-detail-box .ax-card-body {
    padding: 3rem 4rem;
}

.ax-contest-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
}

.ax-contest-info .ax-contest-title {
    font-size: 2rem;
}

.ax-contest-info .ax-contest-info__image {
    max-width: 50%;
    height: 12rem;
    width: 24rem;

    text-align: center;
}

.ax-contest-info .ax-contest-info__image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.ax-contest-details {
    color: #555;
}

.ax-contest-countdown {
    text-align: center;
    line-height: 1.2;
}

.ax-contest-countdown .ax-contest-countdown__number {
    font-size: 2rem;
}

.ax-contest-countdown .ax-contest-countdown__label {
    font-size: 1rem;
}
</style>