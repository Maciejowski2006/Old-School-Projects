<template>
	<main>
		<article>
			<div id="header">
				<Reload></Reload>
			</div>
			<iframe src="https://www.google.pl/publicdata/embed?ds=d5bncppjof8f9_&amp;ctype=l&amp;strail=false&amp;bcs=d&amp;nselm=h&amp;met_y=it_cel_sets&amp;scale_y=lin&amp;ind_y=false&amp;rdim=world&amp;idim=country:AND&amp;ifdim=world&amp;hl=pl&amp;dl=pl&amp;ind=false"></iframe>
		</article>
	</main>
</template>

<script>
import Reload from '@/components/Reload.vue'

export default {
	name: "Abonenci",
	components: {
		Reload
	}
}
</script>

<style lang="scss">
@import '../assets/fontello/css/fontello.css'; // Ikony
@import "../styles/variables";

iframe {
	width: 100%;
	height: calc(100vh - 227px);
	border: 0;
	border-radius: 5px;
	@media screen and (max-width: $mobile) {
		height: calc(100vh - 512px);
	}
}
#header
{
	margin: 0 0 20px 0;
	min-height: 50px;
	display: flex;
	flex-direction: row;
}
</style>
