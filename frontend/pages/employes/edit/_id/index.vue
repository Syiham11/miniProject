<template>
  <div class="main-wrapper">
    <div class="page-wrapper">
      <div class="page-content">

          <div class="profile-page tx-13">
            <app-formEmploye/>
          </div>

      </div>
    </div>
  </div>
</template>

<script>
import FormEmploye from '@/components/form/Employe.vue'

export default {
  async asyncData({store, params}) {
        await Promise.all([
            store.dispatch('employe/getData', params.id)
        ])
        return
    },
    components: {
			'app-formEmploye': FormEmploye,
		}
}
</script>
