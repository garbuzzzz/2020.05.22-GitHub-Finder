import css1 from './bootstrap.min.css'; // css подгружаются как модули. Первый - бутстрап, второй - наш. Имена файлов не важны, подгружаются не как переменные, а как содержимое файлов. Если ошибка в консоли - убать stylesheet из link.
import css2 from './style.css';
import {UI} from './UI'
import {Github} from './Github'

const ui = new UI()
const searchEL = document.getElementById('search')

searchEL.addEventListener('keyup', e => {
	
	if (searchEL.value.trim() && e.code === 'Enter') {
		ui.showLoader()
		Github.getUser(searchEL.value)
			.then(data => {	
				ui.hideLoader()
				if (data.profile.message === 'Not Found') {
					ui.showAlert()					
				} else {
					ui.showProfile(data.profile)
					ui.showRepos(data.repos)
				}
			})
	} else {
		ui.clearProfile()
	}
})

