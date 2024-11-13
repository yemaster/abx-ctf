<script setup lang="ts">
import type { Component } from 'vue'
import { defineComponent, h, ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { NIcon } from 'naive-ui'

import AxNavbar from '@/components/AxNavbar.vue'

const year = new Date().getFullYear();
</script>

<template>
	<!--Header-->
	<div class="ax-page-header">
		<div class="ax-container">
			<div class="ax-page-header__text">Abstrax CTF</div>
		</div>
	</div>
	<div class="ax-page-main">
		<ax-navbar />
		<div class="ax-page-main__body">
			<div class="ax-container" style="padding: 48px 0">
				<router-view />
			</div>
		</div>
		<div class="ax-page-main__footer">
			<div class="ax-container">
				CopyRight &copy; 2024-{{ year }} Abstrax CTF, All Rights Reserved.
			</div>
		</div>
	</div>
</template>