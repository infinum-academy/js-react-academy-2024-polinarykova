"use client";
import { IReviewFormInputs } from "@/typings/review";
import {
  Button,
  Textarea,
  chakra,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import RatingStars from "../RatingStars/RatingStars";
import { useState, useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
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
    control,
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

  async function onSubmit(data: IReviewFormInputs) {
    const dataToSubmit: IReviewFormInputs = {
      show_id: id || "",
      comment: data.comment,
      rating: data.rating,
    };

    setSelectedStars(0);
    setValue("comment", "");
    setValue("rating", 0);

    await onAdd(dataToSubmit);
  }

  function handleStarChange(clicked: boolean, index: number) {
    if (clicked) {
      setSelectedStars(index);
      clearErrors("rating");
    } else {
      setHoveredStars(index);
    }
  }

  async function onEditingSubmit(data: IReviewFormInputs) {
    await onAdd(data);
  }

  useEffect(() => {
    setValue("comment", initialComment || "");
  }, []);

  function handleCommentChange(event: any) {
    const value = event.target.value;
    setValue("comment", value);
  }

  return (
    <chakra.form
      onSubmit={
        editing ? handleSubmit(onEditingSubmit) : handleSubmit(onSubmit)
      }
    >
      <FormControl isInvalid={!!errors.comment} isDisabled={isSubmitting}>
        <Textarea
          {...register("comment", {
            required: "Comment is required.",
          })}
          bg={editing ? "lilac" : "white"}
          height={editing ? 50 : 100}
          borderRadius={10}
          placeholder="Add review"
          id="comment"
          flexDirection="column"
          marginBottom={5}
          textColor={editing ? "white" : "black"}
          disabled={isSubmitting}
          onChange={handleCommentChange}
        />
        <FormErrorMessage marginBottom={3} marginTop={-2}>
          {errors.comment && errors.comment.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={!!errors.rating}>
        <Controller
          control={control}
          name="rating"
          rules={{
            validate: (value) => value !== 0 || "Rating is required",
          }}
          render={() => (
            <RatingStars
              data-testid="rating"
              label="Rating: "
              onChange={isSubmitting ? undefined : handleStarChange}
              value={selectedStars}
              hovered={hoveredStars}
              size={editing ? "20px" : "30px"}
            />
          )}
        />

        <FormErrorMessage marginBottom={3}>
          {errors.rating && errors.rating.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        borderRadius={30}
        marginTop={5}
        type="submit"
        isLoading={isSubmitting}
        disabled={isSubmitting}
        variant="secondary"
        size={editing ? "sm" : "md"}
      >
        {isSubmitting ? "Submitting..." : editing ? "Save" : "Post"}
      </Button>
    </chakra.form>
  );
}
