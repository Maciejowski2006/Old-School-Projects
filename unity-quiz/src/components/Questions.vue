<script>
export default {
	name: "Questions",
	data() {
		return {
			elements: [
				{
					question: "Jakiego języka skryptowego używa silnik Unity?",
					right: 2,
					answers: [
						"JavaScript",
						"C++",
						"C#",
						"Lua"
					]
				},
				{
					question: "Co jest aktualnie najstabilniejszym i polecanym przez Unity UI",
					right: 2,
					answers: [
						"IMGUI",
						"Unity UI",
						"Unity UI + TextMeshPro",
						"UI Elements"
					]
				},
				{
					question: "Który z podanych networkingów jest najstabilniejszy i zbudowany na postawie HLAPI(UNet)",
					right: 1,    
					answers: [
						"MLAPI",
						"Mirror",
						"PUN2(Phtoton Networking 2)",
						"Vivox"
					]
				},
				{
					question: "Jakiej platformy nie wspiera Unity 2019.4",
					right: 2,
					answers: [
						"PS5",
						"XBOX Series X",
						"PowerPC",
						"tvOS"
					]
				},
				{
					question: "Jaka metoda nie może wykonać się wiele razy",
					right: 3,
					answers: [
						"Update()",
						"OnEnable()",
						"OnCollisionEnter()",
						"Start()"
					]
				},
				{
					question: "Jaki System Kontroli Wersji ma najlepszą integracje z Unity",
					right: 0,
					answers: [
						"PlasticSCM",
						"Git",
						"Perforce",
						"Unity Collaborate"
					]
				},
				{
					question: "Który z tych efektów audio nie jest dostępny w Unity",
					right: 2,
					answers: [
						"Distortion",
						"Reverb",
						"Noise",
						"Normalize"
					]
				}
				,
				{
					question: "Który z tych obiektów, nie jest dostępny w domyślnej wersji Unity",
					right: 0,
					answers: [
						"UI Document",
						"Empty GameObject",
						"Point Light",
						"Audio Reverb Zone"
					]
				},
				{
					question: "Od jakiego planu dostępny jest ciemny motyw w edytorze od wersji 2019.4",
					right: 3,
					answers: [
						"Plus",
						"Pro",
						"Enterprise",
						"Jest dostępny w każdym planie"
					]
				},
				{
					question: "Której paczki nie znajdziemy w domyślnym menadżerze paczek",
					right: 1,
					answers: [
						"Shader Graph",
						"Vivox",
						"Bolt(Visual Scripting)",
						"Input System"
					]
				}
			],
			correctNumber: 0,
			answered: [],
		};
	},
	methods: {
		check: function(index, _index) {
			if (this.answered[index]) {
				return;
			}
			this.answered[index] = true;
			
			if (_index == this.elements[index].right) {
				this.correctNumber++;
				_index.classList.remove('disabled');
				_index.classList.add('correct');
			}
		}
	}
};
</script>

<template>
	<nav>
		<h2>Poprawne odpowiedzi: {{ correctNumber }}/{{elements.length}}</h2>
	</nav>
	<div class="separator" id="top"></div>
	<section v-for="(element, index) in elements" :key="element.index">
		<h2>{{index + 1}}. {{element.question}}</h2>
		<div class="buttons">
			<button v-for="(answer, _index) in element.answers" :key="answer._index" :class="{default: !answered[index], correct: (_index === elements[index].right && answered[index]), disabled: (answered[index] && _index !== elements[index].right) }" @click="check(index, _index)">{{answer}}</button>
		</div>
	</section>
	<button class="default reset" onclick="location.reload(); window.scrollTo(0, 0)">Jeszcze raz?</button>

</template>

<style lang="scss">
h2 {
	font-size: 2rem;
}
nav {
	text-align: center;
	padding: .25rem 0;
	position: fixed;
	width: 100%;
	background-color: #333;
}

section {
	max-width: 40rem;
	margin-inline: auto;
	padding-bottom: 5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
}
.separator {
	padding-top: 6rem;
	
}
.buttons {
	width: 100%;
	display: grid;
	gap: 20px;
	grid-template-columns: 1fr 1fr;
}
button {
	min-height: 5rem;
	border-radius: 10px;
	font-size: 1.25rem;
	user-select: none;

	transition-duration: 200ms;
}
.reset {
	margin: 25px 45.8%;
	min-width: 10rem;
}
.default {
	background-color: #3498db;
	border: .25rem dashed #2980b9;
	cursor: pointer;

	&:hover {
		background-color: #e67e22;
		border-color: #d35400;
		border-width: 0.4rem;
	}
}
.correct {
	background-color: #2ecc71;
	border: .25rem dashed #27ae60;
	cursor: not-allowed;
}
.wrong {
	background-color: #e74c3c;
	border: .25rem dashed #c0392b;
	cursor: not-allowed;
}
.disabled {
	background-color: #95a5a6;
	border: .25rem dashed #7f8c8d;
	cursor: not-allowed;
}
</style>
