<template>
  <div>
    <b-row>
      <b-col
        cols="12"
        md="8"
      >
        <b-card
          :title="$t('Create New User')"
        >
          <b-row>
            <b-col
              cols="12"
              md="6"
            >
              <div class="form-label-group">
                <b-form-input
                  v-model="data.first_name"
                  class="mt-2"
                  :placeholder="$t('First Name')"
                  :state="errors.first_name ?false:null"
                />
                <small
                  v-if="errors.first_name"
                  class="text-danger"
                >{{ errors.first_name[0] }}</small>
                <label>{{ $t('First Name') }}</label>
              </div>
            </b-col>
            <b-col
              cols="12"
              md="6"
            >
              <div class="form-label-group">
                <b-form-input
                  v-model="data.last_name"
                  class="mt-2"
                  :placeholder="$t('Last Name')"
                  :state="errors.last_name ?false:null"
                />
                <small
                  v-if="errors.last_name"
                  class="text-danger"
                >
                  {{ errors.last_name[0] }}
                </small>
                <label>{{ $t('Last Name') }}</label>
              </div>
            </b-col>
            <b-col
              cols="12"
              md="6"
            >
              <div class="form-label-group">
                <b-form-input
                  v-model="data.user_name"
                  class="mt-2"
                  :placeholder="$t('User Name')"
                  :state="errors.user_name ?false:null"
                />
                <small
                  v-if="errors.user_name"
                  class="text-danger"
                >
                  {{ errors.user_name[0] }}
                </small>
                <label>{{ $t('User Name') }}</label>
              </div>
            </b-col>
            <b-col
              cols="12"
              md="6"
            >
              <div class="form-label-group">
                <b-form-input
                  v-model="data.phone"
                  class="mt-2"
                  :placeholder="$t('Phone')"
                  :state="errors.phone ?false:null"
                  type="number"
                />
                <small
                  v-if="errors.phone"
                  class="text-danger"
                >
                  {{ errors.phone[0] }}
                </small>
                <label>{{ $t('Phone') }}</label>
              </div>
            </b-col>
            <b-col
              cols="12"
              md="6"
            >
              <div class="form-label-group">
                <b-form-input
                  v-model="data.email"
                  class="mt-2"
                  :placeholder="$t('Email')"
                  :state="errors.email ?false:null"
                />
                <small
                  v-if="errors.email"
                  class="text-danger"
                >
                  {{ errors.email[0] }}
                </small>
                <label>{{ $t('Email') }}</label>
              </div>
            </b-col>
            <b-col
              cols="12"
              md="6"
            >
              <div class="form-label-group">
                <b-form-input
                  v-model="data.password"
                  class="mt-2"
                  :placeholder="$t('Password')"
                  :state="errors.password ?false:null"
                  type="password"
                  autocomplete="new-password"
                />
                <small
                  v-if="errors.password"
                  class="text-danger"
                >
                  {{ errors.password[0] }}
                </small>
                <label>{{ $t('Password') }}</label>
              </div>
            </b-col>
          </b-row>
        </b-card>
      </b-col>
      <b-col
        cols="12"
        md="4"
      >
        <b-row>
          <b-col
            cols="12"
          >
            <b-card
              :title="$t('User Image')"
            >
              <b-row>
                <b-col
                  class="d-flex justify-content-center"
                >
                  <single-upload v-model="data.avatar_id" />
                </b-col>
                <b-col cols="12">
                  <b-alert
                    v-if="fileErrors.length>0"
                    variant="danger"
                    show
                  >
                    <h4 class="alert-heading">
                      {{ $t('Upload Image Error') }}
                    </h4>
                    <div class="alert-body">
                      <span>
                        <ul
                          v-for="(val,index) in fileErrors"
                          :key="index"
                        >
                          <li>{{ val }}</li>
                        </ul>
                      </span>
                    </div>
                  </b-alert>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
          <b-col
            cols="12"
          >
            <b-card>
              <b-button
                variant="gradient-success w-100"
                @click="create"
              >
                {{ $t('Create') }}
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import SingleUpload from '@components/SingleUpolad'

export default {
  components: {
    SingleUpload,
  },
  data() {
    return {
      data: {},
      errors: [],
      fileErrors: '',

    }
  },
  computed: {},
  methods: {
    UpdateFileError(variable) {
      this.fileErrors = variable
    },
    create() {
      this.errors = []
      this.$store.dispatch('user/Create', this.data).then(() => {
        this.data = {}
      }).catch(error => {
        this.errors = error.response.data.errors
      })
    },
  },
}
</script>
