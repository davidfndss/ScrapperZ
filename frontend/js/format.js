// Truncate long strings and add ellipsis
export function truncateStringWithElipsis(str, limit) {
    if (str.length < limit) {
        return str;
    }
    return str.slice(0, limit) + "...";
}

// Format numeric rating into star icons
export function formatRatingStars(str) {
    const number = parseFloat(str.split(" ")[0]);

    if (isNaN(number) || number < 0 || number > 5) {
        return "(sem avaliação)";
    }

    let starsHtml = "";
    const fullStars = Math.floor(number);
    const hasHalfStar = number % 1 >= 0.25 && number % 1 < 0.75;
    const roundUp = number % 1 >= 0.75;
    const totalFullStars = fullStars + (roundUp ? 1 : 0);
    const emptyStars = 5 - totalFullStars - (hasHalfStar ? 1 : 0);

    for (let i = 0; i < totalFullStars; i++) {
        starsHtml += "<span><i class='bi bi-star-fill'></i></span>";
    }

    if (hasHalfStar) {
        starsHtml += "<span><i class='bi bi-star-half'></i></span>";
    }

    for (let i = 0; i < emptyStars; i++) {
        starsHtml += "<span><i class='bi bi-star'></i></span>";
    }

    return starsHtml + ` (${number})`;
}
