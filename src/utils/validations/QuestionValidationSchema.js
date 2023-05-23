import * as Yup from 'yup';

export const QuestionValidationSchema = Yup.object().shape({
    answers: Yup.array().of(
        Yup.object().shape({
            title: Yup.string().required('Required'),
            sampleAnswer: Yup.string().required('Required'),
            type: Yup.string().required('Required'),
            options: Yup.array().of(
                Yup.object().shape({
                    title: Yup.string().required('Required'),
                    score: Yup.number().required('Required'),
                })
            )
        })
    )
});