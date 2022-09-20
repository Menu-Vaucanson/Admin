import axios from 'axios';
import CustomCheck from './CustomCheck';

const url = 'https://menuvox.fr:8081/';

function SendMenu(data) {
	return new Promise(resolve => {
		axios.post(url + `menus/${data.date.split('/')[1]}/${data.date.split('/')[0]}`, { jwt: JSON.parse(window.localStorage.getItem('jwt')), menu: data }).catch(err => {
			console.log(err);
		}).then(res => {
			resolve(res);
		})
	});
}


function RenderMenu() {
	const initial = 'DishStyleNone';
	const dish1 = JSON.parse(window.sessionStorage.getItem('dish1'));
	const dish2 = JSON.parse(window.sessionStorage.getItem('dish2'));
	const dish3 = JSON.parse(window.sessionStorage.getItem('dish3'));
	const dish4 = JSON.parse(window.sessionStorage.getItem('dish4'));
	const dish1e = JSON.parse(window.sessionStorage.getItem('dish1e'));
	const dish2e = JSON.parse(window.sessionStorage.getItem('dish2e'));
	const dish3e = JSON.parse(window.sessionStorage.getItem('dish3e'));
	const dish4e = JSON.parse(window.sessionStorage.getItem('dish4e'));

	const error1 = JSON.parse(window.sessionStorage.getItem('error1'));
	const error2 = JSON.parse(window.sessionStorage.getItem('error2'));

	let isErrored1 = JSON.parse(window.sessionStorage.getItem('isErrored1'));
	let isErrored2 = JSON.parse(window.sessionStorage.getItem('isErrored2'));
	if (isErrored1 == null) {
		isErrored1 = false;
	}
	if (isErrored2 == null) {
		isErrored2 = false;
	}

	const theme1 = JSON.parse(window.sessionStorage.getItem('dish1Style')) ? JSON.parse(window.sessionStorage.getItem('dish1Style')) : initial;
	const theme2 = JSON.parse(window.sessionStorage.getItem('dish2Style')) ? JSON.parse(window.sessionStorage.getItem('dish2Style')) : initial;
	const theme3 = JSON.parse(window.sessionStorage.getItem('dish3Style')) ? JSON.parse(window.sessionStorage.getItem('dish3Style')) : initial;
	const theme4 = JSON.parse(window.sessionStorage.getItem('dish4Style')) ? JSON.parse(window.sessionStorage.getItem('dish4Style')) : initial;

	const theme1e = JSON.parse(window.sessionStorage.getItem('dish1eStyle')) ? JSON.parse(window.sessionStorage.getItem('dish1eStyle')) : initial;
	const theme2e = JSON.parse(window.sessionStorage.getItem('dish2eStyle')) ? JSON.parse(window.sessionStorage.getItem('dish2eStyle')) : initial;
	const theme3e = JSON.parse(window.sessionStorage.getItem('dish3eStyle')) ? JSON.parse(window.sessionStorage.getItem('dish3eStyle')) : initial;
	const theme4e = JSON.parse(window.sessionStorage.getItem('dish4eStyle')) ? JSON.parse(window.sessionStorage.getItem('dish4eStyle')) : initial;

	const content = [];

	if (isErrored1) {
		if (error1) {
			content.push(
				<div className="EnterMenu" key={1}>
					<div className="EnterMenuHeader">
						<div className="EnterMenuDayTheme">Midi</div>
					</div>
					<div className="EnterMenuError">
						<div>{error1}</div>
					</div>
				</div>
			);
		}
	} else {
		content.push(
			<div className="EnterMenu" key={1}>
				<div className="EnterMenuHeader">
					<div className="EnterMenuDayTheme">Midi</div>
				</div>
				<div className="EnterMenuContent">
					<div id='dish1' className={"EnterMenuContentContent " + theme1} key={1}>
						<div className="MenuContentText">{dish1}</div>
					</div>
					<div id='dish2' className={"EnterMenuContentContent " + theme2} key={2}>
						<div className="MenuContentText">{dish2}</div>
					</div>
					<div id='dish3' className={"EnterMenuContentContent " + theme3} key={3}>
						<div className="MenuContentText">{dish3}</div>
					</div>
					<div id='dish4' className={"EnterMenuContentContent " + theme4} key={4}>
						<div className="MenuContentText">{dish4}</div>
					</div>
				</div>
			</div>
		);
	}

	if (isErrored2) {
		if (error2) {
			content.push(
				<div className="EnterMenu" key={2}>
					<div className="EnterMenuHeader">
						<div className="EnterMenuDayTheme">Soir</div>
					</div>
					<div className="EnterMenuError">
						<div>{error2}</div>
					</div>
				</div>
			);
		}
	} else {
		content.push(
			<div className="EnterMenu" key={2}>
				<div className="EnterMenuHeader">
					<div className="EnterMenuDayTheme">Soir</div>
				</div>
				<div className="EnterMenuContent">
					<div id='dish1e' className={"EnterMenuContentContent " + theme1e} key={1}>
						<div className="MenuContentText">{dish1e}</div>
					</div>
					<div id='dish2e' className={"EnterMenuContentContent " + theme2e} key={2}>
						<div className="MenuContentText">{dish2e}</div>
					</div>
					<div id='dish3e' className={"EnterMenuContentContent " + theme3e} key={3}>
						<div className="MenuContentText">{dish3e}</div>
					</div>
					<div id='dish4e' className={"EnterMenuContentContent " + theme4e} key={4}>
						<div className="MenuContentText">{dish4e}</div>
					</div>
				</div>
			</div>

		);
	}
	return content;
}

function NewMenuValid() {
	const content = RenderMenu();
	let valid = 1;
	let error = '';
	let warn = '';

	const date = JSON.parse(window.sessionStorage.getItem('date'));

	const dish1 = JSON.parse(window.sessionStorage.getItem('dish1'));
	const dish2 = JSON.parse(window.sessionStorage.getItem('dish2'));
	const dish3 = JSON.parse(window.sessionStorage.getItem('dish3'));
	const dish4 = JSON.parse(window.sessionStorage.getItem('dish4'));
	const dish1e = JSON.parse(window.sessionStorage.getItem('dish1e'));
	const dish2e = JSON.parse(window.sessionStorage.getItem('dish2e'));
	const dish3e = JSON.parse(window.sessionStorage.getItem('dish3e'));
	const dish4e = JSON.parse(window.sessionStorage.getItem('dish4e'));

	let isErrored1 = JSON.parse(window.sessionStorage.getItem('isErrored1'));
	let isErrored2 = JSON.parse(window.sessionStorage.getItem('isErrored2'));
	if (isErrored1 == null) {
		isErrored1 = false;
	}
	if (isErrored2 == null) {
		isErrored2 = false;
	}


	const error1 = JSON.parse(window.sessionStorage.getItem('error1'));
	const error2 = JSON.parse(window.sessionStorage.getItem('error2'));

	const theme1 = JSON.parse(window.sessionStorage.getItem('dish1Style'));
	const theme2 = JSON.parse(window.sessionStorage.getItem('dish2Style'));
	const theme3 = JSON.parse(window.sessionStorage.getItem('dish3Style'));
	const theme4 = JSON.parse(window.sessionStorage.getItem('dish4Style'));
	const theme1Dark = JSON.parse(window.sessionStorage.getItem('dish1Styledark'));
	const theme2Dark = JSON.parse(window.sessionStorage.getItem('dish2Styledark'));
	const theme3Dark = JSON.parse(window.sessionStorage.getItem('dish3Styledark'));
	const theme4Dark = JSON.parse(window.sessionStorage.getItem('dish4Styledark'));

	const theme1e = JSON.parse(window.sessionStorage.getItem('dish1eStyle'));
	const theme2e = JSON.parse(window.sessionStorage.getItem('dish2eStyle'));
	const theme3e = JSON.parse(window.sessionStorage.getItem('dish3eStyle'));
	const theme4e = JSON.parse(window.sessionStorage.getItem('dish4eStyle'));
	const theme1eDark = JSON.parse(window.sessionStorage.getItem('dish1eStyledark'));
	const theme2eDark = JSON.parse(window.sessionStorage.getItem('dish2eStyledark'));
	const theme3eDark = JSON.parse(window.sessionStorage.getItem('dish3eStyledark'));
	const theme4eDark = JSON.parse(window.sessionStorage.getItem('dish4eStyledark'));

	if (!date || date === '') {
		valid = 0;
		error = 'La date n\'a pas été sasie';
	}

	if (!isErrored1) {
		if (!dish1 || dish1 === '') {
			valid = 0;
			error = 'L\'entrée du midi n\'a pas été saisie';
		} else if (!dish2 || dish2 === '') {
			valid = 0;
			error = 'Le plat du midi n\'a pas été saisie';
		} else if (!dish3 || dish3 === '') {
			valid = 0;
			error = 'Le légume du midi n\'a pas été saisie';
		} else if (!dish4 || dish4 === '') {
			valid = 0;
			error = 'Le dessert du midi n\'a pas été saisie';
		}

		if (!theme1 || theme1 === '') {
			warn = 'Le thème de l\'entrée du midi n\'a pas été saisie';
		} else if (!theme2 || theme2 === '') {
			warn = 'Le thème du plat du midi n\'a pas été saisie';
		} else if (!theme3 || theme3 === '') {
			warn = 'Le thème du légume du midi n\'a pas été saisie';
		} else if (!theme4 || theme4 === '') {
			warn = 'Le thème du dessert du midi n\'a pas été saisie';
		}

		if (!theme1Dark || theme1Dark === '') {
			warn = 'Le thème sombre de l\'entrée du midi n\'a pas été saisie';
		} else if (!theme2Dark || theme2Dark === '') {
			warn = 'Le thème sombre du plat du midi n\'a pas été saisie';
		} else if (!theme3Dark || theme3Dark === '') {
			warn = 'Le thème sombre du légume du midi n\'a pas été saisie';
		} else if (!theme4Dark || theme4Dark === '') {
			warn = 'Le thème sombre du dessert du midi n\'a pas été saisie';
		}
	}

	if (!isErrored2) {
		if (!dish1e || dish1e === '') {
			valid = 0;
			error = 'L\'entrée du soir n\'a pas été saisie';
		} else if (!dish2e || dish2e === '') {
			valid = 0;
			error = 'Le plat du soir n\'a pas été saisie';
		} else if (!dish3e || dish3e === '') {
			valid = 0;
			error = 'Le légume du soir n\'a pas été saisie';
		} else if (!dish4e || dish4e === '') {
			valid = 0;
			error = 'Le dessert du soir n\'a pas été saisie';
		}

		if (!theme1e || theme1e === '') {
			warn = 'Le thème de l\'entrée du soir n\'a pas été saisie';
		} else if (!theme2e || theme2e === '') {
			warn = 'Le thème du plat du soir n\'a pas été saisie';
		} else if (!theme3e || theme3e === '') {
			warn = 'Le thème du légume du soir n\'a pas été saisie';
		} else if (!theme4e || theme4e === '') {
			warn = 'Le thème du dessert du soir n\'a pas été saisie';
		}

		if (!theme1eDark || theme1eDark === '') {
			warn = 'Le thème sombre de l\'entrée du soir n\'a pas été saisie';
		} else if (!theme2eDark || theme2eDark === '') {
			warn = 'Le thème sombre du plat du soir n\'a pas été saisie';
		} else if (!theme3eDark || theme3eDark === '') {
			warn = 'Le thème sombre du légume du soir n\'a pas été saisie';
		} else if (!theme4eDark || theme4eDark === '') {
			warn = 'Le thème sombre du dessert du soir n\'a pas été saisie';
		}
	}


	const data = valid ? (warn ? (
		<div className='NewMenuValidHeader'>
			<CustomCheck type={3} /> Menu valide, attention: {warn}
		</div>
	) : (
		<div className='NewMenuValidHeader'>
			<CustomCheck type={1} /> Menu valide !
		</div>
	)
	) : (
		<div className='NewMenuValidHeader'>
			<CustomCheck type={2} /> Menu Invalide: {error}
		</div>
	)

	function Valid() {
		const d = date.split('-');
		const data = {
			error: isErrored1 ? 1 : 0,
			errorEvening: isErrored2 ? 1 : 0,
			date: new Date(d[0], d[1] - 1, d[2]).toLocaleDateString()
		}

		if (!isErrored1) {
			data.menu = [
				{
					"name": "Entrée",
					'content': dish1
				},
				{
					"name": "Plat",
					'content': dish2
				},
				{
					"name": "Légume",
					'content': dish3
				},
				{
					"name": "Dessert",
					'content': dish4
				}
			]

			if (theme1) {
				data.menu[0].style = theme1.replace('DishStyle', '');
			}
			if (theme2) {
				data.menu[1].style = theme2.replace('DishStyle', '');
			}
			if (theme3) {
				data.menu[2].style = theme3.replace('DishStyle', '');
			}
			if (theme4) {
				data.menu[3].style = theme4.replace('DishStyle', '');
			}

			if (theme1Dark) {
				data.menu[0].styleDark = theme1Dark.replace('DishStyle', '');
			}
			if (theme2Dark) {
				data.menu[1].styleDark = theme2Dark.replace('DishStyle', '');
			}
			if (theme3Dark) {
				data.menu[2].styleDark = theme3Dark.replace('DishStyle', '');
			}
			if (theme4Dark) {
				data.menu[3].styleDark = theme4Dark.replace('DishStyle', '');
			}
		} else {
			if (error1) {
				data.errorMessage = error1;
			}
		}

		if (!isErrored2) {
			data.evening = [
				{
					"name": "Entrée",
					'content': dish1e
				},
				{
					"name": "Plat",
					'content': dish2e
				},
				{
					"name": "Légume",
					'content': dish3e
				},
				{
					"name": "Dessert",
					'content': dish4e
				}
			]
			if (theme1e) {
				data.evening[0].style = theme1e.replace('DishStyle', '');
			}
			if (theme2e) {
				data.evening[1].style = theme2e.replace('DishStyle', '');
			}
			if (theme3e) {
				data.evening[2].style = theme3e.replace('DishStyle', '');
			}
			if (theme4e) {
				data.evening[3].style = theme4e.replace('DishStyle', '');
			}

			if (theme1eDark) {
				data.evening[0].styleDark = theme1eDark.replace('DishStyle', '');
			}
			if (theme2eDark) {
				data.evening[1].styleDark = theme2eDark.replace('DishStyle', '');
			}
			if (theme3eDark) {
				data.evening[2].styleDark = theme3eDark.replace('DishStyle', '');
			}
			if (theme4eDark) {
				data.evening[3].styleDark = theme4eDark.replace('DishStyle', '');
			}
		} else {
			if (error1) {
				data.errorEveningMessage = error2;
			}
		}

		SendMenu(data);
	}

	let button = '';
	if (valid) {
		button = (
			<div className="ValidButtonNav" onClick={Valid}>
				<svg xmlns="http://www.w3.org/2000/svg" width="4vmax" height="4vmax" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
					<polyline points="20 6 9 17 4 12"></polyline>
				</svg>
			</div>
		)
	}

	return (
		<div className="NewMenuValid">
			{data}
			<div className='NewMenuValidBody'>
				{content}
			</div>
			{button}
		</div>
	);
}

export default NewMenuValid;