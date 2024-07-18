"use client";
import { IReview } from "@/typings/review";
import {
  Button,
  Input,
  Textarea,
  chakra,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import RatingStars from "../../../shared/RatingStars/RatingStars";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

interface IReviewFormProps {
  onAdd: (review: IReview) => void;
}

interface IReviewFormInputs {
  comment: string;
  rating: number;
}

export default function ReviewForm({ onAdd }: IReviewFormProps) {
  const user_avatar_url = "assets/avatar.jpeg";
  const user_email = "best_reviewer@gmail.com";

  const [selectedStars, setSelectedStars] = useState(0);
  const [hoveredStars, setHoveredStars] = useState(0);

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
    const newReview: IReview = {
      email: user_email,
      avatar_url: user_avatar_url,
      rating: data.rating,
      comment: data.comment,
    };

    onAdd(newReview);
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

  return (
    <chakra.form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.comment}>
        <Textarea
          {...register("comment", {
            required: "Comment is required.",
          })}
          bg="white"
          height={100}
          borderRadius={10}
          placeholder="Add review"
          id="comment"
          flexDirection="column"
          marginBottom={5}
          textColor="black"
          disabled={isSubmitting}
        />
        <FormErrorMessage marginBottom={3} marginTop={-2}>
          {errors.comment && errors.comment.message}
        </FormErrorMessage>
      </FormControl>

      <RatingStars
        data-testid="rating"
        label="Rating: "
        onChange={isSubmitting ? undefined : onChange}
        value={{ selected: selectedStars, hovered: hoveredStars }}
        size="30px"
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
        height={50}
        borderRadius={30}
        width={100}
        marginTop={5}
        type="submit"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Post"}
      </Button>
    </chakra.form>
  );
}
