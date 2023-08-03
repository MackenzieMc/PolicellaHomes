const basePath = '/images/';

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const galleryPath = function (id, width, height) {
    return `${basePath}${id}/${width}x${height}`;
};



const galleryPhotos = [
    { id: "32Austin.jpg", width: 1080, height: 800 },
    { id: "interior1.JPG", width: 1080, height: 1620 },
    { id: "exterior2.JPG", width: 1080, height: 720 },
    { id: "kitchen1", width: 1080, height: 721 },
    { id: "exterior3", width: 1080, height: 1620 },
    { id: "interior2", width: 1080, height: 607 },
    { id: "kitchen2", width: 1080, height: 608 },
    { id: "exterior4", width: 1080, height: 720 },
    { id: "interior3", width: 1080, height: 1549 },
    { id: "interior4", width: 1080, height: 720 },
    { id: "interior5", width: 1080, height: 694 },
    { id: "kitchen3", width: 1080, height: 1620 },
    { id: "interior6", width: 1080, height: 720 },
    { id: "interior7", width: 1080, height: 1440 },
    { id: "interior8", width: 1080, height: 1620 },
    { id: "exterior5", width: 1080, height: 810 },
    { id: "interior9", width: 1080, height: 610 },
    { id: "interior10", width: 1080, height: 160 },
    { id: "exterior6", width: 1080, height: 810 },
    { id: "kitchen4", width: 1080, height: 720 },
    { id: "kitchen5", width: 1080, height: 1440 },
    { id: "exterior7", width: 1080, height: 810 },
    { id: "interior11", width: 1080, height: 610 },
    { id: "interior12", width: 1080, height: 160 },
    { id: "exterior8", width: 1080, height: 810 },
    { id: "kitchen6", width: 1080, height: 720 },
    { id: "interior13", width: 1080, height: 1440 },
    { id: "interior14", width: 1080, height: 160 },
    { id: "interior15", width: 1080, height: 810 },
    { id: "kitchen7", width: 1080, height: 720 },
    { id: "interior16", width: 1080, height: 1440 },
    { id: "interior17", width: 1080, height: 810 },
    { id: "interior18", width: 1080, height: 720 },
    { id: "interior19", width: 1080, height: 1440 },
];

const photos = galleryPhotos.map((photo) => ({
    src: galleryPath(photo.id, photo.width, photo.height),
    width: photo.width,
    height: photo.height,
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