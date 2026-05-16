export const birthDate = new Date("2011-04-15T15:45:00+02:00");

export function calculateAge(): number {
    const now: Date = new Date();
    const diffMs = now.getTime() - birthDate.getTime();
    return diffMs / (1000 * 60 * 60 * 24 * 365.2425);
}

export function toggleLanguage(pathname: string): string {
    if (pathname.includes('/en/')) {
        return pathname.replace('/en/', '/sv/');
    } else if (pathname.includes('/sv/')) {
        return pathname.replace('/sv/', '/en/');
    }
    return pathname;
}

export function getLanguageLabel(pathname: string): string {
    return pathname.includes('/en/') ? 'SV' : 'EN';
}

export function getDottedLine(pathname: string, href:string): string {
    return pathname.includes(href) ? "dotted" : "none"
}