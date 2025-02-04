export const objectToFormData = (obj) => {
    const form = new FormData()

    for (const [key, value] of Object.entries(obj)) {
        console.log(`${key}: ${value}`);
        if (value == null || value == undefined) {

        } else if (typeof (value) == "object" && !value.uri) {
            form.append(key, JSON.stringify(value))
        }
        else {
            form.append(key, value)
        }
    }
    return form
}

export const formDataHeaders = {
    headers: {
        "Content-Type": "multipart/form-data",
        "Content-Disposition": "form-data",
    }
}