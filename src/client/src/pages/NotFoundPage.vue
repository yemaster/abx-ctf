<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
    document.title = `404 - Abstrax CTF`
})
</script>

<template>
    <div class="ax-error-center">
        <div class="ax-error-box">
            <div class="ax-error-header">
                404
            </div>
            <div class="ax-error-description">
                Not Found
            </div>
        </div>
    </div>
</template>

<style scoped>
.ax-error-center {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: calc(100vh - 16.5rem);

    text-align: center;
}

.ax-error-header {
    font-size: 5rem;
    line-height: 5rem;

    margin-bottom: .25rem;
}

.ax-error-description {
    font-size: 1.25rem;
}
</style>