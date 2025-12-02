declare global {
    interface Window {
        silkConsent?: {
            isAllowed: (category: string) => boolean;
        };
    }
}

export { };
