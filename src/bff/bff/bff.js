export const server = {
	async authorize(authLogin, authPassword) {
		const users = await fetch('http://localhost:3000/users').then((loadedUsers) =>
			loadedUsers.json(),
		);

		const user = users.find(({ login }) => authLogin === login);
		if (!user) {
			return {
				error: 'Пользователь не найден',
				res: null,
			};
		} else if (user.password !== authPassword) {
			return {
				error: 'Неправильный пароль',
				res: null,
			};
		} else {
			return {
				error: null,
				res: {
					changeProduct() {
						console.log('change');
					},
				},
			};
		}
	},
};
