<template>
  <div class="row">
					<div class="col-md-12 grid-margin stretch-card">
						<div class="card">
							<div class="card-body">
								<form>
									<div class="form-group">
										<label for="exampleInputText1">Name</label>
										<input type="text" v-model="employes.name" class="form-control" id="exampleInputText1" value="" placeholder="Enter Name">
                    <p class="text-danger" v-if="errors.name">{{ errors.name[0] }}</p>
                  </div>
                  <div class="form-group">
										<label for="exampleInputText1">Department</label>
                    <select class="form-control" v-model="employes.department" >
                        <option value="">Pilih</option>
                        <option value="IT">IT</option>
                        <option value="ICT">ICT</option>
                    </select>
                    <p class="text-danger" v-if="errors.department">{{ errors.department[0] }}</p>
									</div>
                  <div class="form-group">
										<label for="exampleInputText1">Date Of Birth</label>
										<input type="date" v-model="employes.date_of_birth" class="form-control" id="exampleInputText1" value="" placeholder="Enter Name">
                    <p class="text-danger" v-if="errors.date_of_birth">{{ errors.date_of_birth[0] }}</p>
                  </div>
                  <div class="form-group">
										<label for="exampleInputText1">Gender</label>
                    <select class="form-control" v-model="employes.gender" >
                        <option value="">Pilih</option>
                        <option value="Laki-Laki">Laki-Laki</option>
                        <option value="Perempuan">Perempuan</option>
                    </select>
                    <p class="text-danger" v-if="errors.gender">{{ errors.gender[0] }}</p>
									</div>
									<button class="btn btn-primary" type="button" @click="submit">Save</button>
								</form>
							</div>
						</div>
					</div>
				</div>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
    created() {
        if (this.$route.name == 'employes-edit-id') {
            this.employes = {
                name: this.employe.name,
                department: this.employe.department,
                date_of_birth: this.employe.date_of_birth,
                gender: this.employe.gender,
            }
        }
    },
    data() {
        return {
          employes: {
                name: '',
                department: '',
                date_of_birth: '',
                gender:'',
          },
        }
    },
    computed: {
        ...mapState('employe', {
            employe: state => state.data,
            errors: state => state.errors
        })
    },
    methods: {
        ...mapActions('employe', ['storeEmployesData', 'updateEmployeData']),

        submit() {
            if (this.$route.name == 'employes-edit-id') {
                let data = Object.assign({id: this.$route.params.id}, this.employes)
                this.updateEmployeData(data).then(window.location.href = "/")
            } else {
                this.storeEmployesData(this.employes).then(() => window.location.href = "/")
            }
        }

    }
}
</script>
