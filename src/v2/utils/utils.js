export function computeAverageRating(reviews) {
    let rating = 0;
    reviews.forEach((review) => {
        rating = rating+=review.rating;
    });

    return (Math.round(rating/reviews.length * 100)) / 100 ;
}