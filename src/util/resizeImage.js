export default function resizeImage(img) {
  let width = img.width;
  let height = img.height;

  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;

  if (width < maxWidth || height < maxHeight) {
    width = maxWidth;
    height = maxHeight;
  }

  img.width = width;
  img.height = height;
}
