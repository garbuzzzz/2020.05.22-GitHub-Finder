export class Github {
	constructor() {
		this.client_id = "Iv1.d9f9679a25f10d92"
		this.client_secret = "d14c06957ee77043792e382ffad85b2b90b22316"
		this.repos_count = '5'
		this.repos_sort = 'created: asc'
	}
	static async getUser(user) {
		const profileResponce = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.client_secret}`)
		const profile = await profileResponce.json()
		const reposResponce = await fetch(`https://api.github.com/users/${user}/repos?per_page=5&sort=${this.repos_sort}&client_id=${this.client_id}$client_secret=${this.client_secret}`)
		const repos = await reposResponce.json()
		return {profile, repos}
	}
}
