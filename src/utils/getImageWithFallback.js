/**
 * Provides an image URL with fallback if the original is invalid
 * @param {string|null|undefined} imageSrc - The original image source URL
 * @param {string} fallbackImage - Optional custom fallback image path
 * @returns {string} Valid image URL
 */
export const getImageWithFallback = (imageSrc, fallbackImage = "/carosketch.jpg") => {
    if (!imageSrc || imageSrc.trim() === "") {
        return fallbackImage;
    }

    return imageSrc;
};
