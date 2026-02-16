export const calculateStreak = (dates) => {
  if (!dates.length) return 0;

  const sorted = [...dates]
    .map((d) => new Date(d))
    .sort((a, b) => b - a);

  let streak = 0;
  let today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let i = 0; i < sorted.length; i++) {
    const check = new Date(today);
    check.setDate(today.getDate() - i);

    if (
      sorted[i].toDateString() ===
      check.toDateString()
    ) {
      streak++;
    } else break;
  }

  return streak;
};

export const calculateLongestStreak = (
  dates
) => {
  if (!dates.length) return 0;

  const sorted = [...dates]
    .map((d) => new Date(d))
    .sort((a, b) => a - b);

  let longest = 1;
  let current = 1;

  for (let i = 1; i < sorted.length; i++) {
    const diff =
      (sorted[i] - sorted[i - 1]) /
      (1000 * 60 * 60 * 24);

    if (diff === 1) {
      current++;
      longest = Math.max(
        longest,
        current
      );
    } else {
      current = 1;
    }
  }

  return longest;
};
