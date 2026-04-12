import { useEffect, useMemo, useState } from "react";
import { LoaderCircle, Mail, MessageSquareText, Star, User } from "lucide-react";
import supabase from "@/supabase/supabaseClient";

const MAX_WORDS = 50;

function countWords(value) {
  return value.trim() ? value.trim().split(/\s+/).length : 0;
}

function RatingStars({ value, onChange, interactive = false }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const active = star <= value;

        if (!interactive) {
          return (
            <Star
              key={star}
              size={16}
              strokeWidth={1.6}
              className={active ? "text-secondary" : "text-secondary/25"}
              fill={active ? "currentColor" : "none"}
            />
          );
        }

        return (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            className="transition-transform duration-200 hover:scale-110"
            aria-label={`Rate ${star} stars`}
          >
            <Star
              size={20}
              strokeWidth={1.6}
              className={active ? "text-secondary" : "text-secondary/30"}
              fill={active ? "currentColor" : "none"}
            />
          </button>
        );
      })}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <article className="card-premium">
      <div className="h-full rounded-[calc(1.75rem-1px)] p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-secondary">
              {review.customer_name}
            </p>
            <p className="mt-1 text-xs text-primary/55">{review.customer_email}</p>
          </div>
          <RatingStars value={review.rating} />
        </div>
        <p className="mt-4 text-sm leading-7 text-primary/76">{review.message}</p>
      </div>
    </article>
  );
}

export default function ReviewSection() {
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    rating: 0,
    message: ""
  });
  const [reviews, setReviews] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingReviews, setIsLoadingReviews] = useState(true);
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const wordCount = useMemo(() => countWords(formData.message), [formData.message]);

  useEffect(() => {
    let mounted = true;

    async function fetchReviews() {
      setIsLoadingReviews(true);

      const { data, error } = await supabase
        .from("reviewtable")
        .select("id, customer_name, customer_email, rating, message, created_at")
        .order("created_at", { ascending: false })
        .limit(5);

      if (!mounted) {
        return;
      }

      if (error) {
        setFormError("Unable to load reviews right now.");
        setReviews([]);
      } else {
        setReviews(data ?? []);
      }

      setIsLoadingReviews(false);
    }

    fetchReviews();

    return () => {
      mounted = false;
    };
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    setFormError("");
    setFormSuccess("");

    if (!formData.customer_name.trim() || !formData.customer_email.trim() || !formData.message.trim()) {
      setFormError("Please complete all fields before submitting.");
      return;
    }

    if (formData.rating < 1 || formData.rating > 5) {
      setFormError("Please select a rating between 1 and 5 stars.");
      return;
    }

    if (wordCount > MAX_WORDS) {
      setFormError("Please keep your review message within 20 words.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      customer_name: formData.customer_name.trim(),
      customer_email: formData.customer_email.trim(),
      rating: formData.rating,
      message: formData.message.trim()
    };

    const { data, error } = await supabase
      .from("reviewtable")
      .insert([payload])
      .select("id, customer_name, customer_email, rating, message, created_at")
      .single();

    if (error) {
      setFormError("Review submission failed. Please try again.");
      setIsSubmitting(false);
      return;
    }

    setReviews((current) => [data, ...current].slice(0, 5));
    setFormData({
      customer_name: "",
      customer_email: "",
      rating: 0,
      message: ""
    });
    setFormSuccess("Thank you. Your review has been shared.");
    setIsSubmitting(false);
  }

  return (
    <section className="px-4 py-24 md:px-6 lg:px-8">
      <div className="container-max">
        <div className="mb-8">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-secondary">
            Guest Reviews
          </p>
          <h2 className="mt-3 text-3xl font-bold text-primary text-balance md:text-4xl">
            Share your experience and read what guests are saying.
          </h2>
        </div>

        <div className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="card-premium">
            <form onSubmit={handleSubmit} className="rounded-[calc(1.75rem-1px)] p-6 md:p-8">
              <div className="grid gap-5">
                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                    Customer Name
                  </span>
                  <div className="flex items-center gap-3 rounded-2xl border border-secondary/20 bg-white/60 px-4 py-3">
                    <User size={18} strokeWidth={1.6} className="text-secondary" />
                    <input
                      type="text"
                      value={formData.customer_name}
                      onChange={(event) => setFormData((current) => ({ ...current, customer_name: event.target.value }))}
                      className="w-full bg-transparent text-sm text-primary  focus:outline-none placeholder:text-primary/40"
                      placeholder="Your name"
                    />
                  </div>
                </label>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                    Customer Email
                  </span>
                  <div className="flex items-center gap-3 rounded-2xl border border-secondary/20 bg-white/60 px-4 py-3">
                    <Mail size={18} strokeWidth={1.6} className="text-secondary" />
                    <input
                      type="email"
                      value={formData.customer_email}
                      onChange={(event) => setFormData((current) => ({ ...current, customer_email: event.target.value }))}
                      className="w-full bg-transparent text-sm text-primary  focus:outline-none placeholder:text-primary/40"
                      placeholder="name@example.com"
                    />
                  </div>
                </label>

                <div className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                    Rating
                  </span>
                  <div className="rounded-2xl border border-secondary/20 bg-white/60 px-4 py-3">
                    <RatingStars
                      value={formData.rating}
                      onChange={(rating) => setFormData((current) => ({ ...current, rating }))}
                      interactive
                    />
                  </div>
                </div>

                <label className="grid gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
                    Message
                  </span>
                  <div className="rounded-2xl border border-secondary/20 bg-white/60 px-4 py-3">
                    <div className="flex items-start gap-3">
                      <MessageSquareText size={18} strokeWidth={1.6} className="mt-1 text-secondary" />
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(event) => setFormData((current) => ({ ...current, message: event.target.value }))}
                        className="w-full resize-none bg-transparent text-sm focus:outline-none text-primary placeholder:text-primary/40"
                        placeholder="Share your Babuji Chaay experience"
                      />
                    </div>
                  </div>
                  <p className={`text-xs ${wordCount > MAX_WORDS ? "text-red-600" : "text-primary/55"}`}>
                    {wordCount}/{MAX_WORDS} words
                  </p>
                </label>

                {formError ? <p className="text-sm text-red-600">{formError}</p> : null}
                {formSuccess ? <p className="text-sm text-primary">{formSuccess}</p> : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary inline-flex items-center justify-center gap-2 text-center disabled:pointer-events-none disabled:opacity-70"
                >
                  {isSubmitting ? <LoaderCircle size={18} className="animate-spin" /> : null}
                  Submit Review
                </button>
              </div>
            </form>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-1">
            {isLoadingReviews ? (
              <div className="card-premium">
                <div className="rounded-[calc(1.75rem-1px)] p-6 text-sm text-primary/70">
                  Loading recent reviews...
                </div>
              </div>
            ) : reviews.length > 0 ? (
              reviews.map((review) => <ReviewCard key={review.id} review={review} />)
            ) : (
              <div className="card-premium">
                <div className="rounded-[calc(1.75rem-1px)] p-6 text-sm leading-7 text-primary/70">
                  No reviews yet. Be the first guest to share your Babuji Chaay experience.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
