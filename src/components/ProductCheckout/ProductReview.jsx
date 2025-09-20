import React from 'react';
// import Image from 'next/image';

const reviewsData = [
  {
    name: "Frances Guerrero",
    title: "A must-have product",
    text: "But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always.",
    rating: 5,
  },
  {
    name: "Larry Lawson",
    title: "Amazing...loved it",
    text: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humor, or non-characteristic words, etc.",
    rating: 5,
  },
  {
    name: "Lori Stevens",
    title: "Highly recommended!",
    text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from \"de Finibus Bonorum et Malorum\" by Cicero are also reproduced in their exact original form.",
    rating: 5,
  },
  {
    name: "Bryan Knight",
    title: "Makes my skin glow!",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more.",
    rating: 5,
  },
];

const STAR_ICON_URL = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/dea07f72-ece3-4780-984d-3cd835e3e7e1-soapnic-wbs-webflow-io/assets/svgs/657009a77b92e991c893c6d1_star-image-8.svg?";


const ReviewCard = ({ name, title, text, rating }) => {
  return (
    <div className="rounded-xl bg-white p-8 shadow-md">
      <h4 className="font-display text-lg font-medium text-primary">{name}</h4>
      <div className="mt-2 flex items-start justify-between">
        <h3 className="font-display text-2xl font-medium text-primary pr-4">{title}</h3>
        <div className="ml-4 flex flex-shrink-0 items-center space-x-1 pt-1">
          {Array.from({ length: rating }).map((_, i) => (
            <img
              key={i}
              src={STAR_ICON_URL}
              alt="Star"
              width={20}
              height={20}
              className="h-5 w-5"
            />
          ))}
        </div>
      </div>
      <p className="mt-4 text-base leading-relaxed text-gray-text">{text}</p>
    </div>
  );
};

export default function ReviewsList() {
  return (
    <section 
      className="py-20"
      style={{ background: 'linear-gradient(to bottom, var(--pink-accent), var(--orange-accent))' }}
    >
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-4xl font-medium text-primary">Reviews</h2>
          <p className="mt-4 text-lg leading-8 text-gray-text">
            Read Reviews from Our Satisfied Customers. Share Your Experience with Us by clicking the below button!
          </p>
          <a
            href="mailto:info@example.com"
            className="mt-8 inline-block rounded-lg border border-primary px-6 py-3 text-sm font-medium text-primary shadow-sm transition-colors hover:bg-primary/5"
          >
            Submit a review
          </a>
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-8">
          {reviewsData.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}