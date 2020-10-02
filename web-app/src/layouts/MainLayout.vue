<template>
  <div class="main-layout">
    <sigame-header />
  </div>
</template>

<script>
import SigameHeader from '@/components/app/sigame-header/sigame-header.vue';
export default {
  name: 'MainLayout',
  components: {
		SigameHeader,
	}
}
</script>