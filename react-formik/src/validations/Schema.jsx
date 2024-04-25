import * as yup from 'yup'

const schema = yup.object({
    name: yup.string()
        .required('Adı alanı zorunludur')
        .min(2, 'Minimum 2 karakter')
        .max(255, 'Maksimum 255 karakter girebilirisiz'),

    email: yup.string()
        .required('Email alanı zorunludur')
        .email('Lütfen geçerli bir email giriniz')
        .min(6, 'Minimum 6 karakter girmelisiniz')
        .max(255, 'Maksimum 255 karakter girebilirsiniz'),

    kabul: yup.boolean()
        .required(''),
})

export default schema