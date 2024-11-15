<script setup lang="ts">
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
</style>