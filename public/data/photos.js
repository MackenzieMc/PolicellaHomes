const basePath = '/galleryImages/';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const galleryPath = function (id, width, height, alt) {
    return `${basePath}${id}.JPG`;
};



const galleryPhotos = [
    { id: "90Adah", width: 1080, height: 720, alt: "exterior" },
    { id: "interior1", width: 1000, height: 1200 , alt: "interior"},
    { id: "exterior2", width: 1080, height: 720, alt: "interior" },
    { id: "kitchen1", width: 1080, height: 721, alt: "interior" },
    { id: "exterior3", width: 1080, height: 720, alt: "exterior" },
    { id: "interior2", width: 1000, height: 1200, alt: "interior" },
    { id: "kitchen2", width: 1080, height: 720, alt: "interior" },
    { id: "exterior4", width: 1080, height: 720, alt: "exterior" },
    { id: "interior3", width: 800, height: 1200, alt: "interior" },
    { id: "interior4", width: 1080, height: 720, alt: "interior" },
    { id: "interior5", width: 800, height: 1200, alt: "interior" },
    { id: "kitchen3", width: 1080, height: 720, alt: "interior" },
    { id: "interior6", width: 1080, height: 720, alt: "interior" },
    { id: "interior7", width: 1080, height: 720, alt: "interior" },
    { id: "interior8", width: 1000, height: 1200, alt: "interior" },
    { id: "exterior5", width: 1080, height: 810, alt: "exterior" },
    { id: "interior9", width: 1080, height: 720, alt: "interior" },
    { id: "interior10", width: 1000, height: 1200, alt: "interior" },
    { id: "exterior6", width: 1080, height: 810, alt: "exterior" },
    { id: "kitchen4", width: 1080, height: 720, alt: "interior" },
    { id: "kitchen5", width: 1080, height: 720, alt: "interior" },
    { id: "exterior7", width: 1080, height: 810, alt: "exterior" },
    { id: "interior11", width: 1080, height: 800, alt: "interior" },
    { id: "interior12", width: 900, height: 1200, alt: "interior" },
    { id: "exterior8", width: 1200, height: 810, alt: "exterior" },
    { id: "kitchen6", width: 1080, height: 720, alt: "interior" },
    { id: "interior13", width: 1080, height: 720, alt: "interior" },
    { id: "interior14", width: 1080, height: 720, alt: "interior" },
    { id: "interior15", width: 1000, height: 1200, alt: "interior" },
    { id: "kitchen7", width: 1080, height: 720, alt: "interior" },
    { id: "interior16", width: 1080, height: 720, alt: "interior" },
    { id: "interior17", width: 1080, height: 810, alt: "interior" },
    { id: "interior18", width: 1080, height: 720, alt: "interior" },
    { id: "interior19", width: 1080, height: 720, alt: "interior" },
];

const photos = galleryPhotos.map((photo) => ({
    src: galleryPath(photo.id, photo.width, photo.height, photo.alt),
    width: photo.width,
    height: photo.height,
    alt: photo.alt,
    srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
            src: galleryPath(photo.id, breakpoint, height),
            width: breakpoint,
            height: height,
        };
    }),
}));

export default photos;