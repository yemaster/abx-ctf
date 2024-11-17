<script setup lang="ts">
import { ref } from 'vue'

const registerData = ref({
    username: '',
    password: '',
    email: '',
    nickname: '',
})
</script>

<template>
    <div class="ax-card">
        <div class="ax-card-body">
            <n-h1>注册<small>Register</small></n-h1>
            <n-form>
                <n-form-item path="username" label="用户名">
                    <n-input type="text" v-model:value="registerData.username" placeholder="用户名" />
                </n-form-item>
                <n-form-item path="password" label="密码">
                    <n-input type="password" v-model:value="registerData.password" show-password-on="mousedown"
                        placeholder="密码" />
                </n-form-item>
                <n-form-item path="confirmPassword" label="确认密码">
                    <n-input type="password" placeholder="确认密码" />
                </n-form-item>
                <n-form-item path="email" label="邮箱">
                    <n-input type="email" v-model:value="registerData.email" placeholder="邮箱" />
                </n-form-item>
                <n-form-item path="nickname" label="昵称">
                    <n-input type="text" v-model:value="registerData.nickname" placeholder="昵称" />
                </n-form-item>
                <n-flex justify="space-between">
                    <n-button type="primary">
                        注册
                    </n-button>
                </n-flex>
            </n-form>
        </div>
    </div>
</template>

<style>
small {
    color: #666;
    margin-left: 0.5rem;
}
</style>