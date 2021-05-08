import React from "react";
import { gql, useMutation } from "@apollo/client";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

const ADD_SERVICE = gql`
  mutation AddService(
    $coverImg: String!
    $title: String!
    $logoImg: String!
    $workingHours: String!
  ) {
    createServiceProvider(
      coverImg: $coverImg
      title: $title
      logoImg: $logoImg
      workingHours: $workingHours
    ) {
      coverImg
      dateCreated
      logoImg
      pib
      userId
      title
      workingHours
    }
  }
`;

export const NewService = () => {
  const history = useHistory();
  const [addService, { loading }] = useMutation(ADD_SERVICE, {
    onCompleted: () => {
      history.push("/");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (variables) => {
    addService({ variables });
  };

  return (
    <div className="mx-auto w-2/4 max-w-md md:w-full">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="firstName" className="inline-block mb-1 font-medium">
            Title
          </label>
          <input
            {...register("title", { required: true })}
            placeholder="John"
            type="text"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          {errors.title && <p className="text-red-400">Title is required.</p>}
        </div>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="lastName" className="inline-block mb-1 font-medium">
            Logo (url)
          </label>
          <input
            {...register("logoImg", { required: true })}
            placeholder="https://pexels.com/images/car..."
            type="text"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          {errors.logoImg && <p className="text-red-400">Logo is required.</p>}
        </div>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="lastName" className="inline-block mb-1 font-medium">
            Cover Image (url)
          </label>
          <input
            {...register("coverImg", { required: true })}
            placeholder="https://pexels.com/images/car..."
            type="text"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          {errors.coverImg && (
            <p className="text-red-400">Cover Image is required.</p>
          )}
        </div>
        <div className="mb-1 sm:mb-2">
          <label htmlFor="lastName" className="inline-block mb-1 font-medium">
            Working Hours
          </label>
          <input
            {...register("workingHours", { required: true })}
            placeholder="07:00-21:00"
            type="text"
            className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          />
          {errors.workingHours && (
            <p className="text-red-400">Working Hours is required.</p>
          )}
        </div>
        <div className="mt-4 mb-2 sm:mb-4">
          <button
            disabled={loading}
            type="submit"
            className="disabled:opacity-50 inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          >
            Create Service Provider
          </button>
        </div>
        <p className="text-xs text-gray-600 sm:text-sm">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
      {loading && <p>Creating...</p>}
    </div>
  );
};
