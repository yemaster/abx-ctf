<script setup lang="ts">
import { defineModel, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const showLoginModal = defineModel({ type: Boolean })

const loginData = ref({
    username: '',
    password: '',
})

function closeLoginModal() {
    showLoginModal.value = false
}

function gotoRegister() {
    closeLoginModal()
    router.push('/register')
}
</script>

<template>
    <n-modal v-model:show="showLoginModal">
        <n-card style="width: 30rem" title="登录" :bordered="false" size="medium" role="dialog" aria-modal="true">
            <n-form ref="formRef">
                <n-form-item path="username" label="用户名">
                    <n-input type="text" v-model:value="loginData.username" placeholder="用户名" />
                </n-form-item>
                <n-form-item path="password" label="密码">
                    <n-input type="password" v-model:value="loginData.password" show-password-on="mousedown"
                        placeholder="密码" />
                </n-form-item>
                <n-flex justify="space-between">
                    <span>没有账号？ <n-a @click="gotoRegister">注册账号</n-a></span>
                </n-flex>
            </n-form>
            <template #footer>
                <n-flex>
                    <n-button type="primary">
                        登录
                    </n-button>
                    <n-button type="primary" ghost @click="closeLoginModal">
                        取消
                    </n-button>
                </n-flex>
            </template>
        </n-card>
    </n-modal>
</template>
