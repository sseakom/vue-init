<template lang="jade">
	div.hello(@click="_click") hello {{main}}
</template>
<script type="text/babel">

export default {
	name: 'HomePage',
	computed:{
		main(){
			return this.$store.getters.mainCounter
		}
	},
	methods:{
		_click(){
			this.$store.dispatch('incrementMain')
		}
	},
	mounted(){
	}
}

</script>
<style lang="stylus" scoped>
.hello
	font-size 10rem
</style>
