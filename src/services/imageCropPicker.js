export default function (condition, width, height) {
    let image ;
    if (cond == "camera") {
        ImageCropPicker.openCamera({
            width: width || 600,
            height: height || 600,
            mediaType: 'photo',
            cropping: true
        }).then(img => {
            image = img
        });
    } else {
        ImageCropPicker.openPicker({
            width: width || 600,
            height: height || 600,
            mediaType: 'photo',
            cropping: false
        }).then(img => {
         image = img
        });
    }
    image = {
        uri: image.path,
        name: image.filename || Date.now() + "-" + image?.path?.slice(-10),
        type: image.mime
    }
    console.log("picker image : ", image)
    return image
}