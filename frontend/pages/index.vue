<template>
  <div class="main-wrapper">
    <div class="page-wrapper">

          <div class="page-content">

            <div class="d-flex justify-content-between align-items-center flex-wrap grid-margin">
              <div>
                <h4 class="mb-3 mb-md-0">Welcome to Dashboard</h4>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-xl-12 stretch-card">
                <div class="row flex-grow">
                  <div class="container-fluid">
                      <div class="card">
                          <div class="card-header">
                              <h4 class="card-title">
                                  List Employe
                                  <nuxt-link class="btn btn-primary float-right btn-sm" :to="{name: 'employes-add'}">Add New</nuxt-link>
                              </h4>
                          </div>
                          <div class="card-body row">
                              <div class="col-md-4 offset-md-8 mb-4">
                                  <input type="text" placeholder="Search" v-model="search" v-on:input="findEmploye" class="form-control">
                              </div>
                              <div class="col-md-12">
                                  <b-table striped hover :items="employes.data" :fields="fields" show-empty responsive>
                                      <template v-slot:cell(actions)="row">
                                          <nuxt-link :to="{name: 'employes-edit-id', params: {id: row.item.id}}" :key="'edit'+row.index" class="btn btn-warning btn-sm">Edit</nuxt-link>
                                          <button class="btn btn-danger btn-sm" @click="openDeleteModal(row)">Delete</button>
                                      </template>
                                  </b-table>
                                  <b-pagination
                                      align="right"
                                      v-model="currentPage"
                                      :total-rows="employes.total"
                                      :per-page="employes.per_page"
                                      @change="changePage"
                                      aria-controls="my-table"
                                  ></b-pagination>
                              </div>

                              <b-modal v-model="deleteModal" title="Delete Data Employe">
                                  <p>Kamu yakin ingin menghapus data: <code>{{ employe_selected ? employe_selected.name:'' }}</code>?</p>
                                  <template v-slot:modal-footer>
                                      <div class="w-100 float-right">
                                          <b-button
                                              variant="secondary"
                                              size="sm"
                                              @click="deleteModal=false"
                                          >
                                              Close
                                          </b-button>
                                          <b-button
                                              variant="primary"
                                              size="sm"
                                              @click="deleteDataEmploye"
                                          >
                                              Delete
                                          </b-button>
                                      </div>
                                  </template>
                              </b-modal>
                          </div>
                      </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <!-- partial:partials/_footer.html -->
          <Footer/>
          <!-- partial -->

        </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue';
import { mapActions, mapState, mapMutations } from 'vuex'

export default {

    created() {
         this.getEmployesData()
    },
    data() {
        return {
            fields: ['name','date_of_birth','gender', 'department', 'actions'],
            items: [],
            deleteModal: false,
            employe_selected: null,
            search: '',
            currentPage:1
        }
    },
    computed: {
        ...mapState('employe', {
            employes: state => state.employes,
            datatotal: state => state.datatotal,
            page: state => state.page
        })
    },
    watch: {
        page() {
            this.getEmployesData(this.search)
        }
    },
    methods: {
        ...mapActions('employe', ['getEmployesData', 'destroyEmployesData']),
        ...mapMutations('employe', ['SET_PAGE']),
        openDeleteModal(row) {
            this.employe_selected = row.item
            this.deleteModal = true
        },
        deleteDataEmploye() {
            this.destroyEmployesData(this.employe_selected.id).then(() => {
                this.deleteModal = false
                this.employe_selected = null
            })
        },
        findEmploye() {
            this.getEmployesData(this.search)
        },
        changePage(val) {
            this.SET_PAGE(val)
        }
    },
  components: {
     Sidebar
    }
}

</script>
