import moment from 'moment';

function formatTime(time: number): string {
  if (time && !Number.isNaN(time)) {
    const duration = moment.duration(time, 'seconds');
    const minutes = duration.minutes().toString().padStart(2, '0');
    const seconds = duration.seconds().toString().padStart(2, '0');

    return `${minutes}:${seconds}`;
  }

  return '00:00';
}

export default formatTime;
