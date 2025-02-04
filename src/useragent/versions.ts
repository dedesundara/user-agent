import { BrowserVersion } from "./useragent-info";

const fromRange = (min: number, max: number): number => {
    min = Math.ceil(min);
    return Math.floor(Math.random() * (Math.floor(max) - min + 1)) + min;
};

const pickRandom = (list: string[] | number[]): string | number => {
    return list[Math.floor(Math.random() * list.length)];
};

export const randomChromeVersion = {
    // all versions: https://en.wikipedia.org/wiki/Google_Chrome_version_history
    variants: {
        major: { min: 110, max: 133 }, // periodically we should update those values
        minor: { static: 0 },
        patch: { min: 5481, max: 6834 },
        build: { min: 194, max: 226 },
    },
    version(): BrowserVersion {
        const major: number = fromRange(
            this.variants.major.min,
            this.variants.major.max
        );

        return {
            major: major,
            full: [
                major,
                this.variants.minor.static,
                fromRange(this.variants.patch.min, this.variants.patch.max),
                fromRange(this.variants.build.min, this.variants.build.max),
            ].join("."),
        };
    },
};

export const randomFirefoxVersion = {
    // all versions: https://en.wikipedia.org/wiki/Firefox_version_history
    variants: {
        major: { min: 110, max: 133 }, // periodically we should update those values
        minor: { static: 0 },
        patch: { variants: ["esr"] },
    },
    version(): BrowserVersion {
        const major: number = fromRange(
            this.variants.major.min,
            this.variants.major.max
        );

        return {
            major: major,
            full:
                major +
                "." +
                this.variants.minor.static.toString() +
                (fromRange(0, 9) < 3
                    ? pickRandom(this.variants.patch.variants)
                    : ""),
        };
    },
};

export const randomOperaVersion = {
    // all versions: https://en.wikipedia.org/wiki/Opera_version_history
    variants: {
        major: { min: 96, max: 115 }, // periodically we should update those values
        minor: { static: 0 },
        patch: { min: 2889, max: 5322 },
        build: { min: 16, max: 198 },
    },
    version(): BrowserVersion {
        const major: number = fromRange(
            this.variants.major.min,
            this.variants.major.max
        );

        return {
            major: major,
            full: [
                major,
                this.variants.minor.static,
                fromRange(this.variants.patch.min, this.variants.patch.max),
                fromRange(this.variants.build.min, this.variants.build.max),
            ].join("."),
        };
    },
};

export const randomSafariVersion = {
    // all versions: https://en.wikipedia.org/wiki/Safari_version_history
    variants: {
        major: { min: 614, max: 632 }, // periodically we should update those values
        minor: { min: 1, max: 36 },
        patch: { min: 1, max: 15 },
    },
    version(): BrowserVersion {
        const major: number = fromRange(
            this.variants.major.min,
            this.variants.major.max
        );

        return {
            major: major,
            full: [
                major,
                fromRange(this.variants.minor.min, this.variants.minor.max),
                fromRange(0, 9) < 3
                    ? fromRange(
                          this.variants.patch.min,
                          this.variants.patch.max
                      )
                    : "",
            ]
                .filter((s) => s.toString().length > 0)
                .join("."),
        };
    },
};

export const randomEdgeVersion = {
    // all versions: https://docs.microsoft.com/en-us/deployedge/microsoft-edge-relnote-stable-channel
    variants: {
        major: { min: 110, max: 131 }, // periodically we should update those values
        minor: { static: 0 },
        patch: { min: 1462, max: 2903 },
        build: { min: 33, max: 112 },
    },
    version(): BrowserVersion {
        const major: number = fromRange(
            this.variants.major.min,
            this.variants.major.max
        );

        return {
            major: major,
            full: [
                major,
                this.variants.minor.static,
                fromRange(this.variants.patch.min, this.variants.patch.max),
                fromRange(this.variants.build.min, this.variants.build.max),
            ].join("."),
        };
    },
};
