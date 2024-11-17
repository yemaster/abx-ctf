<script setup lang="ts">

</script>

<template>
    <div class="ax-ranking-image">
        这里应该有张图
    </div>
    <div class="ax-ranking-table">
        <n-table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>用户名</th>
                    <th>rks</th>
                    <th>解题数</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>admin</td>
                    <td>1000</td>
                    <td>100</td>
                </tr>
            </tbody>
        </n-table>
    </div>
</template>

<style scoped>
.ax-ranking-image {
    width: 100%;
    height: 20rem;
    background-color: #f0f0f0;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>