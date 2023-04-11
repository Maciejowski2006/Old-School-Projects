<template>
	<main>
		<article>
			<div id="table">
				<table>
					<tr>
						<th colspan="9">Wskaźnik abonentów telefonii komórkowej względem lat</th>
					</tr>
					<tr>
						<td>Rok</td>
						<td>2002</td>
						<td>2004</td>
						<td>2006</td>
						<td>2008</td>
						<td>2010</td>
						<td>2012</td>
						<td>2014</td>
						<td>2016</td>
						<td>2018</td>
					</tr>
					<tr>
						<td>Liczba abonentów</td>
						<td>7,66</td>
						<td>7,07</td>
						<td>7,76</td>
						<td>7,77</td>
						<td>7,79</td>
						<td>7,80</td>
						<td>8,66</td>
						<td>7,94</td>
						<td>8,02</td>
					</tr>
				</table>
			</div>
		</article>
  </main>
</template>
<script>
export default {
	name: 'Home'
}
</script>
<style lang="scss" scoped>
@import "../styles/variables";
#table {
	overflow-x: auto;
}
table {
	width: 100%;
	border: 1px $light1 solid;

	td {
		text-align: center;
		border: 1px $light1 solid;
	}
	th, td {
		padding: 10px 0;
	}
}
</style>