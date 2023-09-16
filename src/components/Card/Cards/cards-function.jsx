export function days(data) {
  function newDate(date) {
    let a = date.split("-");
    return new Date(a[0], a[2], a[1]);
  }
  return (
    (newDate(data.end_date) - newDate(data.start_date)) / (1000 * 60 * 60 * 24)
  );
}
