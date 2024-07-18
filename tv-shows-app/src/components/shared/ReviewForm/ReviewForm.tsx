"use client";
import { IReviewFormInputs } from "@/typings/review";
import {
  Button,
  Input,
  Textarea,
  chakra,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import RatingStars from "../RatingStars/RatingStars";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useId from "@/hooks/useId";

interface IReviewFormProps {
  onAdd: (review: IReviewFormInputs) => void;
  editing: boolean;
  initialComment?: string;
  initialRating?: number;
}

export default function ReviewForm({
  onAdd,
  editing,
  initialComment,
  initialRating,
}: IReviewFormProps) {
  const [selectedStars, setSelectedStars] = useState(initialRating || 0);
  const [hoveredStars, setHoveredStars] = useState(0);

  const id = useId();

  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { isSubmitting, errors },
  } = useForm<IReviewFormInputs>({
    defaultValues: { comment: "", rating: 0 },
  });

  useEffect(() => {
    setValue("rating", selectedStars);
  }, [selectedStars]);

  function onSubmit(data: IReviewFormInputs) {
    const dataToSubmit: IReviewFormInputs = {
      show_id: id || "",
      comment: data.comment,
      rating: data.rating,
    };

    onAdd(dataToSubmit);

    setSelectedStars(0);
    setValue("comment", "");
    setValue("rating", 0);
  }

  function onChange(clicked: boolean, index: number) {
    if (clicked) {
      setSelectedStars(index);
      clearErrors("rating");
    } else {
      setHoveredStars(index);
    }
  }

  function onEditingSubmit(data: IReviewFormInputs) {
    onAdd(data);
  }

  useEffect(() => setValue("comment", initialComment || ""), []);

  function handleChange(event: any) {
    const value = event.target.value;
    setValue("comment", value);
  }

  return (
    <chakra.form
      onSubmit={
        editing ? handleSubmit(onEditingSubmit) : handleSubmit(onSubmit)
      }
    >
      <FormControl isInvalid={!!errors.comment}>
        <Textarea
          {...register("comment", {
            required: "Comment is required.",
          })}
          bg={editing ? "purple.700" : "white"}
          height={editing ? 50 : 100}
          borderRadius={10}
          placeholder="Add review"
          id="comment"
          flexDirection="column"
          marginBottom={5}
          textColor={editing ? "white" : "black"}
          disabled={isSubmitting}
          onChange={handleChange}
        />
        <FormErrorMessage marginBottom={3} marginTop={-2}>
          {errors.comment && errors.comment.message}
        </FormErrorMessage>
      </FormControl>

      <RatingStars
        data-testid="rating"
        label="Rating: "
        onChange={isSubmitting ? undefined : onChange}
        value={{
          selected: selectedStars,
          hovered: hoveredStars,
        }}
        size={editing ? "20px" : "30px"}
      />

      <FormControl isInvalid={!!errors.rating}>
        <Input
          {...register("rating", {
            validate: (value) => value !== 0 || "Rating is required",
          })}
          type="hidden"
          value={selectedStars}
        />
        <FormErrorMessage marginBottom={3}>
          {errors.rating && errors.rating.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        height={editing ? 30 : 50}
        borderRadius={30}
        width={85}
        marginTop={5}
        type="submit"
        textColor="purple.900"
        disabled={isSubmitting}
        bg={editing ? "purple.100" : "white"}
      >
        {isSubmitting ? "Submitting..." : editing ? "Save" : "Post"}
      </Button>
    </chakra.form>
  );
}
