export const getUser = (loginToFind) =>
	fetch(`http://localhost:3000/users/?login=${loginToFind}`)
		.then((response) => response.json())
		.then(
			([loadedUser]) =>
				loadedUser && {
					id: loadedUser.id,
					login: loadedUser.login,
					password: loadedUser.password,
					registeredAt: loadedUser.registered_at,
					roleId: loadedUser.role_id,
				},
		);
