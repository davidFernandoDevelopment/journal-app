export const fileUpload = async (file: File): Promise<string> => {
    const cloudUrl = `https://api.cloudinary.com/v1_1/practices-react/upload`;

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        const res = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });
        if (!res.ok) throw new Error('No se pudo subir la imagen');
        const cloudResp = await res.json();

        return cloudResp.secure_url;

    } catch (error) {
        throw new Error('Uops ocurred a error');
    }
};