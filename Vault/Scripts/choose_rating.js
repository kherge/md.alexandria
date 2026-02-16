/**
 * Prompt for a rating between 1 and 5.
 *
 * If a valid number is provided, stars equal to the rating will be returned,
 * with the rest being empty stars. If the rating is less than one, it will be
 * set to one. If the rating is greater than five, it will be set to five. If
 * the rating is not a number, an error will be thrown.
 *
 * @param {*} tp The Templater instance.
 *
 * @returns The star rating.
 */
module.exports = async (tp) => {
  let rating = parseInt(await tp.system.prompt(
    "On a scale of 1 to 5, how would you rate it?"
  ));

  if (rating === NaN) {
    throw new Error("Invalid rating, it was not a number.");
  } else if (rating < 1) {
    rating = 1;
  } else if (rating > 5) {
    rating = 5;
  }

  const stars = [
    "⭐".repeat(rating),
    "☆".repeat(5 - rating)
  ].join("");

  console.log(rating, stars);

  return stars;
};