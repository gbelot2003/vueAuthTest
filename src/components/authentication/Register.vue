<template>
	<div class="row">
		<div class="col-md-6">
			<div class="panel panel-default">
				
				<div class="form-group">
					<input type="text"
							v-model="name"
							class="form-control"
							placeholder="Name">
				</div>

				<div class="form-group">
					<input type="email"
							v-model="email"
							class="form-control"
							placeholder="E-mail">
				</div>

				<div class="form-group">
					<input type="password"
							v-model="password"
							class="form-control"
							placeholder="Password">
				</div>				


				<button class="btn btn-success">Register</button>
			</div>
		</div>
		<pre>{{ $data }}</pre>
	</div>
</template>

<script>
	export default {
		data () {
			return{
				name: '',
				email: '',
				password: ''
			}
		}
	}
</script>