<script setup lang="ts">

</script>

<template>
    <div class="ax-card ax-contest-detail-box">
        <div class="ax-card-body">
            <div class="ax-contest-info">
                <div style="width: 100%;">
                    <div class="ax-contest-title">
                        比赛比赛
                    </div>
                    <div class="ax-card-body__meta">
                        <n-flex size="small">
                            <n-tag :bordered="false" size="small" :color="{ color: '#00b5ad15', textColor: '#00b5ad' }">
                                个人赛
                            </n-tag>
                            <n-popover trigger="hover">
                                <template #trigger>
                                    <n-tag :bordered="false" type="info" size="small">
                                        结束于3小时前
                                    </n-tag>
                                </template>
                                <span>2024/11/14 23:56</span>
                            </n-popover>
                        </n-flex>
                    </div>
                    <div class="ax-card-body__content">
                        <n-progress type="line" :show-indicator="false" :percentage="60" processing style="margin: .5rem 0 1.5rem 0" />
                    </div>
                    <n-flex>
                        <n-button>报名比赛</n-button>
                        <n-button type="primary">查看榜单</n-button>
                        <n-button type="error">进入比赛</n-button>
                    </n-flex>
                </div>
                <div class="ax-contest-info__image">
                    <img
                        src="https://ctf.u5tc.cn/assets/ef3ee80c56ae6b1e36a73dda2292bf3780bab8d446ffddbd37a35994e1795caa/poster">
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
    padding: 3rem 5rem;
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
    height: 10rem;
    width: 20rem;

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
</style>