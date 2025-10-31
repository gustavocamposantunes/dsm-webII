"use client";

import { useForm } from "react-hook-form";
import FormInput from "@/components/FormInput";

type ProductForm = {
    productName: string;
    price: number;
    description: string;
    category: string;
};

export default function RegisterProductPage() {
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
        // replace with your API call later
        console.log("Submitted:", data);
        alert("Product registered!\n" + JSON.stringify(data, null, 2));
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
            <h1 className="mb-8 text-4xl font-bold">Register Product Page</h1>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-lg bg-white p-6 rounded-lg shadow"
                noValidate
            >
                <FormInput
                    id="productName"
                    label="Product Name"
                    type="text"
                    placeholder="e.g. Coffee mug"
                    register={register}
                    errors={errors}
                    helperText="Enter the product name"
                    validation={{ required: "Product name is required" }}
                />

                <FormInput
                    id="price"
                    label="Price"
                    type="number"
                    placeholder="0.00"
                    register={register}
                    errors={errors}
                    helperText="Price must be greater than or equal to 0"
                    validation={{
                        required: "Price is required",
                        valueAsNumber: true,
                        min: { value: 0, message: "Price must be >= 0" },
                    }}
                />

                <FormInput
                    id="description"
                    label="Description"
                    type="textarea"
                    placeholder="Short description"
                    register={register}
                    errors={errors}
                    helperText="Describe the product"
                    rows={4}
                    validation={{ required: "Description is required" }}
                />

                <FormInput
                    id="category"
                    label="Category"
                    type="text"
                    placeholder="e.g. Kitchen"
                    register={register}
                    errors={errors}
                    helperText="Product category"
                    validation={{ required: "Category is required" }}
                />

                <div className="flex justify-end mt-4">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}