export const getFilteredItems = (items, filters) => {
  if (!filters.done) {
      return items.filter(item => item.done === filters.done)
  }
  return items
}

export function generateUUID() {
  let d = new Date().getTime();
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = (d + Math.random()*16)%16 | 0;
      d = Math.floor(d/16);
      //eslint-disable-next-line
      return (c==='x' ? r : (r&0x3|0x8)).toString(16);
  });
};
