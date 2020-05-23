export class UI {
	constructor() {
		this.profile = document.getElementById('profile')
		this.searchContainer = document.querySelector('.searchContainer')
		this.search = document.querySelector('.search')
		this.loader = document.getElementById('loader')
		this.repos = document.getElementById('repos')
	}
	showProfile(user) {
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
								<li class="list-group-item">Member since: ${user.created_at.substr(0,10)}</li>
							</ul>
						</div>
					</div>
				</div>
				<h3 class="">Latest repos</h3>
				<div id="repos"></div>
			</div>
		`
	}
	clearProfile() {
		this.profile.innerHTML = ''
		this.repos.innerHTML = ''
	}
	showAlert() {
		const div = document.createElement('div')
		div.className = 'alert alert-danger'
		div.textContent = 'This user unfortunately was not found'
		this.searchContainer.insertBefore(div, this.search)
		setTimeout(() => div.remove(), 2000)
	}
	showLoader() {
		this.loader.classList.remove('d-none')
	}
	hideLoader() {
		this.loader.classList.add('d-none')
	}
	showRepos(repos) {
		let output = ''
		let i = 0
		repos.forEach(repo => {
			console.log(++i);
			output += `
				<div class="card card-body mb-2">
					<div class="row">
						<div class="col-md-6">
							<a href="${repo.html_url}">${repo.name}</a>
						</div>
						<div class="col-md-6 d-flex justify-content-end">
							<span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
							<span class="badge badge-secondary">Watchers: ${repo.watchers}</span>
							<span class="badge badge-success">Forks: ${repo.forks_count}</span>
						</div>
					</div>
				</div>
			`
		})
		this.repos.innerHTML = output		
	}
}