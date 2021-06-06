export const getFormDataFromForm = (form: HTMLFormElement): FormData => {
    // Получаем все значения из формы
    const formData = new FormData(form);

    // прогоняемся по всем значениям для постобработки
    for (const [field, value] of formData.entries()) {
        if (value instanceof File) {
            const elements = form.elements as unknown as Record<string, HTMLInputElement>;
            const fileInput = elements[field];

            // если в инпуте нет файла, то делаем поле пустым
            if (!fileInput.files || !fileInput.files.length) {
                formData.set(field, '');
            }
        }
    }

    return formData;
};
