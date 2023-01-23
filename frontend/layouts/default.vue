<template>
	<div id="wrapper">
		<app-sidebar ></app-sidebar>
    <app-sidebar-setting > </app-sidebar-setting>

		<div id="content-wrapper" class="d-flex flex-column">
			<div id="content">
				<app-header ></app-header>
				<nuxt/>
			</div>
		</div>
	</div>
</template>

<script>
	import Sidebar from '@/components/Sidebar.vue'
  import SidebarSetting from '@/components/SidebarSetting.vue'

	import Header from '@/components/Header.vue'
	import {mapState } from 'vuex'
	import { mapMutations } from 'vuex'

	export default {
		data() {
			return {

			}
		},
		created(){

		},
		computed: {},
		methods: {

			},
		components: {
			'app-sidebar': Sidebar,
      'app-sidebar-setting': SidebarSetting,
			'app-header': Header
		}
	}
</script>
