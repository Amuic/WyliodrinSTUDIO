<template>
	<v-card>
		<v-card-title>
			<span class="headline">{{$t('RPK_NEW_DEVICE_TITLE')}}</span>
		</v-card-title>
		<v-card-text>
			<img src=""></img>
			<div>
				{{$t('RPK_NEW_DEVICE_INSTRUCTIONS')}}
			</div>
		</v-card-text>
		<v-card-actions>
			<v-spacer></v-spacer>
			<v-btn text @click="close">{{$t('CLOSE')}}</v-btn>
		</v-card-actions>
	</v-card>
</template>

<script>
export default {
	name: 'RPKDeviceSetup',
	props: ['token'],
	data () {
		return {
			value: ''
		};
	},
	computed: {
		json ()
		{
			return JSON.stringify ({token: this.token, id: this.value.trim (), server: window.location.href+'socket/remote'}, null, 2);
		},
		nameValid ()
		{
			return (this.value.trim ().length > 0);
		}
	},
	methods: {
		close ()
		{
			this.$root.$emit ('submit');
		}
	}
}
</script>