// Todo: Optimize computation for only the update, and not the whole list

export function computeAverageRating(reviews) {
    let rating = 0;
    reviews.forEach((review) => {
        rating = rating+=review.rating;
    });

    // Round off to 2 decimal places
    return (Math.round(rating/reviews.length * 100)) / 100 ;
}