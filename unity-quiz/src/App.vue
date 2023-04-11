<template>
	<Questions />
</template>
<script>
import Questions from '@/components/Questions.vue'

export default {
	components: {
		Questions
	}
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;700&display=swap');

* {
	box-sizing: border-box;
}
body {
	margin: 0;
	background: #222;
	color: #ddd;
	font-family: 'Ubuntu', sans-serif;
}
</style>
