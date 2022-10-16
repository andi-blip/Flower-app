const colors = require("tailwindcss/colors");

const tailwindMergeConfig = {
    // ↓ Set how many values should be stored in cache.
    cacheSize: 500,
    // ↓ Optional prefix from TaiLwind config
    prefix: "",
};

module.exports = {
    prefix: "",
    content: ["./src/**/*.{jsx,tsx,ts}"],
    plugins: [tailwindMergeConfig],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            "2xl": "1536px",
        },
        colors: {
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            nileblue: {
                500: "#1a374d",
            },
            green: {
                500: "#7DDF64",
                600: "#209303",
            },
            blue: {
                400: "#2c58ff",
                500: "#1439C6",
                700: "#0C2278",
            },
            white: {
                200: "#f8f8f8",
                300: "#f2f2f2",
                400: "#ededed",
                500: "#ffffff",
                600: "#FDFDFD",
                700: "#f4f4f4",
            },
            gray: {
                300: "#1A374D14",
                400: "#1A374D8F",
                500: "#aab4bd",
                600: "#1A374D",
                800: "#242e3c",
            },
            yellow: {
                500: "#cb9b00",
            },
            red: {
                500: "#ff0000",
                600: "#ef233c",
            },
        },
        backgroundOpacity: {
            5: "0.05",
            10: "0.1",
            16: "0.16",
            20: "0.2",
            25: "0.25",
            30: "0.3",
            40: "0.4",
            50: "0.5",
            60: "0.6",
            70: "0.7",
            75: "0.75",
            80: "0.8",
            90: "0.9",
            95: "0.95",
            100: "1",
        },
        extend: {
            animation: {
                "spin-slow": "spin 3s linear infinite",
            },
            fontFamily: {
                segoe: ["Segoe UI Variable", "sans-serif"],
            },
        },
    },
    corePlugins: {
        preflight: false,
    },
};
