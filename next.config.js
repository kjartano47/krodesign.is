module.exports = {
	reactStrictMode: true,
	i18n: {
		locales: ["is", "en"],
		defaultLocale: "is",
	},
	async redirects() {
		return [
			{
				source: "/products/fidget-toy",
				destination: "/products/fidget-keychain",
				permanent: true,
			},
		];
	},
};
