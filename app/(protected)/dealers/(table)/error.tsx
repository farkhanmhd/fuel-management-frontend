"use client";

type Props = {
  error: Error;
};

export default function DealerError({ error }: Props) {
  return <p>{error.message}</p>;
}
