<template>
  <div>
    <b-modal
      v-model="deleteElement"
      :title="$t('Delete Tag')"
      :ok-title="$t('Delete')"
      :cancel-title="$t('cancel')"
      ok-variant="danger"
      cancel-variant="primary"
      @close="deleteElement=false"
      @cancel="deleteElement=false"
      @ok="ConfirmDelete"
    >
      <b-badge
        class="mt-1"
        variant="light-danger"
      >
        {{ $t('are you sure you want to delete this Tag') }}
      </b-badge>
    </b-modal>
    <h3 class="mb-3">
      {{ $t('Tags') }}
    </h3>
    <b-row>
      <b-col cols="6">
        <b-button
          variant="gradient-success"
          @click="$router.push({name:'tag.create'})"
        >
          {{ $t('Create new') }}
        </b-button>
      </b-col>
      <b-col
        cols="6"
        class="d-flex justify-content-end"
      >
        <b-button
          variant="gradient-danger"
          @click="$router.push({name:'tag.trashed'})"
        >
          <font-awesome-icon
            :icon="['fas', 'trash']"
          />
          {{ $t('Trashed') }}
        </b-button>
      </b-col>
    </b-row>
    <b-overlay
      :show="elementLoading"
      rounded="sm"
      variant="transparent"
      :opacity="0.8"
      blur="2px"
      spinner-variant="primary"
      spinner-type="grow"
      spinner-small
    >
      <b-card
        class="mt-5"
      >
        <b-card-title>
          <b-row>
            <b-col cols="8">
              <h3>
                {{ $t('Tags') }}
              </h3>
            </b-col>
            <b-col
              cols="4"
            >
              <b-input-group>
                <b-form-input
                  id="filter-input"
                  v-model="filter"
                  type="search"
                  :placeholder="$t('Type to Search')"
                />
              </b-input-group>
            </b-col>
          </b-row>
        </b-card-title>
        <b-table
          v-if="items.length>0"
          :fields="fields"
          responsive="sm"
          :items="items"
          :filter="filter"
          :per-page="perPage"
          :current-page="currentPage"
          class="table-w-max"
        >
          <template #cell(id)="data">
            <b-badge
              pill
              variant="light-primary"
            >
              {{ data.item.no }}
            </b-badge>
          </template>
          <template #cell(name)="data">
            {{ data.item.name }}
          </template>
          <template
            #cell(created_at_updated_at)="data"
          >
            <div>
              <b-badge
                v-if="data.item.created_at"
                v-b-tooltip.hover="{title:data.item.created_at,variant:'success',placement:'top'}"
                variant="light-success"
              >
                <font-awesome-icon
                  :icon="['fas', 'table']"
                />
                {{ data.item.created_from }}
              </b-badge>
              <b-badge
                v-if="data.item.updated_from"
                v-b-tooltip.hover="{ title:data.item.updated_from,variant:'warning',placement:'top'}"
                variant="light-warning"
                class="ml-1"
              >
                <font-awesome-icon
                  :icon="['fas', 'calendar-week']"
                />
                {{ data.item.updated_from }}
              </b-badge>
            </div>
          </template>
          <template #cell(pages)="data">
            <b-badge
              pill
              variant="light-primary"
            >
              {{ data.item['pages_count'] }} Pages
            </b-badge>
          </template>

          <template #cell(options)="data">
            <div class="w-max">
              <router-link
                class="text-success"
                :to="{name:'tag.edit',params: { tag: data.item.id }}"
              >
                <font-awesome-icon
                  :icon="['fas', 'edit']"
                />
              </router-link>
              <a
                class="ml-2 text-danger"
                @click="Delete(data.item.id)"
              >
                <font-awesome-icon
                  :icon="['fas', 'trash']"
                />
              </a>
            </div>
          </template>
        </b-table>
        <b-row
          v-else
          class="d-flex justify-content-center"
        >
          <b-col
            cols="4"
          >
            <b-alert
              variant="danger"
              show
            >
              <div class="alert-body text-center">
                <span>{{ $t('No Data Available') }}</span>
              </div>
            </b-alert>
          </b-col>
        </b-row>
        <b-row>
          <b-col
            cols="12"
            class="d-flex justify-content-end mt-2"
          >
            <b-pagination
              v-model="currentPage"
              :total-rows="totalRows"
              :per-page="perPage"
              align="center"
              size="sm"
              class="my-0"
            />
          </b-col>
        </b-row>
      </b-card>
    </b-overlay>
    <list-exp />
  </div>
</template>

<script>

import ListExp from '@components/ListExplain.vue'

export default {
  components: { ListExp },
  data() {
    return {
      deleteElement: false,
      element: null,
      filter: null,
      perPage: 5,
      currentPage: 1,
    }
  },
  computed: {
    fields() {
      return [
        { key: 'id', label: this.$t('id') },
        { key: 'name', label: this.$t('name') },
        { key: 'pages', label: this.$t('pages') },
        { key: 'created_at_updated_at', label: this.$t('created_at_updated_at') },
        { key: 'options', label: this.$t('options') },
      ]
    },
    items() {
      return this.$store.getters['tag/GetElements']
    },
    totalRows() {
      return this.items.length
    },
  },
  created() {
    this.$store.dispatch('tag/GetElements')
  },
  methods: {
    Delete(val) {
      this.deleteElement = true
      this.element = val
    },
    ConfirmDelete() {
      this.$store.dispatch('tag/Delete', this.element)
    },
  },
}
</script>
