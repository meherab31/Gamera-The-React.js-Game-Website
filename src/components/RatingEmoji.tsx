interface RatingEmojiProps {
  score: number;
}

const RatingEmoji = ({ score }: RatingEmojiProps) => {
  const emojiMap = [
    { min: 5, emoji: "🌟" },
    { min: 4, emoji: "👍" },
    { min: 3, emoji: "👌" },
    { min: 0, emoji: "👎" },
  ];

  const getEmoji = (score: number) => {
    const match = emojiMap.find((item) => score >= item.min);
    return match ? match.emoji : "👎";
  };

  return <span>{getEmoji(score)}</span>;
};

export default RatingEmoji;
