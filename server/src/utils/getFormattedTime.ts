function getFormattedTime(seconds: string | undefined): string {
  if (!seconds) {
    return '00:00';
  }

  const minutes = Math.floor(Number(seconds) / 60);
  const remainingSeconds = Math.floor(Number(seconds) % 60);

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(remainingSeconds).padStart(2, '0');

  return `${formattedMinutes}:${formattedSeconds}`;
}

export default getFormattedTime;
