export function supportsWebP() {
  // Check if the browser supports the createImageBitmap API
  if (typeof window !== "undefined") {
    if (!window.createImageBitmap) return false;

    // Create a canvas element
    const canvas = document.createElement("canvas");
    if (!canvas || !canvas.getContext) return false;

    // Check if the canvas supports the 'image/webp' MIME type
    return canvas.toDataURL("image/webp").indexOf("data:image/webp") === 0;
  }
}

export function supportsWebM() {
  if (typeof document !== "undefined") {
    const video = document.createElement("video");
    return (
      video.canPlayType("video/webm") === "probably" ||
      video.canPlayType("video/webm") === "maybe"
    );
  }
}
