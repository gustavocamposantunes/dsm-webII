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

    const onSubmit = async (data: ProductForm) => {
        try {
            const res = await fetch('/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });
            const json = await res.json();
            if (!res.ok) {
                console.error('Failed to register product', json);
                alert('Erro ao registrar produto. Verifique os campos e tente novamente.');
                return;
            }
            alert('Produto registrado com sucesso!\n' + JSON.stringify(json.item, null, 2));
        } catch (err) {
            console.error(err);
            alert('Falha de rede ao registrar produto.');
        }
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
