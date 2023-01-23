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
										<label for="exampleInputText1">Company</label>
                    <select class="form-control" v-model="employes.company" >
                        <option value="">Pilih</option>
                        <option value="PT BCA">PT BCA</option>
                        <option value="PT ABC">PT ABC</option>
                    </select>
                    <p class="text-danger" v-if="errors.company">{{ errors.company[0] }}</p>
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
										<label for="exampleInputText1">Nik</label>
										<input type="number" v-model="employes.nik" class="form-control" id="exampleInputText1" value="" placeholder="Enter Name">
                    <p class="text-danger" v-if="errors.nik">{{ errors.nik[0] }}</p>
                  </div>
                  <div class="form-group">
										<label for="exampleInputText1">Join Date</label>
										<input type="date" v-model="employes.join_date" class="form-control" id="exampleInputText1" value="" placeholder="Enter Name">
                    <p class="text-danger" v-if="errors.join_date">{{ errors.join_date[0] }}</p>
                  </div>
                  <div class="form-group">
										<label for="exampleInputText1">Date Of Birth</label>
										<input type="date" v-model="employes.date_of_birth" class="form-control" id="exampleInputText1" value="" placeholder="Enter Name">
                    <p class="text-danger" v-if="errors.date_of_birth">{{ errors.date_of_birth[0] }}</p>
                  </div>
                  <div class="form-group">
										<label for="exampleInputText1">Status</label>
                    <select class="form-control" v-model="employes.status" >
                        <option value="">Pilih</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                    <p class="text-danger" v-if="errors.status">{{ errors.status[0] }}</p>
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
                company: this.employe.company,
                department: this.employe.department,
                nik: String(this.employe.nik),
                join_date: this.employe.join_date,
                date_of_birth: this.employe.date_of_birth,
                status: this.employe.status,
            }
        }
    },
    data() {
        return {
          employes: {
                name: '',
                company: '',
                department: '',
                nik:'',
                join_date: '',
                date_of_birth: '',
                status:'',
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
