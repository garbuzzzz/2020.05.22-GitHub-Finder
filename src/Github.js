export class Github {
	constructor() {
		this.client_id = "Iv1.d9f9679a25f10d92"
		this.client_secret = "d14c06957ee77043792e382ffad85b2b90b22316"
	}
	static async getUser(user) {
		const profileResponce = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}$client_secret=${this.client_secret}`)
		const profile = await profileResponce.json()
		return {profile}
	}
}
