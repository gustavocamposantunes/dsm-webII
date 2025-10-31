"use client";

import { useForm } from "react-hook-form";
import FormInput from "@/components/FormInput";
import { useTranslations } from 'next-intl';

type ProductForm = {
    productName: string;
    price: number;
    description: string;
    category: string;
};

export default function RegisterProductPage() {
    const t = useTranslations('pages.registerProduct');
    const f = useTranslations('forms.product');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ProductForm>({
        defaultValues: {
            productName: "",
            price: 0,
            description: "",
            category: "",
        },
        mode: "onBlur",
    });

    const onSubmit = (data: ProductForm) => {
        console.log("Submitted:", data);
        alert("Product registered!\n" + JSON.stringify(data, null, 2));
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="mb-8 text-4xl font-bold">{t('title')}</h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-lg bg-white p-6 rounded-lg shadow"
                noValidate
            >
                <FormInput
                    id="productName"
                    label={f('productName')}
                    type="text"
                    placeholder={f('productName')}
                    register={register}
                    errors={errors}
                    helperText=""
                    validation={{ required: f('productName') + ' is required' }}
                />

                <FormInput
                    id="price"
                    label={f('price')}
                    type="number"
                    placeholder="0.00"
                    register={register}
                    errors={errors}
                    helperText=""
                    validation={{
                        required: f('price') + ' is required',
                        valueAsNumber: true,
                        min: { value: 0, message: '>= 0' },
                    }}
                />

                <FormInput
                    id="description"
                    label={f('description')}
                    type="textarea"
                    placeholder={f('description')}
                    register={register}
                    errors={errors}
                    helperText=""
                    rows={4}
                    validation={{ required: f('description') + ' is required' }}
                />

                <FormInput
                    id="category"
                    label={f('category')}
                    type="text"
                    placeholder={f('category')}
                    register={register}
                    errors={errors}
                    helperText=""
                    validation={{ required: f('category') + ' is required' }}
                />

                <div className="flex justify-end mt-4">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        {f('save')}
                    </button>
                </div>
            </form>
        </div>
    );
}
