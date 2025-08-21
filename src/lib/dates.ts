export function formatDateString(dateString: string) {
    const date = getDate(dateString);
    return formatDate(date);
}

export function formatDate(date: Date) {
    const dateString = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    }).format(date);

    const timeString = new Intl.DateTimeFormat('en-US', {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
    }).format(date);

    return `${dateString} at ${timeString}`
}

export function getDate(date: string) {
    return new Date(date);
}