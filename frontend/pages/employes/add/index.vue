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

    components: {
			'app-formEmploye': FormEmploye,
		}
}
</script>
