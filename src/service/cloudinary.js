export default class Cloudinary {
    constructor() {
        this.cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
        this.preset = process.env.REACT_APP_CLOUDINARY_PRESET;
    }


    uploadImg = (file, id) => {
        const url = `https://api.cloudinary.com/v1_1/${this.cloudName}/image/upload`;
    
        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", this.preset);
        formData.append("use_filname", "true");

        return fetch(url, {
        method: "POST",
        body: formData
        })
        .then(response => response.json())
        .then(res => res.url);
        
    };
}