<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'

import {
	HomeOutline,
	AppsOutline,
	TrophyOutline,
	PeopleOutline,
	PersonOutline,
	MenuOutline,
} from '@vicons/ionicons5'

import LoginModal from '@/components/LoginModal.vue'

const showLoginModal = ref(false)

function showLogin() {
    showLoginModal.value = true
}

const navbarEle = ref();
const navbarMode = ref(0);

function onScroll() {
    if (navbarEle.value.getBoundingClientRect().top) {
        navbarMode.value = 0;
    }
    else {
        navbarMode.value = 1;
    }
}

onMounted(() => {
    document.addEventListener("scroll", onScroll)
    onScroll()
})

onBeforeUnmount(() => {
    document.removeEventListener("scroll", onScroll)
})
</script>

<template>
    <div class="ax-page-main__navbar" :class="{ 'navbar-mode-2': navbarMode }" ref="navbarEle">
        <div class="ax-container" style="height: 100%">
            <div class="ax-navbar">
                <div class="ax-navbar__left">
                    <div class="ax-navbar-item">
                        <router-link class="ax-navbar-item__link" to="/">
                            <n-icon><HomeOutline /></n-icon>首页
                        </router-link>
                    </div>
                    <div class="ax-navbar-item">
                        <router-link class="ax-navbar-item__link" to="/problems">
                            <n-icon><AppsOutline /></n-icon>题库
                        </router-link>
                    </div>
                    <div class="ax-navbar-item">
                        <router-link class="ax-navbar-item__link" to="/contests">
                            <n-icon><TrophyOutline /></n-icon>竞赛
                        </router-link>
                    </div>
                    <div class="ax-navbar-item">
                        <router-link class="ax-navbar-item__link" to="/rankings">
                            <n-icon><PeopleOutline /></n-icon>排行
                        </router-link>
                    </div>
                </div>
                <div class="ax-navbar__right">
                    <div class="ax-navbar-item">
                        <div class="ax-navbar-item__link" @click="showLogin">
                            <n-icon><PersonOutline /></n-icon> 登录 / 注册
                        </div>
                    </div>
                    <div class="ax-navbar-item ax-menu-bar">
                        <a class="ax-navbar-item__link" href="javascript:;">
                            <n-icon><MenuOutline /></n-icon>
                        </a>
                        <div class="ax-navbar-dropdown-container">
                            <a class="ax-navbar-dropdown__item" href="https://blog.yemaster.cn/">
                                首页
                            </a>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	</div>
    <LoginModal v-model="showLoginModal" />
</template>
