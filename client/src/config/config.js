const config = {
	apiUrl: "http://localhost:8000/api",
	getUserId: () => {
		const user = JSON.parse(localStorage.getItem("user"));
		if (user && user.access_token) {
			return user.user.id;
		} else {
			return null;
		}
	},
	emailServiceId: "service_t0tni14",
	emailTemplateId: "template_zzmxwfl",
	emailPublicKey: "vgrEB-gEpoXI2lqUv",
	googleAuthProviderClientId:
		"643850872187-fk35jmpilv1ichn7l4r573lim4imme8a.apps.googleusercontent.com",
};

export default config;
