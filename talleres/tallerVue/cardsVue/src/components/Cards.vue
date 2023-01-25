<script>
export default {
  props: {
    titulo: {
      type: String
    },
    pr: {
      type: String
    },
    url: {
      type: String
    }
  }
}
</script>

<template>
  <div class="col-lg-4">
    <div class="card">
      <div class="card-img-top w-" :src="url">
        <div class="card-body">
          <h1 class="card-title">
            {{ titulo }}
          </h1>
          <p class="card-text">
            {{ pr }}
          </p>
        </div>

      </div>
    </div>
  </div>

</template>