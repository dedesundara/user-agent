export type BrowserVersion = {
    major: number;
    full: string;
};

export type UseragentInfo = {
    useragent: string;
    engine: "webkit" | "blink" | "gecko" | "unknown";
    osType: "windows" | "linux" | "macOS" | "iOS" | "android" | "unknown";
    browser: "chrome" | "firefox" | "opera" | "safari" | "edge" | "unknown";
    browserVersion: BrowserVersion;
    brandBrowserVersion?: BrowserVersion;
};