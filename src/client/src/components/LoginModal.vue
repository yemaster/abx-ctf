<script setup lang="ts">
import { defineModel } from 'vue'

const showLoginModal = defineModel({ type: Boolean })

function closeLoginModal() {
    showLoginModal.value = false
}
</script>

<template>
    <n-modal v-model:show="showLoginModal">
        <n-card style="width: 30rem" title="登录" :bordered="false" size="medium" role="dialog" aria-modal="true">
            <n-flex vertical>
            </n-flex>
            <n-form ref="formRef">
                <n-form-item path="age" label="用户名">
                    <n-input type="text" placeholder="用户名" />
                </n-form-item>
                <n-form-item path="password" label="密码">
                    <n-input type="password" show-password-on="mousedown" placeholder="密码" />
                </n-form-item>
                <n-flex>
                    <n-button type="primary">
                        登录
                    </n-button>
                    <n-button type="primary" ghost @click="closeLoginModal">
                        取消
                    </n-button>
                </n-flex>
            </n-form>
        </n-card>
    </n-modal>
</template>
