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
				destination: "/products/souvenirs/fidget-keychain",
				permanent: true,
			},
			{
				source: "/products/keychains",
				destination: "/products/souvenirs/keychains",
				permanent: true,
			},
			{
				source: "/products/fridge-magnets",
				destination: "/products/souvenirs/fridge-magnets",
				permanent: true,
			},
			{
				source: "/products/fidget-keychain",
				destination: "/products/souvenirs/fidget-keychain",
				permanent: true,
			},
		];
	},
};
