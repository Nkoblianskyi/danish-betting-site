interface StarRatingProps {
  rating: number
  maxRating?: number
  size?: "sm" | "md" | "lg"
}

export function StarRating({ rating, maxRating = 5, size = "md" }: StarRatingProps) {
  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5

  const sizeClasses = {
    sm: "text-sm",
    md: "text-lg",
    lg: "text-xl",
  }

  return (
    <div className="flex">
      {Array.from({ length: maxRating }).map((_, i) => (
        <span key={i} className={`text-yellow-400 ${sizeClasses[size]}`}>
          {i < fullStars ? "★" : i === fullStars && hasHalfStar ? "★" : "★"}
        </span>
      ))}
    </div>
  )
}
