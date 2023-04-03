const config = {
	// apiUrl: "https://wallsync-backend.vercel.app/api",
	apiUrl: "https://wallsyncbackend.onrender.com/api",
	getUserId: () => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user && user.access_token) {
			return user.user.id;
		} else {
			return null;
		}
	},
};

export default config;
