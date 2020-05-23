export class UI {
	constructor() {
		this.profile = document.getElementById('profile')
	}
	showProfile(user) {
		console.log(user.avatar_url);
		this.profile.innerHTML = `
			<div class="container">
				<div class="card card-body mb-3">
					<div class="row">
						<div class="col-6">
							<img class="img-fluid" src="${user.avatar_url}">
							<a href="${user.html_url}" target="_blank" class="btn btn-light btn-block">View profile at GitHub</a>
						</div>
					</div>
					<div class="row">
						<div class="col-md-9">
							<div class="m-3">
								<span class="badge badge-primary">Public repos: ${user.public_repos}</span>
								<span class="badge badge-secondary">Public gists: ${user.public_repos}</span>
								<span class="badge badge-success">Followers: ${user.followers}</span>
								<span class="badge badge-info">Following: ${user.following}</span>
							</div>
							<br><br>
							<ul class="list-group">
								<li class="list-group-item">Company: ${user.company}</li>
								<li class="list-group-item">Website/Blog: ${user.blog}</li>
								<li class="list-group-item">Location: ${user.location}</li>
								<li class="list-group-item">Member since: ${user.created_at}</li>
							</ul>
						</div>
					</div>
				</div>
				<h3 class="">Latest repos</h3>
				<div id="repos"></div>
			</div>
		`
		
	}
}