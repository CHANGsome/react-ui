const classNames = (...names: (string|undefined)[]):string=>{
  // filter(Boolean) 相当于：filter(item=>item)
  return names.filter(Boolean).join(' ');
}
export default classNames;
